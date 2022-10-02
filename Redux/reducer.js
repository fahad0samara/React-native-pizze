
import {

    ALL_PRODUCTS,
    CART_PRODUCTS,
    REMOVE_DATA_FROM_CART
    , INCREASE_CART_QUANTITY,
    CART_PRODUCTS2,
    REMOVE_DATA_FROM_CART2,
    DECREASE_CART_QUANTITY,
    REMOVE_ALL_FROM_CART,
    TOTAL_PRICE
} from "./action";

const initialState = {

    storeData: [],
    totalPrice: 0,

    cartData: [],

    cartData2: [],
};






export const reducer = (state = initialState, { type, payload }) => {
    switch (type) {

        //* all products 
        case ALL_PRODUCTS: {
            return {
                ...state,
                storeData: payload
            };
        };
       
      
            




        //* add to cart
        case CART_PRODUCTS: {
            return {
                ...state,
                cartData: [...state.cartData, payload]
            };
        };
        // add to cart2
        case CART_PRODUCTS2: {
            return {
                ...state,
                cartData2: [...state.cartData2, payload]

            };
        };
//  total price of cart
        case TOTAL_PRICE: {
            return {
                ...state,
                totalPrice: payload
            };
        };
            
     
        

        //* increase quantity
        case INCREASE_CART_QUANTITY: {
            return {
                ...state,
                cartData: state.cartData.map((item) => {
                    if (item.id === payload) {
                        return {
                            ...item,
                            quantity: item.quantity + 1
                        };
                    }
                    return item;
                }

                )
            };
        };

        //* decrease quantity
        case DECREASE_CART_QUANTITY: {
            return {
                ...state,
                cartData: state.cartData.map((item) => {
                    if (item.id === payload) {
                        return {
                            ...item,
                            quantity: item.quantity - 1
                        };
                    }
                    return item;

                })
            };
        };






        //* remove item from cart
        case REMOVE_DATA_FROM_CART: {
            return {
                ...state,
                cartData: state.cartData.filter(item => item.id !== payload)

            };
        }
        // remove item from cart2
        case REMOVE_DATA_FROM_CART2: {
            return {
                ...state,
                cartData2: state.cartData2.filter(item => item.id !== payload)
            }
        }

        //* remove All item from cart
        case REMOVE_ALL_FROM_CART: {
            return {
                ...state,
                cartData: []

            };
        }

        default:
            return state;

    }
};

/* 
 case DECREASE_CART_QUANTITY: {
            return {
                ...state,
                cartData: state.cartData.map((item) => item.id === payload?.quantity === 1 ? state.cartData.filter(item => item.id !== payload) : state.cartData.map((item) => item.id === payload ? { ...item, quantity: item.quantity - 1 } : item
                )
                )
            };
        };
*/