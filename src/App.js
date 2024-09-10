import { Route, Routes, useLocation } from "react-router";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Cards from "./components/Cards/Cards";
import Currencys from "./components/Currencys/Currencys";
import Requests from "./components/Requests/Requests";
import Cbr from "./components/Cbr/Cbr";

function App() {
  const location = useLocation();

  const headerTitle = () => {
    if (location.pathname === "/") {
      return "Новости";
    } else if (location.pathname === "/currencys") {
      return "Курсы криптовалют";
    } else if (location.pathname === "/cbr") {
      return "Курсы валют (ЦБ РФ)";
    } else {
      return "WebSocket";
    }
  };

  return (
    <div className="page">
      <Header title={headerTitle}></Header>
      <Routes>
        <Route path="/" element={<Cards></Cards>}></Route>
        <Route path="/currencys" element={<Currencys></Currencys>}></Route>
        <Route path="/cbr" element={<Cbr></Cbr>}></Route>
        <Route path="/requests" element={<Requests></Requests>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
