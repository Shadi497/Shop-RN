import instance from "./instance";
import decode from "jwt-decode";
import { ToastAndroid } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const setUser = async (token) => {
  // const tokenS = JSON.stringify(token);
  // console.log(token);
  // console.log(tokenS);
  // await AsyncStorage.setItem("Token", tokenS);
  // instance.defaults.headers.common.Authorization = `Bearer ${JSON.parse(
  //   tokenS
  // )}`;
  // return {
  //   type: "SET_USER",
  //   payload: decode(JSON.parse(tokenS)),
  // };
  return async (dispatch) => {
    try {
      await AsyncStorage.setItem("Token", token);
      instance.defaults.headers.common.Authorization = `Bearer ${token}`;
      dispatch({
        type: SET_USER,
        payload: decode(token),
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const signup = (newUser) => {
  return async (dispatch) => {
    try {
      const res = await instance.post("/signup", newUser);
      await dispatch(setUser(res.data.token));
      ToastAndroid.show("Successfully signed up", ToastAndroid.SHORT);
    } catch (error) {
      console.error(error);
    }
  };
};

export const signin = (userData) => {
  return async (dispatch) => {
    try {
      const res = await instance.post("/signin", userData);
      await dispatch(setUser(res.data.token));
    } catch (error) {}
  };
};

export const signout = async () => {
  await AsyncStorage.removeItem("Token");
  delete instance.defaults.headers.common.Authorization;
  return {
    type: "SET_USER",
    payload: null,
  };
};

export const checkToken = async () => async (dispatch) => {
  const token = await AsyncStorage.getItem("Token");

  if (token) {
    const user = decode(token);

    if (Date.now() < user.exp) {
      dispatch(setUser(token));
    } else {
      dispatch(signout());
    }
  }
};
