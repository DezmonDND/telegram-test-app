export class Api {
  constructor({ cardsUrl, cbrUrl, coingeckoUrl }) {
    this._cardsUrl = cardsUrl;
    this._cbrUrl = cbrUrl;
    this._coingeckoUrl = coingeckoUrl;
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

  getRussianBankCurrencys() {
    return fetch(this._cbrUrl, {}).then(this._checkError);
  }

  getAllCrypto() {
    return fetch(this._coingeckoUrl, {
      headers: {
        "x-cg-demo-api-key": "CG-ux1EvCPiDbBMxr9aFCi6xqU9",
      },
    }).then(this._checkError);
  }
}

export const api = new Api({
  cardsUrl: "https://api.spacexdata.com/v3/history",
  cbrUrl: "https://www.cbr-xml-daily.ru/daily_json.js",
  coingeckoUrl:
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd",
});
