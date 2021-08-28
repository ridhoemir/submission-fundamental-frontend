/* eslint-disable no-underscore-dangle */
class CardItem extends HTMLElement {
  set cocktail(cocktail) {
    this._cocktail = cocktail;
    this.render();
  }

  render() {
    this.innerHTML = `
    <img class="fan-art-card" src="${this._cocktail.strDrinkThumb}" alt="Fan Art">
    <div class="card-info">
        <button id="filterItem" >#${this._cocktail.strCategory}</button>
        <button id="filterItem" >#${this._cocktail.strAlcoholic}</button>
        <h2>Name : ${this._cocktail.strDrink}</h2> 
    </div>
    `;
  }
}

customElements.define('card-item', CardItem);
