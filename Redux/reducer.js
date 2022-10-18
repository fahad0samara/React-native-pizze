import {
  ALL_PRODUCTS,
  CART_PRODUCTS,
  REMOVE_DATA_FROM_CART,
  INCREASE_CART_QUANTITY,
  CART_PRODUCTS2,
  CART_PRODUCTS3,
  REMOVE_DATA_FROM_CART2,
  DECREASE_CART_QUANTITY,
  REMOVE_ALL_FROM_CART,
  REMOVE_ALL_From_HISTORY,
  TOTAL_PRICE,
} from "./action";

const initialState = {
  storeData: [],

  cartData: [],
  cartData2: [],
  cartData3:[]
   
};

export const reducer = (state = initialState, {type, payload}) => {
  switch (type) {
    //* all products
    case ALL_PRODUCTS: {
      return {
        ...state,
        storeData: payload,
      };
    }

    //* add to cart
    case CART_PRODUCTS: {
      return {
        ...state,
        cartData: [...state.cartData, payload],
      };
    }
    // add to cart2
    case CART_PRODUCTS2: {
      return {
        ...state,
        cartData2: [...state.cartData2, payload],
      };
    }
    // add to history
    case CART_PRODUCTS3: {
      return {
        ...state,
        cartData3: [...state.cartData3, payload],
      };
    }
  
    //  total price of cart
    case TOTAL_PRICE: {
      return {
        ...state,
        totalPrice: payload,
      };
    }

    //* increase quantity
    case INCREASE_CART_QUANTITY: {
      return {
        ...state,
        cartData: state.cartData.map(item => {
          if (item.id === payload) {
            return {
              ...item,
              quantity: item.quantity + 1,
            };
          }
          return item;
        }),
      };
    }

    //* decrease quantity
    case DECREASE_CART_QUANTITY: {
      return {
        ...state,
        cartData: state.cartData.map(item => {
          if (item.id === payload) {
            return {
              ...item,
              quantity: item.quantity - 1,
            };
          }
          return item;
        }),
      };
    }

    //* remove item from cart
    case REMOVE_DATA_FROM_CART: {
      return {
        ...state,
        cartData: state.cartData.filter(item => item.id !== payload),
      };
    }
    // remove item from cart2
    case REMOVE_DATA_FROM_CART2: {
      return {
        ...state,
        cartData2: state.cartData2.filter(item => item.id !== payload),
      };
    }
  
      

  

    //* remove All item from cart
    case REMOVE_ALL_FROM_CART: {
      return {
        ...state,
        cartData: [],
      };
    }
      
    //* remove All item from cart of history
    case REMOVE_ALL_From_HISTORY: {
      return {
        ...state,
        cartData3: [],
      };
    }
      

    default:
      return state;
  }
};
