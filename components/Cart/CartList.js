import { List, Text } from "native-base";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Alert, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { checkout } from "../../store/actions/cartActions";
import { ButtonStyle } from "../../styles";
import { CartItem } from "./CartItem";

export const CartList = () => {
  const cart = useSelector((state) => state.cartReducer.items);
  const products = useSelector((state) => state.productReducer.products);
  const dispatch = useDispatch();

  const user = useSelector((state) => state.authReducer.user);

  const navigation = useNavigation();

  const cartProduct = cart
    .map((item) => ({
      ...products.find((product) => product.id === item.id),
      quantity: item.quantity,
    }))
    .map((item) => <CartItem products={item} key={item.id} />);

  const handlePress = () => {
    if (user) dispatch(checkout());
    else {
      Alert.alert(
        "Warning!",
        "You must sign in first !",
        [
          {
            text: "Cancel",
            style: "cancel",
          },
          { text: "Sign In", onPress: () => navigation.navigate("SignIn") },
        ],
        { cancelable: false }
      );
    }
  };
  return (
    <View
    //
    >
      {cartProduct.length === 0 ? (
        <View
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginVertical: "25%",
          }}
        >
          <Text>No Products!</Text>
        </View>
      ) : (
        <List>
          {cartProduct}
          <ButtonStyle onPress={handlePress}>
            <Text
              style={{
                color: "white",
              }}
            >
              CheckOut
            </Text>
          </ButtonStyle>
        </List>
      )}
    </View>
  );
};
