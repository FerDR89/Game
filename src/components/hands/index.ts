const stone = require("url:../../assets/piedra.svg");
const paper = require("url:../../assets/papel.svg");
const scissors = require("url:../../assets/tijera.svg");

class HandsComp extends HTMLElement {
  shadow: ShadowRoot;
  tag: string;
  imgURL: string;
  hola: string;
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: "open" });
    this.tag = this.getAttribute("tag");
  }
  connectedCallback() {
    this.selectHands();
    this.render();
  }
  selectHands() {
    this.tag == "stone"
      ? (this.imgURL = stone)
      : this.tag == "paper"
      ? (this.imgURL = paper)
      : this.tag == "scissors"
      ? (this.imgURL = scissors)
      : "";
  }
  render() {
    const rootEl = document.createElement("div");
    rootEl.className = "root";
    const width = this.getAttribute("width") || "80px";
    const height = this.getAttribute("height") || "175px";
    rootEl.innerHTML = `
    <img class="${this.tag}" src="${this.imgURL}" alt="thit´s a ${this.tag}">
    `;
    const style = document.createElement("style");
    style.innerHTML = `
    .root{
        width:${width};
        height:${height};
    }
    .stone,.paper,.scissors{
      width:100%;
      height:100%;
    }    
    `;
    this.shadow.appendChild(style);
    this.shadow.appendChild(rootEl);
  }
}
customElements.define("hands-el", HandsComp);
