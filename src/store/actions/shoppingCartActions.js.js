// Action Types
export const SET_CART = "SET_CART";
export const SET_PAYMENT = "SET_PAYMENT";
export const SET_ADDRESS = "SET_ADDRESS";
export const ADD_TO_CART = "ADD_TO_CART";

// Action Creators
export const setCart = (cart) => ({ type: SET_CART, payload: cart });
export const setPayment = (payment) => ({
  type: SET_PAYMENT,
  payload: payment,
});
export const setAddress = (address) => ({
  type: SET_ADDRESS,
  payload: address,
});

export const addToCart = (product) => {
  return (dispatch, getState) => {
    const { cart } = getState().shoppingCart; // Mevcut sepeti al
    const existingItem = cart.find((item) => item.product.id === product.id);

    let updatedCart;
    if (existingItem) {
      // Eğer ürün zaten sepette varsa, count değerini artır
      updatedCart = cart.map((item) =>
        item.product.id === product.id
          ? { ...item, count: item.count + 1 }
          : item
      );
    } else {
      // Ürün sepette yoksa yeni olarak ekle
      updatedCart = [...cart, { count: 1, checked: true, product }];
    }

    dispatch(setCart(updatedCart)); // Güncellenmiş sepeti store'a gönder
  };
};
