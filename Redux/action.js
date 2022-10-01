export const ALL_PRODUCTS = "ALL_PRODUCTS";
export const CART_PRODUCTS = "CART_PRODUCTS";
export const CART_PRODUCTS2 = "CART_PRODUCTS2";
export const REMOVE_DATA_FROM_CART = 'REMOVE_DATA_FROM_CART';
export const INCREASE_CART_QUANTITY = 'INCREASE_CART_QUANTITY';
export const DECREASE_CART_QUANTITY = 'DECREASE_CART_QUANTITY';
export const REMOVE_ALL_FROM_CART = 'REMOVE_ALL_FROM_CART';
export const REMOVE_DATA_FROM_CART2 = 'REMOVE_DATA_FROM_CART2';


//* all products 
export const allProducts = (data) => ({
    type: ALL_PRODUCTS,
    payload: data
});

//* add to cart
export const addToCart = (data) => ({
    type: CART_PRODUCTS,
    payload: data
});
// add to cart2
// add item to like list
export const addToCart2 = (data) => ({
    type: CART_PRODUCTS2,
    payload: data
});


//* increase quantity
export const increaseCartQuantity = (id) => ({
    type: INCREASE_CART_QUANTITY,
    payload: id
});

//* decrease quantity
export const decreaseCartQuantity = (id) => ({
    type: DECREASE_CART_QUANTITY,
    payload: id
});

//* remove item from cart
export const removeDataFromCart = (id) => ({
    type: REMOVE_DATA_FROM_CART,
    payload: id
});
// remove item from cart2
// remove item from like cart
export const removeDataFromCart2 = (id) => ({
    type: REMOVE_DATA_FROM_CART2,
    payload: id
});

//* remove All item from cart
export const deleteAllFromCart = () => ({
    type: REMOVE_ALL_FROM_CART,
});


//* fetchall products 
export const fetchAllProducts = () => {
    return async (dispatch) => {
        let res = await fetch("https://fakestoreapi.com/products");
        let data = await res.json();
        //   console.log('data', data)
        data && dispatch(allProducts(data));
    };
};