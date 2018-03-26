/**
 * Created by liron on 27/02/2018.
 */
export class MightyToaster extends HTMLElement {

  constructor() {
      super();

      const shadowRoot = this.attachShadow({mode: 'open'});

      shadowRoot.innerHTML = `
            <style>
               #mighty-toast {
                visibility: hidden; 
                min-width: 250px; 
                border-radius: 3px;
                background-color: #FF00FF; 
                font-family: 'Bowlby One', cursive;
                font-weight: 300;
                text-align: center; 
                padding: 16px;
                position: fixed;
                z-index: 1;
                left: 50%;
                top: 5rem;
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
      this.toast.className = "show";
      setTimeout(() => { this.toast.className = this.toast.className.replace("show", ""); }, 3000);
    }

  get text() {
    return this.getAttribute('text');
  }

  set text(value) {
    this.toast.innerHTML = value;
    this.setAttribute('text', value);
  }

  get color() {
    return this.getAttribute('color');
  }

  set color(value) {
    this.toast.style.backgroundColor = value;
    this.setAttribute('color', value);
  }

  }
MightyToaster.observedAttributes = [ 'text'];

window.customElements.define('mighty-toast', MightyToaster);
