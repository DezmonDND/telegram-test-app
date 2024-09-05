import { useEffect, useState } from "react";
import { api } from "../utils/api";

function Cbr() {
  const [currencys, setCurrencys] = useState([]);

  useEffect(() => {
    api.getRussianBankCurrencys().then((res) => {
      setCurrencys(res);
    });
  }, [setCurrencys]);

  console.log(currencys);

  return (
    <></>
    // <section className="currencys">
    //   {currencys &&
    //     currencys.cbrf.columns.map((item) => (
    //       <div className="currencys__container">
    //         <p className="currencys__title">{item}</p>
    //         {currencys.data.map((item) => (
    //           <p className="currencys__title">{item}</p>
    //         ))}
    //       </div>
    //     ))}
    // </section>
  );
}

export default Cbr;
