import './card-item';

class CardList extends HTMLElement {
  set cards(cards) {
    this._cards = cards;
    this.render();
  }

  render() {
    this.innerHTML = '';
    this._cards.forEach((card) => {
      const cardItemElement = document.createElement('card-item');
      cardItemElement.cocktail = card;
      this.appendChild(cardItemElement);
    });
  }

  renderError(message) {
    this.innerHTML = '';
    this.innerHTML += `<h2 class="placeholder">${message}</h2>`;
  }
}

customElements.define('card-list', CardList);
