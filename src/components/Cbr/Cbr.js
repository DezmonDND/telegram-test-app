import { useEffect, useState } from "react";
import { api } from "../utils/api";
import "./Cbr.css";

function Cbr() {
  const [currencys, setCurrencys] = useState([]);

  useEffect(() => {
    Promise.all([api.getRussianBankCurrencys()])
      .then((res) => {
        setCurrencys(res);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [setCurrencys]);

  return (
    <section className="currencys">
      <div className="currencys__block">
        {currencys.length !== 0 && (
          <div className="currencys__text">{currencys[0].Valute.AED.Name}</div>
        )}
        {currencys.length !== 0 && (
          <div className="currencys__text">{currencys[0].Valute.AED.Value}</div>
        )}
      </div>
      <div className="currencys__block">
        {currencys.length !== 0 && (
          <div className="currencys__text">{currencys[0].Valute.EUR.Name}</div>
        )}
        {currencys.length !== 0 && (
          <div className="currencys__text">{currencys[0].Valute.EUR.Value}</div>
        )}
      </div>
      <div className="currencys__block">
        {currencys.length !== 0 && (
          <div className="currencys__text">{currencys[0].Valute.TRY.Name}</div>
        )}
        {currencys.length !== 0 && (
          <div className="currencys__text">{currencys[0].Valute.TRY.Value}</div>
        )}
      </div>
      <div className="currencys__block">
        {currencys.length !== 0 && (
          <div className="currencys__text">{currencys[0].Valute.USD.Name}</div>
        )}
        {currencys.length !== 0 && (
          <div className="currencys__text">{currencys[0].Valute.USD.Value}</div>
        )}
      </div>
      <div className="currencys__block">
        {currencys.length !== 0 && (
          <div className="currencys__text">{currencys[0].Valute.AMD.Name}</div>
        )}
        {currencys.length !== 0 && (
          <div className="currencys__text">{currencys[0].Valute.AMD.Value}</div>
        )}
      </div>
    </section>
  );
}

export default Cbr;
