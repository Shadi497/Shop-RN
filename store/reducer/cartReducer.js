import { Alert, ToastAndroid } from "react-native";

const initialState = {
  items: [],
  loading: true,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "CHECKOUT":
      Alert.alert(
        "Success",
        "Thank you for shopping with us !",
        [
          {
            text: "Cancel",
            style: "cancel",
          },
          { text: "OK" },
        ],
        { cancelable: false }
      );
      // ToastAndroid.show("Item removed!", ToastAndroid.SHORT);
      return {
        ...state,
        items: [],
      };
    case "REMOVE_PRODUCT":
      ToastAndroid.show("Item removed!", ToastAndroid.SHORT);
      return {
        ...state,
        items: state.items.filter((item) => item.productId !== action.payload),
      };

    case "ADD_PRODUCT":
      const newItem = action.payload;
      const foundItem = state.items.find(
        (item) => item.id === newItem.productId
      );

      if (foundItem)
        return {
          ...state,
          items: state.items.map((item) =>
            item === foundItem ? newItem : item
          ),
        };
      else
        return {
          ...state,
          items: [...state.items, { ...newItem }],
        };

    default:
      return state;
  }
};
export default reducer;
