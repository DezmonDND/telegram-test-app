import { useLocation } from "react-router";
import Cards from "../Cards/Cards";
import Currencys from "../Currencys/Currencys";
import Requests from "../Requests/Requests";
import "./Main.css";

function Main() {
  const location = useLocation();

  return (
    <main className="main">
      {location.pathname === "/" && <Cards></Cards>}
      {location.pathname === "/currencys" && <Currencys></Currencys>}
      {location.pathname === "/requests" && <Requests></Requests>}
    </main>
  );
}

export default Main;
