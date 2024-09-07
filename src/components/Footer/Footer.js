import { NavLink } from "react-router-dom";
import "./Footer.css";
import IconNews from "../../images/newspaper_icon.svg";
import IconMoney from "../../images/money_icon.svg";
import IconInternet from "../../images/internet_icon.svg";
import IconCrypto from "../../images/crypto_icon.svg";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__buttons">
        <div className="footer__buttons-block">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "footer__button-link_active" : "footer__button-link"
            }
          >
            <span className="footer__link-name">Новости</span>

            <img className="footer__image" src={IconNews} alt=""></img>
          </NavLink>
        </div>
        <div className="footer__buttons-block">
          <NavLink
            to="/currencys"
            className={({ isActive }) =>
              isActive ? "footer__button-link_active" : "footer__button-link"
            }
          >
            <span className="footer__link-name">Курсы валют</span>
            <img className="footer__image" src={IconCrypto} alt=""></img>
          </NavLink>
        </div>
        <div className="footer__buttons-block">
          <NavLink
            to="/cbr"
            className={({ isActive }) =>
              isActive ? "footer__button-link_active" : "footer__button-link"
            }
          >
            <span className="footer__link-name">Курсы ЦБ</span>
            <img className="footer__image" src={IconMoney} alt=""></img>
          </NavLink>
        </div>
        <div className="footer__buttons-block">
          <NavLink
            to="/requests"
            className={({ isActive }) =>
              isActive ? "footer__button-link_active" : "footer__button-link"
            }
          >
            <span className="footer__link-name">WebSocket</span>
            <img className="footer__image" src={IconInternet} alt=""></img>
          </NavLink>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
