import { useState, useRef } from 'react';
import { useToast } from '@chakra-ui/react';

const initialState = {
  cart: [],
  total: 0,
};

const useInitialState = () => {
  const [state, setState] = useState(initialState);
  const toast = useToast();
  const toastIdRef = useRef();
  // const isInCart = (id) => {
  //   return state.cart.some((product) => product.id === id);
  // };

  //agregar productos
  const addToCart = (payload, qty) => {
    const exist = state.cart.some((element) => element.id === payload.id);
    if (!exist) {
      if (evaluateStock(payload.stock, qty)) {
        const newItem = { ...payload, quantity: qty };

        setState({
          ...state,
          cart: [...state.cart, newItem],
          total: state.total + payload.price * qty,
        });
      }
    } else {
      const product = state.cart.findIndex((c) => c.id === payload.id);

      if (evaluateStock(state.cart[product].stock, state.cart[product].quantity + qty)) {
        const newState = { ...state };
        newState.cart[product].quantity += qty;
        newState.total += payload.price;
        setState(newState);
      }
    }
  };

  //elimina un producto
  const removeFromCart = (payload) => {
    debugger;
    const newArray = state.cart.filter((product) => product.id !== payload.id);
    setState({
      ...state,
      cart: [...newArray],
      total: state.total - payload.price * payload.quantity,
    });
  };

  //vaciar el carro
  const emptyCart = (id) => {
    setState(initialState);
  };

  //obtener cantidad de items del carro
  const getItemQty = () => {
    const quantity = state.cart.reduce((acc, item) => (acc += item.quantity), 0);
    return quantity;
  };

  //formateo de precio de los items del carro
  const formatPrice = (value, opts = {}) => {
    const { locale = 'es-CL', currency = 'CLP' } = opts;
    const formatter = new Intl.NumberFormat(locale, {
      currency,
      style: 'currency',
      maximumFractionDigits: 2,
    });
    return formatter.format(value);
  };

  const evaluateStock = (stock, qty) => {
    if (qty > parseInt(stock)) {
      toastIdRef.current = toast({
        title: 'Sin Stock',
        description: 'No tenemos Stock suficiente para esa cantidad',
        status: 'warning',
        position: 'top-center',
        duration: 2000,
        isClosable: true,
      });
      return false;
    } else if (qty <= 0) {
      toastIdRef.current = toast({
        title: 'Seleccione una cantidad',
        description: 'Es necesario seleccionar una cantidad para agregar al carro',
        status: 'warning',
        position: 'top-center',
        duration: 2000,
        isClosable: true,
      });
      return false;
    } else {
      toastIdRef.current = toast({
        title: 'Wii ! Producto añadido al carro!',
        description: '',
        status: 'success',
        position: 'top-center',
        duration: 2000,
        isClosable: true,
      });
      return true;
    }
  };

  return {
    state,
    addToCart,
    removeFromCart,
    formatPrice,
    emptyCart,
    getItemQty,
    evaluateStock,
    // isInCart,
  };
};

export default useInitialState;
