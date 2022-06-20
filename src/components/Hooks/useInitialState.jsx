import { useState } from 'react';

const initialState = {
  cart: [],
  total: 0,
};

const useInitialState = () => {
  const [state, setState] = useState(initialState);

  //agrega un producto
  // const addToCart = (payload, quantity) => {
  //   debugger;
  //   setState({
  //     ...state,
  //     cart: [...state.cart, payload],
  //     total: state.total + payload.price,
  //   });
  // };
  const isInCart = (id) => {
    return state.cart.some((product) => product.id === id);
  };

  const addToCart = (payload, qty) => {
    debugger;
    const newItem = { ...payload, quantity: qty };
    if (!state.cart.includes(payload)) {
      debugger;
      setState({
        ...state,
        cart: [...state.cart, newItem],
        total: state.total + payload.price * qty,
      });
    } else {
      debugger;
      const product = state.cart.findIndex((c) => c.id === payload.id);
      const newState = { ...state };
      newState.cart[product].quantity += qty;
      setState(newState);
    }
  };

  //elimina un producto
  const removeFromCart = (payload) => {
    debugger;
    const newArray = state.cart.filter((product) => product.id !== payload.id);
    setState({
      ...state,
      cart: [...newArray],
      total: state.total - payload.price,
    });
  };

  const emptyCart = (id) => {
    setState(initialState);
  };

  const formatPrice = (value, opts = {}) => {
    const { locale = 'es-CL', currency = 'CLP' } = opts;
    const formatter = new Intl.NumberFormat(locale, {
      currency,
      style: 'currency',
      maximumFractionDigits: 2,
    });
    return formatter.format(value);
  };

  return {
    state,
    addToCart,
    removeFromCart,
    formatPrice,
    emptyCart,
    isInCart,
  };
};

export default useInitialState;
