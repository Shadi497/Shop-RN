import { ImageBackground, View, Text } from "react-native";
import React from "react";
import {
  Title,
  TopStyling,
  HomeBackground,
  BottomStyling,
  ButtonStyled,
} from "../styles";

const Home = ({ navigation }) => {
  return (
    <HomeBackground
      source={{ uri: "https://wallpaperaccess.com/full/1464882.jpg" }}
    >
      <TopStyling>
        <Title>Pharmacy</Title>
      </TopStyling>
      <BottomStyling>
        <ButtonStyled onPress={() => navigation.navigate("ShopList")}>
          Shop List
        </ButtonStyled>
      </BottomStyling>
    </HomeBackground>
  );
};

export default Home;
