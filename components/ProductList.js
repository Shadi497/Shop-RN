import { Spinner } from "native-base";
import React from "react";
import { View } from "react-native";
import { useSelector } from "react-redux";
import { Txt } from "../styles";
import { ProductItem } from "./ProductItem";

const ProductList = () => {
  const products = useSelector((state) => state.productReducer.products);

  const loading = useSelector((state) => state.productReducer.loading);

  const productlist = products.map((product) => (
    <ProductItem product={product} key={product.id} />
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
          {productlist}
        </>
      )}
    </View>
  );
};

export default ProductList;
