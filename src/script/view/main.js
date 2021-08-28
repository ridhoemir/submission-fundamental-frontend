/* eslint-disable no-underscore-dangle */
/* eslint-disable no-use-before-define */
import '../component/filter-list';
import '../component/search-bar';
import '../component/card-list';
import DataSource from '../data/data-source';

const main = () => {
  const searchElement = document.querySelector('search-bar');
  const cardListElement = document.querySelector('card-list');
  const onButtonSearchClicked = async () => {
    try {
      const result = await DataSource.searchCocktail(searchElement.value);
      renderCocktailResult(result);
    } catch (message) {
      fallbackResult(message);
    }
  };

  const onButtonFilterCategory = async () => {
    try {
      const data = await DataSource.filterCocktailByCategories(this.innerText);
      const result = [];
      data.forEach(async (item) => {
        const temp = await DataSource.getCocktailById(item.idDrink);
        const drink = {
          idDrink: temp.idDrink,
          strCategory: temp.strCategory,
          strAlcoholic: temp.strAlcoholic,
          strDrink: temp.strDrink,
          strDrinkThumb: temp.strDrinkThumb,
        };
        result.push(drink);
      });
      renderCocktailResult(result);
    } catch (message) {
      fallbackResult(message);
    }
  };

  const onButtonFilterAlcoholic = async () => {
    try {
      const data = await DataSource.filterCocktailByAlcoholic(this.innerText);
      const result = [];
      data.forEach(async (item) => {
        const temp = await DataSource.getCocktailById(item.idDrink);
        const drink = {
          idDrink: temp.idDrink,
          strCategory: temp.strCategory,
          strAlcoholic: temp.strAlcoholic,
          strDrink: temp.strDrink,
          strDrinkThumb: temp.strDrinkThumb,
        };
        result.push(drink);
      });
      renderCocktailResult(result);
    } catch (message) {
      fallbackResult(message);
    }
  };

  const renderFilterCategory = async () => {
    try {
      const data = await DataSource.listCocktailCategories();
      const categoryField = document.querySelector('.filterCategory');
      const list = document.createElement('filter-list');
      const temp = {
        type: 'strCategory',
        result: data,
        event: onButtonFilterCategory,
      };
      list.filters = temp;
      categoryField.appendChild(list);
    } catch (message) {
      fallbackResult(message);
    }
  };

  const renderFilterAlcoholic = async () => {
    try {
      const data = await DataSource.listCocktailAlcoholic();
      const categoryField = document.querySelector('.filterAlcoholic');
      const list = document.createElement('filter-list');
      const temp = {
        type: 'strAlcoholic',
        result: data,
        event: onButtonFilterAlcoholic,
      };
      list.filters = temp;
      categoryField.appendChild(list);
    } catch (message) {
      fallbackResult(message);
    }
  };

  const renderCocktailResult = async (data) => {
    cardListElement.cards = data;
  };

  const fallbackResult = (message) => {
    cardListElement.renderError(message);
  };

  document.addEventListener('DOMContentLoaded', () => {
    renderFilterCategory();
    renderFilterAlcoholic();
    searchElement.clickEvent = onButtonSearchClicked;
    // searchElement.clickEvent = onButtonFilterCategory;
  });
};

export default main;
