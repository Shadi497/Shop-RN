import { Button, List, ListItem, Text } from "native-base";
import React from "react";
import { View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { checkout } from "../../store/actions/cartActions";
import { CartItem } from "./CartItem";

export const CartList = () => {
  const cart = useSelector((state) => state.cartReducer.items);
  const products = useSelector((state) => state.productReducer.products);
  const dispatch = useDispatch();

  const cartProduct = cart
    .map((item) => ({
      ...products.find((product) => product.id === item.id),
      quantity: item.quantity,
    }))
    .map((item) => <CartItem products={item} key={item.id} />);

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
          <Button
            onPress={() => dispatch(checkout())}
            style={{
              marginTop: "55%",
              marginLeft: "34%",
              width: "30%",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text
              style={{
                color: "white",
              }}
            >
              CheckOut
            </Text>
          </Button>
        </List>
      )}
    </View>
  );
};
