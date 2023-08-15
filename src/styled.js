import { NavLink } from "react-router-dom";
import styled from "styled-components";

const activeClassName = "active";

export const StyledNavLink = styled(NavLink).attrs(() => ({
  activeClassName,
}))`
  &.${activeClassName} {
    color: white;
    font-weight: bold;
    text-decoration: none;
  }
  & {
    text-decoration: none;
    color: white;
    font-weight: normal;
    transition: 0.3s
  }
  &:hover{
    color:rgb(255, 255, 255, 0.8)
  }
`;

export const Navigation = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #007380;
  height: 60px;
`;

export const NavList = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const NavItem = styled.li`
  margin: 0 15px;
`;
