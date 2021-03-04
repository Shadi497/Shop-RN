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
  SignOutButtonStyle,
  SignInButtonStyle,
  Welcome,
} from "../styles";
import { useDispatch, useSelector } from "react-redux";
import { signout } from "../store/actions/authActions";
import { useNavigation } from "@react-navigation/native";
import { Icon } from "native-base";

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
      <Welcome>
        {user && <UserTitle>{`Welcome ${user.firstname} `}</UserTitle>}
        {user && (
          <Icon
            name="sign-out"
            type="FontAwesome"
            style={{ color: "white" }}
            onPress={() => dispatch(signout())}
          ></Icon>
        )}
      </Welcome>
      {!user && (
        <SignOutButtonStyle onPress={() => navigation.navigate("SignIn")}>
          <Text style={{ color: "white" }}>Sign In</Text>
        </SignOutButtonStyle>
      )}
    </HomeBackground>
  );
};

export default Home;
