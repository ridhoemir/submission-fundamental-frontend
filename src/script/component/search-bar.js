class SearchBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  set clickEvent(event) {
    // eslint-disable-next-line no-underscore-dangle
    this._clickEvent = event;
    this.render();
  }

  get value() {
    return this.querySelector('#searchElement').value;
  }

  render() {
    this.innerHTML = `
    <div id="search-container" class="search-container">
      <input placeholder="Search Cocktail" id="searchElement" type="search">
      <button id="searchButtonElement" type="submit">Search</button>
      <span class="separator"></span>
    </div>
    `;

    // eslint-disable-next-line no-underscore-dangle
    this.querySelector('#searchButtonElement').addEventListener('click', this._clickEvent);
  }
}

customElements.define('search-bar', SearchBar);
