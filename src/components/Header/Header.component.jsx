import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import DisneyLogo from "../../assets/images/logo.svg";

import { headerData } from "./headerData";

const Header = () => {
  return (
    <Nav>
      <Logo to="/">
        <img src={DisneyLogo} alt="" />
      </Logo>
      <NavMenu>
        {headerData.map((item) => (
          <a href={item.location} key={item.id}>
            <img src={item.icon} alt={item.name} />
            <span>{item.name}</span>
          </a>
        ))}
      </NavMenu>
      <Login>Login</Login>
    </Nav>
  );
};

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 70px;
  background-color: #090b13;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 36px;
  letter-spacing: 16px;
  z-index: 3;
`;

const Logo = styled(Link)`
  padding: 0;
  width: 80px;
  margin-top: 4px;
  min-height: 70px;
  font-size: 0;
  display: flex;

  img {
    display: block;
    width: 100%;
  }
`;

const NavMenu = styled.div`
  display: flex;
  align-items: center;
  flex-flow: wrap nowrap;
  height: 100%;
  justify-content: flex-end;
  margin: 0;
  padding: 0;
  position: relative;
  margin-right: auto;
  margin-left: 25px;

  a {
    display: flex;
    align-items: center;
    padding: 0 12px;

    img {
      height: 20px;
      min-height: 20px;
      width: 20px;
      z-index: auto;
    }

    span {
      color: rgb(249, 249, 249);
      font-size: 13px;
      letter-spacing: 1.42px;
      line-height: 1.08;
      padding: 2px 0;
      white-space: nowrap;
      position: relative;
      text-transform: uppercase;

      &:before {
        content: "";
        background-color: rgb(249, 249, 249);
        border-radius: 0 0 4px 4px;
        bottom: -6px;
        height: 2px;
        left: 0;
        opacity: 0;
        position: absolute;
        right: 0;
        transform-origin: left center;
        transform: scaleX(0);
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
        visibility: hidden;
        width: auto;
      }
    }

    &:hover {
      span:before {
        transform: scaleX(1);
        visibility: visible;
        opacity: 1 !important;
      }
    }
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const Login = styled(Link)`
  background-color: rgba(0, 0, 0, 0.6);
  padding: 8px 16px;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  border: 1px solid #f9f9f9;
  border-radius: 4px;
  transition: all 0.2s ease 0s;
`;

export default Header;
