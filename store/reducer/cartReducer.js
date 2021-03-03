const initialState = {
  items: [
    {
      id: 1,
      quantity: 5,
    },
    {
      id: 2,
      quantity: 3,
    },
  ],
  loading: true,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_ITEMS":
      return {
        ...state,
        items: action.payload,
      };

    default:
      return state;
  }
};

export default reducer;
