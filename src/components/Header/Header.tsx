import { NavLink } from "react-router-dom";
import { HeaderContainer, HeaderContent, NavMenu } from "./styles";

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderContent>
        <NavLink
          className={({ isActive }) => (isActive ? "active" : "")}
          to="/"
        >
          <h2>Bookify</h2>
        </NavLink>
        <NavMenu>
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "")}
            to="/books"
          >
            Livros
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "")}
            to="/authors"
          >
            Autores
          </NavLink>
        </NavMenu>
      </HeaderContent>
    </HeaderContainer>
  );
};

export default Header;
