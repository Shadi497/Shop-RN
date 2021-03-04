import { ImageBackground, View, Text } from "react-native";
import React from "react";
import {
  Title,
  TopStyling,
  HomeBackground,
  BottomStyling,
  ButtonStyled,
  UserTitle,
  SignButtonStyle,
} from "../styles";
import { useDispatch, useSelector } from "react-redux";
import { signout } from "../store/actions/authActions";
import { useNavigation } from "@react-navigation/native";

const Home = ({ navigation }) => {
  const user = useSelector((state) => state.authReducer.user);
  const dispatch = useDispatch();
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
      {user && <UserTitle>{`Welcome ${user.firstname} `}</UserTitle>}
      {user && (
        <SignButtonStyle onPress={() => dispatch(signout())}>
          <Text style={{ color: "white" }}>Sign Out</Text>
        </SignButtonStyle>
      )}
      {!user && (
        <SignButtonStyle onPress={() => navigation.navigate("SignIn")}>
          <Text style={{ color: "white" }}>Sign In</Text>
        </SignButtonStyle>
      )}
    </HomeBackground>
  );
};

export default Home;
