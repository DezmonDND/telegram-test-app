import { useEffect, useState } from "react";
import { api } from "../utils/api";
import { flag } from "../utils/flags";
import "./Cbr.css";
import { symbol } from "../utils/symbols";

function Cbr() {
  const [currencys, setCurrencys] = useState([]);
  const [date, setDate] = useState([]);

  const previousDate = () => {
    const currentDate = new Date();

    if (currentDate.getDay() === 6) {
      currentDate.setDate(currentDate.getDate() - 2);
      return currentDate.toLocaleDateString();
    } else if (currentDate.getDay() === 0) {
      currentDate.setDate(currentDate.getDate() - 3);
      return currentDate.toLocaleDateString();
    } else {
      currentDate.setDate(currentDate.getDate() - 1);
      return currentDate.toLocaleDateString();
    }
  };

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
    <section className="bank-rates">
      <div className="bank-rates__container">
        <div className="bank-rates__titles">
          <p className="bank-rates__title bank-rates__title_left">
            Курсы валют
          </p>
          <div className="bank-rates__title-dates">
            <p className="bank-rates__title">{previousDate()}</p>
            <p className="bank-rates__title">{convertDate(date.Date) || ""}</p>
          </div>
        </div>
        {currencys.length !== 0 &&
          currencys.map((currency) => (
            <div className="bank-rates__data" key={currency.ID}>
              <img
                className="bank-rates__icon"
                src={flag(currency.CharCode)}
                alt={`${currency.Name} логотип`}
              ></img>
              <div className="bank-rates__rate-name">
                <div className="bank-rates__chars">
                  <div className="bank-rates__char">{`${currency.CharCode},  `}</div>
                  <span className="bank-rates__span">
                    {`1${symbol(currency.CharCode).toLocaleLowerCase()}`}
                  </span>
                </div>
                <div className="bank-rates__char-name">{currency.Name}</div>
              </div>
              <div className="bank-rates__price-block">
                <div className="bank-rates__value">{`${currency.Previous.toString().slice(
                  0,
                  5
                )} ₽`}</div>
                <div className="bank-rates__value">{`${currency.Value.toString().slice(
                  0,
                  5
                )} ₽`}</div>
                <span
                  className="bank-rates__arrow"
                  style={{
                    color: currency.Value > currency.Previous ? "green" : "red",
                  }}
                >
                  {currency.Value > currency.Previous ? "⭡" : "⭣"}
                </span>
              </div>
            </div>
          ))}
      </div>
    </section>
  );
}

export default Cbr;
