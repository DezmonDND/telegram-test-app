export class Api {
  constructor({ cardsUrl, currencysUrl, cbrUrl }) {
    this._cardsUrl = cardsUrl;
    this._currencysUrl = currencysUrl;
    this._cbrUrl = cbrUrl;
  }

  _checkError(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  getNews() {
    return fetch(`${this._cardsUrl}&apiKey=d8773ba00bc146c6a51a373c0237e141`, {
      method: "GET",
    }).then(this._checkError);
  }

  getCurrencys() {
    return fetch(this._currencysUrl, {
      method: "GET",
    }).then(this._checkError);
  }

  getRussianBankCurrencys() {
    return fetch(this._cbrUrl, {
      method: "GET",
    }).then(this._checkError);
  }
}

export const api = new Api({
  cardsUrl: "https://newsapi.org/v2/top-headlines?country=us&category=business",
  currencysUrl: "https://data-api.binance.vision/api/v3/ticker/price",
  cbrUrl:
    "https://iss.moex.com/iss/statistics/engines/currency/markets/selt/rates.json?iss.meta=off",
});
