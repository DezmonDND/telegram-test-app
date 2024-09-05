import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__buttons">
        <div className="footer__buttons-block">
          <Link to="/cards" className="footer__button-link">
            Новости
          </Link>
        </div>
        <div className="footer__buttons-block">
          <Link to="/currencys" className="footer__button-link">
            Курсы валют
          </Link>
        </div>
        <div className="footer__buttons-block">
          <Link to="/requests" className="footer__button-link">
            Запросы
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
