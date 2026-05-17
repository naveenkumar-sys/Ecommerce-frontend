export const reducerFn = (cart, action) => {
  switch (action.type) {
    case "ADD": {
      const findProduct = cart.find((ele) => ele._id === action.payload._id);
      if (findProduct) {
        return cart;
      }
      return [...cart, { ...action.payload, quantity: 1 }];
    }
    case "REMOVE": {
      const filteredProducts = cart.filter(
        (ele) => ele._id !== action.payload._id,
      );
      return filteredProducts;
    }
    case "INCREASE": {
      return cart.map((ele) =>
        ele._id === action.payload._id
          ? { ...ele, quantity: ele.quantity + 1 }
          : ele,
      );
    }
    case "DECREASE": {
      return cart.map((ele)=>{})
    }

    default:
      break;
  }
};
