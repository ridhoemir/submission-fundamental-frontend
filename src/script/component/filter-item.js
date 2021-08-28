/* eslint-disable no-underscore-dangle */
class FilterItem extends HTMLElement {
  set filter(filter) {
    this._type = filter.type;
    this.render();
  }

  render() {
    this.innerHTML = `
    <button id="filterItem">${this._type}</button>`;
  }

  renderError(message) {
    this.innerHTML = '';
    this.innerHTML += `<h2 class="placeholder">${message}</h2>`;
  }
}

customElements.define('filter-item', FilterItem);
