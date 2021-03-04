import React, { useState } from "react";
import { Text } from "react-native";
import { useDispatch } from "react-redux";
import { signin, signup } from "../../store/actions/authActions";
import { SignButtonStyle, Signin, AuthTextInput } from "../../styles";
import { useNavigation } from "@react-navigation/native";
import { ScrollView } from "react-native-gesture-handler";

export default function SignUp() {
  const [user, setUser] = useState({
    username: "",
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });

  const navigation = useNavigation();

  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(signup(user));
    navigation.replace("ShopList");
    ToastAndroid.show(`Welcome ${user.username}`, ToastAndroid.SHORT);
  };

  return (
    <ScrollView>
      <Signin>
        <Text style={{ marginBottom: 30, fontWeight: "bold", fontSize: 25 }}>
          Sign Up
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
        <AuthTextInput
          onChangeText={(email) => setUser({ ...user, email })}
          placeholder="Email"
          keyboardType="email-address"
        ></AuthTextInput>
        <AuthTextInput
          onChangeText={(firstname) => setUser({ ...user, firstname })}
          placeholder="First Name"
        ></AuthTextInput>
        <AuthTextInput
          onChangeText={(lastname) => setUser({ ...user, lastname })}
          placeholder="Last Name"
        ></AuthTextInput>
        <SignButtonStyle onPress={handleSubmit}>
          <Text style={{ color: "white" }}>Sign In</Text>
        </SignButtonStyle>
        <Text
          style={{ marginBottom: 25 }}
          onPress={() => navigation.navigate("SignIn")}
        >
          Have an account? <Text style={{ fontWeight: "bold" }}> Sign In!</Text>
        </Text>
      </Signin>
    </ScrollView>
  );
}
