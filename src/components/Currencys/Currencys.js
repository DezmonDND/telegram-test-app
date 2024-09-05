import { useEffect, useState } from "react";
import "./Currencys.css";
import { api } from "../utils/api";

function Currencys() {
  const [currencys, setCurrencys] = useState([]);
  const currencysList = currencys.slice(0 - 99);
  console.log(currencysList);

  useEffect(() => {
    api.getCurrencys().then((res) => {
      setCurrencys(res);
    });
  }, [setCurrencys]);

  return (
    <section className="currencys">
      {currencysList.length !== 0 &&
        currencysList.map((item) => (
          <div className="currencys__container">
            <p className="currencys__title">{item.symbol}</p>
            <p className="currencys__price">{item.price}</p>
          </div>
        ))}
      <div></div>
    </section>
  );
}

export default Currencys;
