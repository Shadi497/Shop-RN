import { Button, Card, CardItem, Icon, ListItem, Thumbnail } from "native-base";
import React from "react";
import { Text, View } from "react-native";
import { useDispatch } from "react-redux";
import {
  checkout,
  removeProductFromCart,
} from "../../store/actions/cartActions";
import { T } from "../../styles";

export const CartItem = ({ products }) => {
  const dispatch = useDispatch();
  return (
    <>
      <Card>
        <CardItem>
          <>
            <Thumbnail source={{ uri: products.image }} />
            <View style={{ display: "flex", flexDirection: "column" }}>
              <T
                style={{
                  marginTop: "15%",
                  marginBottom: "5%",
                  fontWeight: "bold",
                }}
              >
                {products.name}
              </T>
              <T style={{ color: "blue", backgroundColor: "lightgrey" }}>
                {products.price} BD
              </T>
            </View>
            <Text
              style={{
                marginLeft: "13%",
                fontWeight: "bold",
              }}
            >
              {(products.price * products.quantity).toFixed(1)} BD
            </Text>
            <Icon
              type="Fontisto"
              name="trash"
              style={{ marginLeft: "20%" }}
              onPress={() => dispatch(removeProductFromCart(products.id))}
            />
          </>
        </CardItem>
        <CardItem
          style={{
            justifyContent: "center",
          }}
        >
          <Text>Quantity: </Text>
          <Text>{products.quantity}</Text>
          {/* </View> */}
        </CardItem>
      </Card>
    </>
  );
};
