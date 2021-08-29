export const setProducts = (products) => {
  return {
    type: "SET-PRODUCT",
    payload: products,
  };
};

export const productDetails = (product) => {
  return {
    type: "DETAILS",
    payload: product,
  }
}
export const removeProductDetails = () => {
  return {
    type: "REMOVE",
   
  };
};
