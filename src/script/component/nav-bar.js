class NavBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <h1>CockTailz</h1>
    `;
  }
}

customElements.define('nav-bar', NavBar);
