import { useEffect, useState } from "react";
import { api } from "../utils/api";
import "./Cbr.css";

function Cbr() {
  const [currencys, setCurrencys] = useState([]);
  const [date, setDate] = useState([]);

  useEffect(() => {
    api
      .getRussianBankCurrencys()
      .then((res) => {
        let result = Object.values(res.Valute);
        setCurrencys(result);
        setDate(res);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [setCurrencys]);

  function convertDate(data) {
    let date = new Date(data);
    return date.toLocaleDateString();
  }

  return (
    <section className="currencys">
      {date.Date !== "" && (
        <h2 className="currencys__title_cbr">{`Курс валют на: ${convertDate(
          date.Date
        )}`}</h2>
      )}
      {currencys.length !== 0 &&
        currencys.map((currency) => (
          <div className="currencys__block" key={currency.Name}>
            <div className="currencys__text">{currency.Name}</div>
            <div className="currencys__text">{currency.Value}</div>
          </div>
        ))}
    </section>
  );
}

export default Cbr;
