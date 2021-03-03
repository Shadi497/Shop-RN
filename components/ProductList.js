import { Spinner } from "native-base";
import React from "react";
import { ScrollView, View } from "react-native";
import { useSelector } from "react-redux";
import { Txt } from "../styles";
import { ProductItem } from "./ProductItem";

const ProductList = ({ products, navigation }) => {
  const loading = useSelector((state) => state.productReducer.loading);

  const productlist = products.map((product) => (
    <ProductItem navigation={navigation} product={product} key={product.id} />
  ));
  return (
    <View>
      {loading ? (
        <>
          <Txt>Product List</Txt>
          <Spinner />
        </>
      ) : (
        <>
          <Txt>Product List</Txt>
          <View
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {productlist}
          </View>
        </>
      )}
    </View>
  );
};

export default ProductList;
