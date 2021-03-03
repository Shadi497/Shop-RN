export const addProductToCart = (newProduct) => ({
  type: "ADD_PRODUCT",
  payload: newProduct,
});

export const removeProductFromCart = (productId) => ({
  type: "REMOVE_PRODUCT",
  payload: productId,
});

export const checkout = () => ({
  type: "CHECKOUT",
});
