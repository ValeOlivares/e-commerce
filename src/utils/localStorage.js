export const loadCartItems = () => {
  return JSON.parse(localStorage.getItem("cartItems"));
};

export const loadTotal = () => {
  return JSON.parse(localStorage.getItem('total'));
}