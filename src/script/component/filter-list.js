class FilterList extends HTMLElement {
  set filters(filters) {
    this._filters = filters.result;
    this._type = filters.type;
    this._event = filters.event;
    this.render();
  }

  render() {
    this.innerHTML = '';
    this._filters.forEach((filter) => {
      const filterItemElement = document.createElement('filter-item');
      const data = {
        type: filter[this._type],
      };
      filterItemElement.filter = data;
      filterItemElement.addEventListener('click', this._event);
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
