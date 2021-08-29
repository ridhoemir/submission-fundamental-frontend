const axios = require('axios');

const baseUrl = 'https://www.thecocktaildb.com/api/json/v1/1/';
class DataSource {
  static searchCocktail(keyword = '') {
    // return fetch(`${baseUrl}/search.php?s=${keyword}`)
    //   .then((response) => response.json())
    //   .then((responseJson) => {
    //     if (responseJson.drinks) {
    //       return Promise.resolve(responseJson.drinks);
    //     }
    //     return Promise.reject(`${keyword} is not found`);
    //   });
    return axios.get(`${baseUrl}/search.php?s=${keyword}`)
      .then((responseJson) => {
        if (responseJson.data.drinks) {
          return Promise.resolve(responseJson.data.drinks);
        }
        return Promise.reject(`${keyword} is not found`);
      });
  }

  static filterCocktailByCategories(keyword) {
    // return fetch(`${baseUrl}/filter.php?c=${keyword}`)
    //   .then((response) => response.json())
    //   .then((responseJson) => {
    //     if (responseJson.drinks) {
    //       return Promise.resolve(responseJson.drinks);
    //     }
    //     return Promise.reject(`${keyword} is not found`);
    //   });
    return axios.get(`${baseUrl}/filter.php?c=${keyword}`)
      .then((responseJson) => {
        if (responseJson.data.drinks) {
          return Promise.resolve(responseJson.data.drinks);
        }
        return Promise.reject(`${keyword} is not found`);
      });
  }

  static filterCocktailByAlcoholic(keyword) {
    // return fetch(`${baseUrl}/filter.php?a=${keyword}`)
    //   .then((response) => response.json())
    //   .then((responseJson) => {
    //     if (responseJson.drinks) {
    //       return Promise.resolve(responseJson.drinks);
    //     }
    //     return Promise.reject(`${keyword} is not found`);
    //   });
    return axios.get(`${baseUrl}/filter.php?a=${keyword}`)
      .then((responseJson) => {
        if (responseJson.data.drinks) {
          return Promise.resolve(responseJson.data.drinks);
        }
        return Promise.reject(`${keyword} is not found`);
      });
  }

  static listCocktailCategories() {
    // return fetch(`${baseUrl}/list.php?c=list`)
    //   .then((response) => response.json())
    //   .then((responseJson) => {
    //     if (responseJson.drinks) {
    //       return Promise.resolve(responseJson.drinks);
    //     }
    //     return Promise.reject('category filter is not found');
    //   });
    return axios.get(`${baseUrl}/list.php?c=list`)
      .then((responseJson) => {
        console.log(responseJson.data.drinks);
        if (responseJson.data.drinks) {
          return Promise.resolve(responseJson.data.drinks);
        }
        return Promise.reject('category filter is not found');
      });
  }

  static listCocktailAlcoholic() {
    // return fetch(`${baseUrl}/list.php?a=list`)
    //   .then((response) => response.json())
    //   .then((responseJson) => {
    //     if (responseJson.drinks) {
    //       return Promise.resolve(responseJson.drinks);
    //     }
    //     return Promise.reject('alcoholic filter is not found');
    //   });
    return axios.get(`${baseUrl}/list.php?a=list`)
      .then((responseJson) => {
        console.log(responseJson.data.drinks);
        if (responseJson.data.drinks) {
          return Promise.resolve(responseJson.data.drinks);
        }
        return Promise.reject('alcoholic filter is not found');
      });
  }

  static getCocktailById(keyword) {
    // return fetch(`${baseUrl}/lookup.php?i=${keyword}`)
    //   .then((response) => response.json())
    //   .then((responseJson) => {
    //     if (responseJson.drinks) {
    //       return Promise.resolve(responseJson.drinks);
    //     }
    //     return Promise.reject(`${keyword} is not found`);
    //   });
    return axios.get(`${baseUrl}/lookup.php?i=${keyword}`)
      .then((responseJson) => {
        if (responseJson.data.drinks) {
          return Promise.resolve(responseJson.data.drinks);
        }
        return Promise.reject(`${keyword} is not found`);
      });
  }
}

export default DataSource;
