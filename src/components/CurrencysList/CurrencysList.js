import { symbol } from "../utils/symbols";

function CurrencysList(props) {
  const { currency, flag } = props;

  return (
    <>
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
    </>
  );
}

export default CurrencysList;
