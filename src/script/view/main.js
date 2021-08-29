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

  const onButtonFilterCategory = async function () {
    try {
      const data = await DataSource.filterCocktailByCategories(this.innerText.trimStart());
      const result = [];
      data.forEach(async (item) => {
        const temp = await DataSource.getCocktailById(item.idDrink);
        const drink = {
          idDrink: temp[0].idDrink,
          strCategory: temp[0].strCategory,
          strAlcoholic: temp[0].strAlcoholic,
          strDrink: temp[0].strDrink,
          strDrinkThumb: temp[0].strDrinkThumb,
        };
        let count = 1;
        let ingredient = temp[0][`strIngredient${count}`];
        while (ingredient !== null && ingredient !== undefined && ingredient !== '') {
          drink[`strIngredient${count}`] = ingredient;
          count += 1;
          ingredient = temp[0][`strIngredient${count}`];
        }
        result.push(drink);
        renderCocktailResult(result);
        // console.log(result);
      });
      console.log(result);
    } catch (message) {
      fallbackResult(message);
    }
  };

  const onButtonFilterAlcoholic = async function () {
    try {
      const data = await DataSource.filterCocktailByAlcoholic(this.innerText.trimStart());
      const result = [];
      data.forEach(async (item) => {
        const temp = await DataSource.getCocktailById(item.idDrink);
        const drink = {
          idDrink: temp[0].idDrink,
          strCategory: temp[0].strCategory,
          strAlcoholic: temp[0].strAlcoholic,
          strDrink: temp[0].strDrink,
          strDrinkThumb: temp[0].strDrinkThumb,
        };
        let count = 1;
        let ingredient = temp[0][`strIngredient${count}`];
        while (ingredient !== null && ingredient !== undefined && ingredient !== '') {
          drink[`strIngredient${count}`] = ingredient;
          count += 1;
          ingredient = temp[0][`strIngredient${count}`];
        }
        result.push(drink);
        renderCocktailResult(result);
      });
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

  const renderCocktailResult = (data) => {
    cardListElement.cards = data;
    data.forEach((item) => {
      console.log(item.idDrink);
      console.log(item.strDrinkThumb);
      console.log(item.strDrink);
    });
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
