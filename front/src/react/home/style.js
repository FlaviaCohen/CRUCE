import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import NeueMachina from "../../fonts/NeueMachinaRegular400.otf";

createGlobalStyle`
  @font-face {
    font-family: "NeueMachina";
    src: url("../../fonts/NeueMachinaRegular400.otf");
  }`;

export const BannerWeb = styled.div`
  margin: 0 auto;
  padding: 20px;
  max-width: 1200px;

  @media (max-width: 414px) {
    display: none;
  }
`;

export const BannerMob = styled.div`
  display: none;

  @media (max-width: 414px) {
    width: 100%;
    padding: 10px 0px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const BannerImg = styled.img`
  width: 100%;
`;

export const ProductsContainer = styled.div`
  margin: 0 auto;
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  @media (max-width: 414px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 24px 0px;
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px;
  padding: 10px;
  background-color: #f0f0f0;
  text-align: center;
`;

export const Img = styled.img`
  max-height: 240px;
  margin-bottom: 10px;
`;

export const Icon = styled.i`
  width: 50%;
  cursor: pointer;
`;

export const IconContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 10px;
`;

export const MenuContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 48px;

  @media (max-width: 414px) {
    display: flex;
    flex-direction: column;
    margin: 10px 20px;
  }
`;

export const CategoryTextWeb = styled.p`
  font-family: Inter;
  font-size: 15px;
  line-weigth: 18px;
  color: #8c8c8c;

  @media (max-width: 414px) {
    display: none;
  }
`;

export const CategoryTextMob = styled.p`
  display: none;
  @media (max-width: 414px) {
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: Inter;
    font-size: 15px;
    line-weigth: 18px;
    color: #8c8c8c;
    margin: 10px auto;
  }
`;

// corregir font
export const FilterText = styled.p`
  font-family: Inter;
  font-weight: 800;
  font-size: 16px;
  line-height: 18px;

  @media (max-width: 414px) {
    display: none;
  }
`;

export const Dropdown = styled.select`
  width: 192px;
  height: 36px;
  border: 2px solid #f0f0f0;
  border-radius: 3px;
  background-color: white;
  font-family: Inter;
  font-size: 15px;

  @media (max-width: 414px) {
    display: none;
  }
`;

export const DropdownMob = styled.select`
  display: none;
  @media (max-width: 414px) {
    display: flex;
    width: 100%;
    height: 44px;
    border: 2px solid #f0f0f0;
    border-radius: 3px;
    background-color: white;
    font-family: Inter;
    font-size: 16px;
    color: #505050;
    padding: 10px;
  }
`;

export const DropdownOptions = styled.option`
  font-family: Inter;
  font-size: 10px;
  @media (max-width: 414px) {
    font-size: 15px;
  }
`;

export const ProductCard = styled.div`
  width: 33%;
  margin: 0px 0px 54px;

  @media (max-width: 414px) {
    display: flex;
    flex-direction: row;
    width: 90% !important;
    margin-bottom: 35px;
    display: flex;
  }

  @media (max-width: 768px) {
    width: 50%;
  }
`;
export const ProductImg = styled.img`
  margin-left: 15px;
  margin-right: 15px;
  margin-top: 6px;
  margin-bottom: 20px;
  max-width: 300px;

  @media (max-width: 414px) {
    width: 50%;
    margin: 0px;
  }
`;

export const FunkoTitle = styled.p`
  font-family: Inter;
  font-style: normal;
  font-weight: 800;
  font-size: 15px;
  color: #7d5a94;
  margin-left: 15px;
  @media (max-width: 414px) {
    line-height: auto;
    margin: 0px 15px;
    font-size: 20px;
  }
`;

export const FunkoText = styled.p`
  font-family: Inter;
  font-size: 13px;
  margin-left: 15px;
  @media (max-width: 414px) {
    line-height: auto;
  }
`;

export const FunkoPrice = styled.p`
  font-family: Inter;
  font-size: 22px;
  line-height: 24px;
  margin-left: 15px;
  font-weight: bold;
  @media (max-width: 414px) {
    line-height: auto;
  }
`;

export const PaymentText = styled.p`
  font-family: Inter;
  font-size: 12px;
  color: #505050;
  margin-left: 15px;
  line-height: 0px;
  @media (max-width: 414px) {
    line-height: auto;
  }
`;

export const CartButton = styled.img`
  height: 48px;
  width: 60px;
  margin-left: 15px;
  cursor: pointer;
  @media (max-width: 414px) {
    display: none;
  }
`;

export const Footer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  margin-bottom: 80px;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const Text = styled.div`
  @media (max-width: 414px) {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
  }
`;

export const FilterImg = styled.div`
  display: none;

  @media (max-width: 414px) {
    display: block;
    width: 100%;
    padding: 10px 20px;
  }
`;
