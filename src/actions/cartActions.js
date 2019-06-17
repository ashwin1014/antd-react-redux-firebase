import { ADD_TO_CART, REMOVE_FROM_CART } from '../constants/types';

export const addToCart = (items, product) => (dispatch) => {
    const cartItems = items.slice();
      let itemInCart = false;
      cartItems.forEach(item => {
          if(item.id === product.id) {
            itemInCart=true;
            item.count++;
          }
      });
      if(!itemInCart) {
        cartItems.push({...product, count:1})
      }

      return dispatch({
          type: ADD_TO_CART,
          payload: {
            cartItems
          }
      })
};

export const removeItemFromCart = (items, product) => (dispatch) => {
    let cartItems = items.slice();
    cartItems.forEach(item => {
        if(item.id === product.id) {
          item.count--;
          if(item.count === 0) cartItems = items.slice().filter(ele=>ele.id !== product.id);
        }
    });
    return dispatch({
        type: REMOVE_FROM_CART,
        payload: {
          cartItems
        }
    })
}