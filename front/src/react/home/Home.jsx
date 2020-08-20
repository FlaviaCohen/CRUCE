import React from "react";
import banner from "../../img/banner_listado.png";
import { products } from "./helpers";
import cart from "../../img/cart.png";
import paginado from "../../img/paginado.png";
import filter from "../../img/filtrar.png";

import {
  BannerWeb,
  BannerMob,
  BannerImg,
  MenuContainer,
  CategoryTextWeb,
  CategoryTextMob,
  FilterText,
  Dropdown,
  DropdownMob,
  DropdownOptions,
  ProductsContainer,
  ProductCard,
  FunkoText,
  FunkoTitle,
  FunkoPrice,
  PaymentText,
  CartButton,
  ProductImg,
  Text,
  Footer,
  FilterImg,
} from "./style";

const Home = () => {
  return (
    <>
      <CategoryTextMob>
        Inicio / Juguetes / <b style={{ color: "black" }}>Funko Pop</b>
      </CategoryTextMob>
      <FilterImg>
        <img src={filter} style={{ width: "100%" }} />
      </FilterImg>
      <BannerWeb>
        <BannerImg src={banner} />
      </BannerWeb>
      <MenuContainer id='Menu'>
        <CategoryTextWeb>
          Inicio / Juguetes / <b style={{ color: "black" }}>Funko Pop</b>
        </CategoryTextWeb>
        <FilterText>Filtrar</FilterText>
        <Dropdown>
          <DropdownOptions value="categoria">Categoría</DropdownOptions>
          <DropdownOptions value="precio">Precio</DropdownOptions>
        </Dropdown>
        <DropdownMob>
          <DropdownOptions value="categoria">Categoría</DropdownOptions>
          <DropdownOptions value="precio">Precio</DropdownOptions>
        </DropdownMob>
      </MenuContainer>
      <BannerMob>
        <BannerImg src={banner} />
      </BannerMob>
      <ProductsContainer>
        {products.map((product) => (
          <ProductCard id='productCard' key={product.id}>
            <ProductImg src={product.image} />
            <Text id='text'>
              <FunkoTitle>Funko</FunkoTitle>
              <FunkoText>{product.title}</FunkoText>
              <PaymentText>6 cuotas s/interés de</PaymentText>
              <FunkoPrice>{product.price}</FunkoPrice>
              <FunkoText>
                Final: <strike style={{ color: "#505050" }}>$2390</strike>{" "}
                <b style={{ color: "red" }}> $1.269</b>
              </FunkoText>
              <CartButton src={cart}></CartButton>
            </Text>
          </ProductCard>
        ))}
      </ProductsContainer>
      <Footer>
        <img src={paginado} />
      </Footer>
    </>
  );
};

export default Home;
