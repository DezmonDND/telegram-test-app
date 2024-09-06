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
    return fetch(this._cardsUrl, {
      method: "GET",
    }).then(this._checkError);
  }

  getCurrencys() {
    return fetch(this._currencysUrl, {
      method: "GET",
    }).then(this._checkError);
  }

  getRussianBankCurrencys() {
    return fetch(this._cbrUrl, {}).then(this._checkError);
  }
}

export const api = new Api({
  cardsUrl: "https://api.spacexdata.com/v3/history",
  currencysUrl: "https://data-api.binance.vision/api/v3/ticker/price",
  cbrUrl: "https://www.cbr-xml-daily.ru/daily_json.js",
});
