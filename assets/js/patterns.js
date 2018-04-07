let navbtn = document.querySelector('.section-nav-toggle');
let navmenu = document.querySelector('#section-nav-menu');
let navtitles = navmenu.getElementsByClassName('nav-section-title');

function toggleSectionNavMenu() {
    navmenu.classList.toggle('visible');
    navbtn.classList.toggle('nav-visible');
    navbtn.setAttribute('aria-expanded', navbtn.getAttribute('aria-expanded') === 'false' ? 'true' : 'false' );
}

navbtn.addEventListener('click', toggleSectionNavMenu, false);

function maybeHideSectionNavMenu(e) {
    if ( ! navbtn.contains(e.target) && ! navmenu.contains(e.target) ) {
        hideSectionNavMenu();
    }
}

function hideSectionNavMenu() {
    if (navmenu.classList.contains('visible')) {
        navmenu.classList.remove('visible');
        navbtn.classList.remove('nav-visible');
        navbtn.setAttribute("aria-expanded", false);
    }
}

document.addEventListener('click', maybeHideSectionNavMenu, false);
document.addEventListener('keyup', function(e) {
        if (e.key === 'Escape' || e.key === 'Esc') {
            hideSectionNavMenu();
        }
    }, false );

function toggleSubMenu() {
    this.classList.toggle('show-menu');
}

Array.from(navtitles).forEach(function(navtitle) {
    navtitle.addEventListener('click', toggleSubMenu, false);
    navtitle.addEventListener('keyup', function(e) {
        if (e.key === 'Enter') {
            navtitle.click();
        }
    }, false);
} );

(function() {
    'use strict';

    if (!(window.customElements && document.body.attachShadow)) {
        document.querySelector('pattern-demo').innerHTML = "<b>Not supported</b>";
        return;
    }

    let tmpl = document.querySelector('#pattern-demo');

    customElements.define('pattern-demo', class extends HTMLElement {

        constructor() {
            super();
            let shadowRoot = this.attachShadow({mode: 'open'});
            shadowRoot.appendChild(tmpl.content.cloneNode(true));
        }

    });

    var demoInput, resetButton, demoContainer, demoWidthSetters;

    const baseContainerWidth = getWidth(document.querySelector('pattern-demo'));

    demoInput = document.getElementById('pattern-demo-width');
    resetButton = document.getElementById('reset-width');
    demoContainer = document.querySelector('pattern-demo');
    demoWidthSetters = document.getElementsByClassName('pattern-demo-width-setter');

    // Set base input controller value.
    demoInput.value = baseContainerWidth;

    function getWidth(e) {
        return e.clientWidth;
    }

    function getValue(e) {
        return e.value;
    }

    function resizeDemoContainer() {
        demoContainer.style.width = getValue(demoInput) + 'px';
    }

    var smallBreakpoint = 800;

    var resize = {
        reset: baseContainerWidth,
        demoContainer: function() {
            if ( undefined !== this.reset ) {
                demoContainer.style.width = this.reset + 'px';
                demoInput.value = this.reset;
            } else if ( "live" == this ) {
                resizeDemoContainer();
            } else if ( "smallBp" == this ) {
                demoContainer.style.width = smallBreakpoint + 'px';
                demoInput.value = smallBreakpoint;
            } else {
                console.log('Please enter a valid resize.demoContainer parameter.');
            }
        }
    };

    // Refactor these like the ones below.
    demoInput.addEventListener('mouseup', resize.demoContainer.bind("live", resize), false );
    demoInput.addEventListener('blur', resize.demoContainer.bind("live", resize), false );
    demoInput.addEventListener('keyup', function(e) {
        if (e.key === 'Enter') {
            resizeDemoContainer();
        }
    }, false );

    resetButton.addEventListener(
        'mouseup',
        resize.demoContainer.bind(resize),
        false
    );

    resetButton.addEventListener(
        'keyup', function(e) {
            if ( 'Enter' === e.key) {
                resize.demoContainer();
            }
        },
        false
    );

    // Array.from(demoWidthSetters).forEach(function(set) {
    //     set.addEventListener('mouseup', function() {
    //         var newValue = getValue(set);
    //         resizeDemoContainer(demoContainer, newValue);
    //         setWidthInputValue(newValue);
    //     }, false);
    // } );

})();
