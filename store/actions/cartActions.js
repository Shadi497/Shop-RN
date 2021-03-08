import AsyncStorage from "@react-native-async-storage/async-storage";
import instance from "./instance";

export const addProductToCart = (newProduct) => ({
  type: "ADD_PRODUCT",
  payload: newProduct,
});

export const removeProductFromCart = (productId) => ({
  type: "REMOVE_PRODUCT",
  payload: productId,
});

export const checkout = (items) => {
  return async (dispatch) => {
    try {
      const res = await instance.post("/checkout", items);
      dispatch({
        type: "CHECKOUT",
      });
      AsyncStorage.removeItem(items);
    } catch (error) {
      console.error(error);
    }
  };
};

// export const checkout = () => ({
//   type: types.CHECKOUT,
// });
