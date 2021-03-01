import { Spinner } from "native-base";
import React from "react";
import { View } from "react-native";
import { useSelector } from "react-redux";
import { List, Txt } from "../styles";
import { ProductItem } from "./ProductItem";

const ProductList = () => {
  const products = useSelector((state) => state.productReducer.products);
  const shops = useSelector((state) => state.shopReducer.shops);

  const loading = useSelector((state) => state.productReducer.loading);

  // console.log(shops.products);
  //   if (loading) return <Spinner />;

  const productlist = products.map((product) => (
    <ProductItem product={product} key={product.id} />
  ));
  return (
    <View>
      <List>
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
      </List>
    </View>
  );
};

export default ProductList;
