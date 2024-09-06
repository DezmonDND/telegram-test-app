import { Link } from "react-router-dom";
import "./Footer.css";
import IconNews from "../../images/newspaper_icon.svg";
import IconMoney from "../../images/money_icon.svg";
import IconInternet from "../../images/internet_icon.svg";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__buttons">
        <div className="footer__buttons-block">
          <Link to="/" className="footer__button-link">
            <span className="footer__link-name">Новости</span>

            <img className="footer__image" src={IconNews} alt=""></img>
          </Link>
        </div>
        <div className="footer__buttons-block">
          <Link to="/currencys" className="footer__button-link">
            <span className="footer__link-name">Курсы валют</span>
            <img className="footer__image" src={IconMoney} alt=""></img>
          </Link>
        </div>
        <div className="footer__buttons-block">
          <Link to="/cbr" className="footer__button-link">
            <span className="footer__link-name">Курсы ЦБ</span>
            <img className="footer__image" src={IconMoney} alt=""></img>
          </Link>
        </div>
        <div className="footer__buttons-block">
          <Link to="/requests" className="footer__button-link">
            <span className="footer__link-name">WebSocket</span>
            <img className="footer__image" src={IconInternet} alt=""></img>
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
