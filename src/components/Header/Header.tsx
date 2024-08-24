import { Link } from "react-router-dom";
import { HeaderContainer, NavMenu } from "./styles";

const Header = () => {
  return (
    <HeaderContainer>
      <Link to="/">
        <h2>Bookify</h2>
      </Link>
      <NavMenu>
        <Link to="/books">Livros</Link>
        <Link to="/authors">Autores</Link>
      </NavMenu>
    </HeaderContainer>
  );
};

export default Header;
