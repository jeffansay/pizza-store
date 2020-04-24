import React from 'react';
import styled from 'styled-components';
import { foods } from '../Data/Food';
import { Food, FoodGrid, FoodLabel } from '../Components/FoodGrid';

const MenuStyle = styled.div`
  height: 1000px;
  margin: 0px 400px 50px 20px;
`

const Menu = () => {
  return (
    <MenuStyle>
      <h1>Menu </h1>
      <FoodGrid>
      {foods.map(food => (
        <Food img={food.img}>
          <FoodLabel>
          {food.name}
          </FoodLabel>
          </Food>
      ))}
      </FoodGrid>
    </MenuStyle>
  );
};

export default Menu;