/* eslint-disable no-underscore-dangle */
import './filter-item';

class FilterList extends HTMLElement {
  set filters(filters) {
    this._filters = filters.result;
    this._type = filters.type;
    this._event = filters.event;
    this.render();
  }

  // set clickEvent(event) {
  //   this._clickEvent = event;
  //   this.render();
  // }

  render() {
    this._filters.forEach((filter) => {
      const filterItemElement = document.createElement('filter-item');
      const data = {
        type: filter[this._type],
        event: this._event,
      };
      filterItemElement.filter = data;
      this.appendChild(filterItemElement);
    });
  }

  renderError(message) {
    this.innerHTML = `
    <h2 class="placeholder">${message}</h2>
    `;
  }
}

customElements.define('filter-list', FilterList);
