export const ADD_QUANTITY = "ADD_QUANTITY";
export const addQuantity = (id, price) => {
  return {
    type: ADD_QUANTITY,
    payload: {
      id,
      price
    }
  };
};
