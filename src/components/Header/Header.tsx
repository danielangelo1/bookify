import { Link } from "react-router-dom";
import { HeaderContainer, HeaderContent, NavMenu } from "./styles";

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderContent>
        <Link to="/">
          <h2>Bookify</h2>
        </Link>
        <NavMenu>
          <Link to="/books">Livros</Link>
          <Link to="/authors">Autores</Link>
        </NavMenu>
      </HeaderContent>
    </HeaderContainer>
  );
};

export default Header;
