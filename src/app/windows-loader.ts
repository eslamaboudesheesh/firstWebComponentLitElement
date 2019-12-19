import {LitElement, html, customElement, property, css, unsafeCSS} from 'lit-element';

console.log('windows-loader module');

@customElement('windows-loader')
export class windowsloader extends LitElement {

  @property() name;


  static get styles() {
    return css`

    .loader {
      position: absolute;
      width: 90px;
      height: 90px;
      margin: auto;
      top: 50%;
      left: 50%;
      margin-left: -45px;
      margin-top: -45px;
      
    }
    .loader .section-loader {
      position: absolute;
      width: 86px;
      height: 86px;
      opacity: 0;
      -moz-transform: rotate(225deg);
      -moz-animation: orbit 4.4s infinite;
      -webkit-transform: rotate(225deg);
      -webkit-animation: orbit 4.4s infinite;
      -ms-transform: rotate(225deg);
      -ms-animation: orbit 4.4s infinite;
      -o-transform: rotate(225deg);
      -o-animation: orbit 4.4s infinite;
      transform: rotate(5deg);
      animation: orbit 4.4s infinite;
    }
    .loader .section-loader .ball {
      position: absolute;
      width: 7px;
      height: 7px;
      background: #aed6da;
      left: 0px;
      top: 0px;
      -moz-border-radius: 11px;
      -webkit-border-radius: 11px;
      -ms-border-radius: 11px;
      -o-border-radius: 11px;
      border-radius: 11px;
    }
    .loader .ball-1 {
      -moz-animation-delay: 0.96s;
      -webkit-animation-delay: 0.96s;
      -ms-animation-delay: 0.96s;
      -o-animation-delay: 0.96s;
      animation-delay: 0.96s;
    }
    .loader .ball-2 {
      -moz-animation-delay: 0.19s;
      -webkit-animation-delay: 0.19s;
      -ms-animation-delay: 0.19s;
      -o-animation-delay: 0.19s;
      animation-delay: 0.19s;
    }
    .loader .ball-3 {
      -moz-animation-delay: 0.38s;
      -webkit-animation-delay: 0.38s;
      -ms-animation-delay: 0.38s;
      -o-animation-delay: 0.38s;
      animation-delay: 0.38s;
    }
    .loader .ball-4 {
      -moz-animation-delay: 0.58s;
      -webkit-animation-delay: 0.58s;
      -ms-animation-delay: 0.58s;
      -o-animation-delay: 0.58s;
      animation-delay: 0.58s;
    }
    .loader .ball-5 {
      -moz-animation-delay: 0.77s;
      -webkit-animation-delay: 0.77s;
      -ms-animation-delay: 0.77s;
      -o-animation-delay: 0.77s;
      animation-delay: 0.77s;
    }
    /* for Firefox */
    @-moz-keyframes orbit {
      0% {
        opacity: 1;
        z-index: 99;
        -moz-transform: rotate(180deg);
        -moz-animation-timing-function: ease-out;
      }
      7% {
        opacity: 1;
        -moz-transform: rotate(300deg);
        -moz-animation-timing-function: linear;
        -moz-origin: 0%;
      }
      30% {
        opacity: 1;
        -moz-transform: rotate(410deg);
        -moz-animation-timing-function: ease-in-out;
        -moz-origin: 7%;
      }
      39% {
        opacity: 1;
        -moz-transform: rotate(645deg);
        -moz-animation-timing-function: linear;
        -moz-origin: 30%;
      }
      70% {
        opacity: 1;
        -moz-transform: rotate(770deg);
        -moz-animation-timing-function: ease-out;
        -moz-origin: 39%;
      }
      75% {
        opacity: 1;
        -moz-transform: rotate(900deg);
        -moz-animation-timing-function: ease-out;
        -moz-origin: 70%;
      }
      76% {
        opacity: 0;
        -moz-transform: rotate(900deg);
      }
      100% {
        opacity: 0;
        -moz-transform: rotate(900deg);
      }
    }
    /* for Safari and Chrome*/
    @-webkit-keyframes orbit {
      0% {
        opacity: 1;
        z-index: 99;
        -webkit-transform: rotate(180deg);
        -webkit-animation-timing-function: ease-out;
      }
      7% {
        opacity: 1;
        -webkit-transform: rotate(300deg);
        -webkit-animation-timing-function: linear;
        -webkit-origin: 0%;
      }
      30% {
        opacity: 1;
        -webkit-transform: rotate(410deg);
        -webkit-animation-timing-function: ease-in-out;
        -webkit-origin: 7%;
      }
      39% {
        opacity: 1;
        -webkit-transform: rotate(645deg);
        -webkit-animation-timing-function: linear;
        -webkit-origin: 30%;
      }
      70% {
        opacity: 1;
        -webkit-transform: rotate(770deg);
        -webkit-animation-timing-function: ease-out;
        -webkit-origin: 39%;
      }
      75% {
        opacity: 1;
        -webkit-transform: rotate(900deg);
        -webkit-animation-timing-function: ease-out;
        -webkit-origin: 70%;
      }
      76% {
        opacity: 0;
        -webkit-transform: rotate(900deg);
      }
      100% {
        opacity: 0;
        -webkit-transform: rotate(900deg);
      }
    }
    /*for Internet Explorer*/
    @-ms-keyframes orbit {
      0% {
        opacity: 1;
        z-index: 99;
        -ms-transform: rotate(180deg);
        -ms-animation-timing-function: ease-out;
      }
      7% {
        opacity: 1;
        -ms-transform: rotate(300deg);
        -ms-animation-timing-function: linear;
        -ms-origin: 0%;
      }
      30% {
        opacity: 1;
        -ms-transform: rotate(410deg);
        -ms-animation-timing-function: ease-in-out;
        -ms-origin: 7%;
      }
      39% {
        opacity: 1;
        -ms-transform: rotate(645deg);
        -ms-animation-timing-function: linear;
        -ms-origin: 30%;
      }
      70% {
        opacity: 1;
        -ms-transform: rotate(770deg);
        -ms-animation-timing-function: ease-out;
        -ms-origin: 39%;
      }
      75% {
        opacity: 1;
        -ms-transform: rotate(900deg);
        -ms-animation-timing-function: ease-out;
        -ms-origin: 70%;
      }
      76% {
        opacity: 0;
        -ms-transform: rotate(900deg);
      }
      100% {
        opacity: 0;
        -ms-transform: rotate(900deg);
      }
    }
    /* for Opera*/
    @-o-keyframes orbit {
      0% {
        opacity: 1;
        z-index: 99;
        -o-transform: rotate(180deg);
        -o-animation-timing-function: ease-out;
      }
      7% {
        opacity: 1;
        -o-transform: rotate(300deg);
        -o-animation-timing-function: linear;
        -o-origin: 0%;
      }
      30% {
        opacity: 1;
        -o-transform: rotate(410deg);
        -o-animation-timing-function: ease-in-out;
        -o-origin: 7%;
      }
      39% {
        opacity: 1;
        -o-transform: rotate(645deg);
        -o-animation-timing-function: linear;
        -o-origin: 30%;
      }
      70% {
        opacity: 1;
        -o-transform: rotate(770deg);
        -o-animation-timing-function: ease-out;
        -o-origin: 39%;
      }
      75% {
        opacity: 1;
        -o-transform: rotate(900deg);
        -o-animation-timing-function: ease-out;
        -o-origin: 70%;
      }
      76% {
        opacity: 0;
        -o-transform: rotate(900deg);
      }
      100% {
        opacity: 0;
        -o-transform: rotate(900deg);
      }
    }
    @keyframes orbit {
      0% {
        opacity: 1;
        z-index: 99;
        transform: rotate(180deg);
        animation-timing-function: ease-out;
        
      }
      7% {
        opacity: 1;
        transform: rotate(300deg);
        animation-timing-function: linear;
        origin: 0%;
      }
      30% {
        opacity: 1;
        transform: rotate(410deg);
        animation-timing-function: ease-in-out;
        origin: 7%;
      }
      39% {
        opacity: 1;
        transform: rotate(645deg);
        animation-timing-function: linear;
        origin: 30%;
      }
      70% {
        opacity: 1;
        transform: rotate(770deg);
        animation-timing-function: ease-out;
        origin: 39%;
      }
      75% {
        opacity: 1;
        transform: rotate(900deg);
        animation-timing-function: ease-out;
        origin: 70%;
      }
      76% {
        opacity: 0;
        transform: rotate(900deg);
      }
      100% {
        opacity: 0;
        transform: rotate(900deg);
      }
    }
        

    `;
  }

  render() {
    
    return html`<div class="loader">
    <div class="section-loader ball-1">
        <div class="ball">
        </div>
    </div>
    <div class="section-loader ball-2">
        <div class="ball">
        </div>
    </div>
    <div class="section-loader ball-3">
        <div class="ball">
        </div>
    </div>
    <div class="section-loader ball-4">
        <div class="ball">
        </div>
    </div>
    <div class="section-loader ball-5">
        <div class=" ball">
        </div>
    </div>
</div>
     `;
  
  }
}