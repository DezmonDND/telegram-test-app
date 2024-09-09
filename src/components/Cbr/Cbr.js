import { useEffect, useState } from "react";
import { api } from "../utils/api";
import { flag } from "../utils/flags";
import "./Cbr.css";
import CurrencysList from "../CurrencysList/CurrencysList";

function Cbr() {
  const [currencys, setCurrencys] = useState([]);
  const [filteredCurrencys, setFilteredCurrencys] = useState([]);
  const [date, setDate] = useState([]);
  const [value, setValue] = useState("");

  const previousDate = () => {
    const currentDate = new Date();

    if (currentDate.getDay() === 6) {
      currentDate.setDate(currentDate.getDate() - 2);
      return currentDate.toLocaleDateString();
    } else if (currentDate.getDay() === 0) {
      currentDate.setDate(currentDate.getDate() - 3);
      return currentDate.toLocaleDateString();
    } else if (currentDate.getDay() === 1) {
      currentDate.setDate(currentDate.getDate() - 4);
      return currentDate.toLocaleDateString();
    } else {
      currentDate.setDate(currentDate.getDate() - 1);
      return currentDate.toLocaleDateString();
    }
  };

  useEffect(() => {
    if (!value) {
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
    } else {
      setFilteredCurrencys(
        currencys.filter(
          (item) =>
            item.Name.toLocaleLowerCase().includes(value.toLocaleLowerCase()) ||
            item.CharCode.toLocaleLowerCase().includes(
              value.toLocaleLowerCase()
            )
        )
      );
    }
  }, [value]);

  function convertDate(data) {
    let date = new Date(data);
    return date.toLocaleDateString();
  }

  function handleChange(e) {
    setValue(e.target.value);
  }

  return (
    <section className="bank-rates">
      <input type="text" value={value} onChange={handleChange}></input>
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
        {!value && currencys.length !== 0
          ? currencys.map((currency) => (
              <div className="bank-rates__data" key={currency.ID}>
                <CurrencysList currency={currency} flag={flag} />
              </div>
            ))
          : filteredCurrencys.map((currency) => (
              <div className="bank-rates__data" key={currency.ID}>
                <CurrencysList currency={currency} flag={flag} />
              </div>
            ))}
      </div>
    </section>
  );
}

export default Cbr;
