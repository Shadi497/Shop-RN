import React, { useState } from "react";
import { Text, ToastAndroid } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { signin } from "../../store/actions/authActions";
import { SignButtonStyle, Signin, AuthTextInput } from "../../styles";
import { useNavigation } from "@react-navigation/native";

export default function SignIn() {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const navigation = useNavigation();

  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(signin(user));
    navigation.replace("ShopList");
    ToastAndroid.show(`Welcome ${user.username}`, ToastAndroid.SHORT);
  };

  return (
    <Signin>
      <Text style={{ marginBottom: 30, fontWeight: "bold", fontSize: 25 }}>
        Sign In
      </Text>

      <AuthTextInput
        onChangeText={(username) => setUser({ ...user, username })}
        placeholder="Username"
      ></AuthTextInput>
      <AuthTextInput
        onChangeText={(password) => setUser({ ...user, password })}
        secureTextEntry={true}
        placeholder="Password"
      ></AuthTextInput>
      <SignButtonStyle onPress={handleSubmit}>
        <Text style={{ color: "white" }}>Sign In</Text>
      </SignButtonStyle>
      <Text onPress={() => navigation.navigate("SignUp")}>
        Don't have an account?
        <Text style={{ fontWeight: "bold" }}> Sign Up!</Text>
      </Text>
    </Signin>
  );
}
