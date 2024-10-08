import styled from "styled-components";

export const HeaderContainer = styled.header`
  padding: 1rem;
  background-color: #001d4a;
  color: #ebe9e9;
  position: fixed;
  width: 100%;
  left: 0;
`;

export const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  font-size: 1.5rem;

  a {
    text-decoration: none;
    color: #ebe9e9;
  }
  a:after {
    content: "";
    display: block;
    width: 0;
    height: 2px;
    background: #ebe9e9;
    transition: width 0.3s ease;
  }
  a:hover:after {
    width: 100%;
    transition: width 0.3s;
  }

  .active::after {
    width: 100%;
  }

  @media (max-width: 768px) {
    font-size: 1.25rem;
  }
`;

export const NavMenu = styled.nav`
  display: flex;
  gap: 2rem;

  a {
    font-size: 1.2rem;
  }
`;
