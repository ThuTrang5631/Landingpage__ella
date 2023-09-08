const elBtnSignIn = document.getElementById("js-btn-signin");
const elSectionSignIn = document.getElementById("js-signin");
const elBtnCloseSignIn = document.getElementById("js-closesignin");
const elBtnShoppingCart = document.getElementById("js-btn-shoppingcart");
const elSectionSideCart = document.getElementById("js-sidecart");
const elBtnCloseSideCart = document.getElementById("js-closesidecart");
const elBtnOpenRecentlyView = document.getElementById("js-open-recentlyview");
const elSectionRecentlyView = document.getElementById("js-recentlysection");
const elBtnReturnTopPage = document.getElementById("js-return-top");

elBtnSignIn.addEventListener("click", () => {
  elSectionSignIn.classList.remove("d-none");
});

elBtnCloseSignIn.addEventListener("click", () => {
  elSectionSignIn.classList.add("d-none");
});

elBtnShoppingCart.addEventListener("click", () => {
  elSectionSideCart.classList.remove("d-none");
});

elBtnCloseSideCart.addEventListener("click", () => {
  elSectionSideCart.classList.add("d-none");
});

elBtnOpenRecentlyView.addEventListener("click", () => {
  if (elSectionRecentlyView.classList.contains("d-none")) {
    elSectionRecentlyView.classList.remove("d-none");
  } else {
    elSectionRecentlyView.classList.add("d-none");
  }
});

elBtnReturnTopPage.addEventListener("click", () => {
  window.scroll({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});
