import React, {useState} from "react";
import { StatusBar } from "react-native";
import {
  Container,
  TopoArea,
  LocaliAra,
  LocaliBtn,
  LocalizaText,
  Logo,
  MenuDir,
  MenuCentr,
  MenuEsquer,
  MenuImage,
  IconSearch,
  IconCart,
  ButtonSearch,
  ButtonCart
} from "./styles";
import {useNavigation} from '@react-navigation/native'


import Maps from "../../assets/localizacao.png";
import Menu from "../../assets/menu.png";
import Search from "../../assets/search.png";
import Cart from "../../assets/cart.png";


export default function Home({navigation}) {

  return (
    <Container>
      <StatusBar barStyle="light-content" />
      <TopoArea>
        <MenuDir onPress={() => navigation.toggleDrawer()}>
          <MenuImage source={Menu} />
        </MenuDir>
        <MenuCentr></MenuCentr>
        <MenuEsquer>
          <ButtonSearch onPress={() => {console.log('Abrir search')}}>
            <IconSearch source={Search} />
          </ButtonSearch>
          <ButtonCart>
            <IconCart source={Cart} onPress={() => {console.log('Abrir cart')}}/>
          </ButtonCart>
        </MenuEsquer>
      </TopoArea>
      <LocaliAra>
        <Logo source={Maps} />
        <LocaliBtn>
          <LocalizaText>Informe seu CEP ? </LocalizaText>
        </LocaliBtn>
      </LocaliAra>
    </Container>
  );
}
