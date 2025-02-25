// Action Types
export const SET_CART = "SET_CART";
export const SET_PAYMENT = "SET_PAYMENT";
export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export const CLEAR_CART = "CLEAR_CART";

// Action Creators
export const setCart = (cart) => ({ type: SET_CART, payload: cart });
export const setPayment = (payment) => ({
  type: SET_PAYMENT,
  payload: payment,
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

    // Güncellenmiş sepeti localStorage’a kaydet!
    localStorage.setItem("cart", JSON.stringify(updatedCart));

    dispatch(setCart(updatedCart));
  };
};
