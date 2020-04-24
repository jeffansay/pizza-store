import React from 'react';
import styled from 'styled-components';
import { pizzaRed } from '../Styles/color';
import { Title } from '../Styles/title';

const NavbarStyled = styled.div`
  background: ${pizzaRed};
  padding: 10px;
  position: fixed;
  width: 100%;
`
const Logo = styled(Title)`
  font-size: 20px;
  color: white;
`
const Navbar = () => {
  return ( 
    <NavbarStyled>
      <Logo>
        PizzaTira 🍕
      </Logo>
    </NavbarStyled> 
  )
}

export default Navbar;