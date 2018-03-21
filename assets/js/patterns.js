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
