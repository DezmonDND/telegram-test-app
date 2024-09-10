/*eslint-disable*/
import { useEffect, useState } from "react";
import { api } from "../utils/api";
import "./Currencys.css";
import { COINS } from "../utils/mocks";

function Currencys() {
  const [currencys, setCurrencys] = useState([]);
  // const [currencys, setCurrencys] = useState(COINS);

  const currencysList = currencys.slice(0 - 99);

  useEffect(() => {
    api.getAllCrypto().then((res) => {
      setCurrencys(res);
    });
  }, [setCurrencys]);

  return (
    <ul className="currencys">
      {currencysList.length !== 0 &&
        currencysList.map((item) => (
          <li className="currencys__container" key={item.id}>
            <div className="currencys__titles">
              <img
                src={item.image}
                alt={item.name}
                style={{
                  width: 25,
                  height: 25,
                }}
              ></img>
              <div className="currencys__names">
                <h4 className="currencys__title">{item.name}</h4>
                <span className="currencys__symbol">
                  {item.symbol.toLocaleUpperCase()}
                </span>
              </div>
            </div>
            <div className="currencys__price-changes">
              <p className="currencys__price">{`$ ${item.current_price}`}</p>
              <div
                className="currencys__percents"
                style={{
                  color:
                    item.price_change_percentage_24h > 0
                      ? "#52c783"
                      : "#dd475b",
                }}
              >
                {item.price_change_percentage_24h > 0 ? (
                  <span className="currencys__arrow">⭡⭡</span>
                ) : (
                  <span className="currencys__arrow">⭣⭣</span>
                )}
                <p className="currencys__percent">
                  {`${item.price_change_percentage_24h
                    .toString()
                    .slice(0, 4)} %`}
                </p>
              </div>
            </div>
          </li>
        ))}
    </ul>
  );
}

export default Currencys;
