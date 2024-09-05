import { Route, Routes } from "react-router";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Cards from "./components/Cards/Cards";
import Currencys from "./components/Currencys/Currencys";
import Requests from "./components/Requests/Requests";
import Cbr from "./components/Cbr/Cbr";

function App() {
  return (
    <body className="page">
      <Header></Header>
      <Routes>
        <Route path="/cards" element={<Cards></Cards>}></Route>
        <Route path="/currencys" element={<Currencys></Currencys>}></Route>
        <Route path="/cbr" element={<Cbr></Cbr>}></Route>
        <Route path="/requests" element={<Requests></Requests>}></Route>
      </Routes>
      <Footer></Footer>
    </body>
  );
}

export default App;
