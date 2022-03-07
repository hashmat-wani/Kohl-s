function nav_funct() {
  var cartData = JSON.parse(localStorage.getItem("ls_cartData")) || [];
  var total_items = cartData.reduce(function (ac, el) {
    return ac + Number(el.qty);
  }, 0);
  if (total_items > 9) document.querySelector(".cart_value").textContent = "9+";
  else document.querySelector(".cart_value").textContent = total_items;

  var cartPrice = cartData.reduce(function (ac, el) {
    return ac + Number(el.price * el.qty);
  }, 0);
  document.querySelector(".cart_price").textContent = `₹${cartPrice}.00`;
}
export default nav_funct;
