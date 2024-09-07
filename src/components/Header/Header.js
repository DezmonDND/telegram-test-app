import "./Header.css";

function Header(props) {
const {title} = props;

  return (
    <header className="header">
      <h2 className="header__title">{title()}</h2>
    </header>
  );
}

export default Header;
