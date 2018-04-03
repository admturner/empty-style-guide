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

})();
