export const productReducer = (state = [], action) => {
  switch (action.type) {
    case "SET-PRODUCT":
      return (state = action.payload);
    default:
      return state;
  }
};

export const productDetails = (state = {}, action) => {
  switch (action.type) {
    case "DETAILS":
      return (state = action.payload);
    case "REMOVE":
      return (state = {});
    default:
      return state;
  }
};
