/* eslint-disable no-param-reassign */
/* eslint-disable consistent-return */
/* eslint-disable prefer-promise-reject-errors */
const baseUrl = 'https://www.thecocktaildb.com/api/json/v1/1/';
class DataSource {
  static searchCocktail(keyword = '') {
    return fetch(`${baseUrl}/search.php?s=${keyword}`)
      .then((response) => response.json())
      .then((responseJson) => {
        if (responseJson.drinks) {
          return Promise.resolve(responseJson.drinks);
        }
        return Promise.reject(`${keyword} is not found`);
      });
  }

  static filterCocktailByCategories(keyword) {
    return fetch(`${baseUrl}/filter.php?c=${keyword}`)
      .then((response) => response.json())
      .then((responseJson) => {
        if (responseJson.drinks) {
          return Promise.resolve(responseJson.drinks);
        }
        return Promise.reject(`${keyword} is not found`);
      });
  }

  static filterCocktailByAlcoholic(keyword) {
    return fetch(`${baseUrl}/filter.php?a=${keyword}`)
      .then((response) => response.json())
      .then((responseJson) => {
        if (responseJson.drinks) {
          return Promise.resolve(responseJson.drinks);
        }
        return Promise.reject(`${keyword} is not found`);
      });
  }

  static listCocktailCategories() {
    return fetch(`${baseUrl}/list.php?c=list`)
      .then((response) => response.json())
      .then((responseJson) => {
        if (responseJson.drinks) {
          return Promise.resolve(responseJson.drinks);
        }
      });
  }

  static listCocktailAlcoholic() {
    return fetch(`${baseUrl}/list.php?a=list`)
      .then((response) => response.json())
      .then((responseJson) => {
        if (responseJson.drinks) {
          return Promise.resolve(responseJson.drinks);
        }
      });
  }

  static getCocktailById(keyword) {
    return fetch(`${baseUrl}/lookup.php?i=${keyword}`)
      .then((response) => response.json())
      .then((responseJson) => {
        if (responseJson.drinks) {
          return Promise.resolve(responseJson.drinks);
        }
      });
  }
}

export default DataSource;
