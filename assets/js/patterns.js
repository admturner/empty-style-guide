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

    let demoInput = document.getElementById('pattern-demo-width');
    let demoContainer = document.querySelector('pattern-demo');
    let demoWidthSetters = document.getElementsByClassName('pattern-demo-width-setter');

    function getWidth(e) {
        return e.clientWidth;
    }

    function getValue(e) {
        return e.value;
    }

    function updateWidthValue(item) {
        item.value = getWidth(document.querySelector('pattern-demo'));
    }

    function resizeDemoContainer(item, width) {
        item.style.width = width + "px"
    }

    // First populate the demo width input value with its base value.
    updateWidthValue(demoInput);

    demoInput.addEventListener('mouseup', function() {
        var newValue = getValue(demoInput);
        resizeDemoContainer(demoContainer, newValue);
        updateWidthValue(demoInput);
    } );

    demoInput.addEventListener('keyup', function(e) {
        if (e.key === 'Enter') {
            var newValue = getValue(demoInput);
            resizeDemoContainer(demoContainer, newValue);
            updateWidthValue(demoInput);
        }
    }, false );

    // Array.from(demoWidthSetters).forEach(function(set) {
    //     set.addEventListener('mouseup', function() {
    //         var newValue = getValue(set);
    //         resizeDemoContainer(demoContainer, newValue);
    //         updateWidthValue(newValue);
    //     }, false);
    // } );

})();
