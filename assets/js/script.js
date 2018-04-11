(function() {
    'use strict';

    var navbtn = document.querySelector('.section-nav-toggle'),
        navmenu = document.querySelector('#section-nav-menu'),
        navtitles;

    function toggleSectionNavMenu() {
        navmenu.classList.toggle('visible');
        navbtn.classList.toggle('nav-visible');
        navbtn.setAttribute('aria-expanded', navbtn.getAttribute('aria-expanded') === 'false' ? 'true' : 'false' );
    }

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

    function toggleSubMenu() {
        this.classList.toggle('show-menu');
    }

    /* Add navigation menu event listeners only when nav menu is present. */
    if ( null !== navmenu ) {
        var navtitles = navmenu.getElementsByClassName('nav-section-title');

        navbtn.addEventListener('click', toggleSectionNavMenu, false);

        Array.from(navtitles).forEach(function(navtitle) {
            navtitle.addEventListener('click', toggleSubMenu, false);
            navtitle.addEventListener('keyup', function(e) {
                if (e.key === 'Enter') {
                    navtitle.click();
                }
            }, false);
        } );

        document.addEventListener('click', maybeHideSectionNavMenu, false);
        document.addEventListener('keyup', function(e) {
                if (e.key === 'Escape' || e.key === 'Esc') {
                    hideSectionNavMenu();
                }
            }, false
        );
    }

    if (!(window.customElements && document.body.attachShadow)) {
        document.querySelector('pattern-demo').innerHTML = "<b>Not supported</b>";
        return;
    }

    /**
     * Creates the Pattern Demo Custom Element.
     *
     * Defines the Pattern Demo custom element as a Shadow DOM element.
     * Populates the interior content by cloning the content defined by the
     * `tmpl` template. Also provides the controllers for the pattern demo
     * width adjustment.
     */
    let tmpl = document.querySelector('#pattern-demo');
    customElements.define('pattern-demo', class extends HTMLElement {

        constructor() {
            super();
            var demoInput, resetButton, demoContainer, demoWidthSetters;

            let shadowRoot = this.attachShadow({mode: 'open'});
            shadowRoot.appendChild(tmpl.content.cloneNode(true));

            demoInput = document.getElementById('pattern-demo-width');
            resetButton = document.getElementById('reset-width');
            demoContainer = document.querySelector('pattern-demo');
            demoWidthSetters = document.getElementsByClassName('set-pattern-width');

            function getWidth(e) {
                return e.clientWidth;
            }

            function getValue(e) {
                return e.value;
            }

            function updateInputValue() {
                demoInput.value = getWidth(demoContainer);
            }

            function resizeDemoContainer(width = null) {
                if ( ! width ) {
                    demoContainer.style.width = getValue(demoInput) + 'px';
                } else if ( "number" === typeof width ) {
                    demoContainer.style.width = width + 'px';
                } else {
                    console.log('Invalid width input: Must be a number.');
                    return;
                }
            }

            var resize = {
                update: true,
                demoContainer: function() {
                    if ( undefined !== this.update ) {
                        resizeDemoContainer();
                    } else if ( "reset" == this ) {
                        demoContainer.removeAttribute('style');
                        setTimeout(updateInputValue, 500);
                    } else {
                        var num = parseInt(this, 10);
                        if (isNaN(num)) { num = 'error' }
                        resizeDemoContainer(num);
                        setTimeout(updateInputValue, 500);
                    }
                }
            };

            // Set base input controller value to container width.
            updateInputValue();

            // Update the input value to match if the user resizes the window.
            window.addEventListener('resize', updateInputValue, false);

            /*
             * Handles the width input field.
             *
             * @todo Refactor these like the ones below.
             */
            demoInput.addEventListener(
                'mouseup',
                resize.demoContainer.bind(resize),
                false
            );

            demoInput.addEventListener(
                'blur',
                resize.demoContainer.bind(resize),
                false
            );

            demoInput.addEventListener(
                'keyup', function(e) {
                    if (e.key === 'Enter') {
                        resizeDemoContainer();
                    }
                },
                false
            );

            /*
             * Handles the reset button.
             *
             * These set the window size and input to current view.
             */
            resetButton.addEventListener(
                'mouseup',
                resize.demoContainer.bind('reset', resize),
                false
            );

            resetButton.addEventListener(
                'keyup', function(e) {
                    if ( 'Enter' === e.key) {
                        var doResize = resize.demoContainer.bind('reset', resize);
                        doResize();
                    }
                },
                false
            );

            Array.from(demoWidthSetters).forEach(function(e) {
                e.addEventListener(
                    'mouseup',
                    resize.demoContainer.bind(e.value, resize),
                    false
                );
            } );

        }

    });

})();
