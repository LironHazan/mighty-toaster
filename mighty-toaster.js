/**
 * Created by liron on 27/02/2018.
 */
class MightyToaster extends HTMLElement {

  constructor() {
    super();

    const shadowRoot = this.attachShadow({mode: 'open'});

    shadowRoot.innerHTML = `
            <style>
               #mighty-toast {
                visibility: hidden; 
                min-width: 250px; 
                margin-left: -125px; 
                border-radius: 3px;
                background-color: #FF00FF; 
                font-family: 'Helvetica Neue';
                color: #fff; 
                text-align: center; 
                border-radius: 2px; 
                padding: 16px;
                position: fixed;
                z-index: 1;
                left: 50%;
                top: 30px;
                }
               #mighty-toast.show {
                visibility: visible;
                -webkit-animation: fadein 0.5s, fadeout 0.5s 2.5s;
                animation: fadein 0.5s, fadeout 0.5s 2.5s;
                 }   
                 @-webkit-keyframes fadein {
                    from {top: 0; opacity: 0;} 
                    to {top: 30px; opacity: 1;}
                    }

                @keyframes fadein {
                    from {top: 0; opacity: 0;}
                    to {top: 30px; opacity: 1;}
                }

                @-webkit-keyframes fadeout {
                    from {top: 30px; opacity: 1;} 
                    to {top: 0; opacity: 0;}
                }
                
                @keyframes fadeout {
                    from {top: 30px; opacity: 1;}
                    to {top: 0; opacity: 0;}
                }
            </style>
            <div id="mighty-toast"></div>
        `;

    this.toast = this.shadowRoot.querySelector('#mighty-toast');

  }

  connectedCallback() {
    if (this.hasAttribute('text')) {
       const text = this.attributes.getNamedItem('text').value;
       this.toast.innerHTML = text;
    }

    this.toast.className = "show";
    setTimeout(() => { this.toast.className = this.toast.className.replace("show", ""); }, 3000);
  }

}
window.customElements.define('mighty-toaster', MightyToaster);

