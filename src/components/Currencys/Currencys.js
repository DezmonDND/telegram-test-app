import { useEffect, useState } from "react";
import "./Currencys.css";
import { api } from "../utils/api";

function Currencys() {
  const [currencys, setCurrencys] = useState([]);
  const currencysList = currencys.slice(0 - 99);

  useEffect(() => {
    api.getCurrencys().then((res) => {
      setCurrencys(res);
    });
  }, [setCurrencys]);

  return (
    <ul className="currencys">
      {currencysList.length !== 0 &&
        currencysList.map((item) => (
          <li className="currencys__container" key={item.symbol}>
            <p className="currencys__title">{item.symbol}</p>
            <p className="currencys__price">{item.price}</p>
          </li>
        ))}
      <div></div>
    </ul>
  );
}

export default Currencys;
