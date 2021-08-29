import './filter-item';

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
        <h4>Name : ${this._cocktail.strDrink}</h4>
        <h4>Ingredient : </h4>
        <ol class="ingredient"></ol>
    </div>
    `;

    this.renderIngredient();
  }

  renderIngredient() {
    const ingredientField = this.querySelector('.ingredient');
    let count = 1;
    let ingredient = this._cocktail[`strIngredient${count}`];
    while (ingredient !== undefined && ingredient !== null && ingredient !== '') {
      ingredientField.innerHTML += `<li>${ingredient}</li>`;
      count += 1;
      ingredient = this._cocktail[`strIngredient${count}`];
    }
  }
}

customElements.define('card-item', CardItem);
