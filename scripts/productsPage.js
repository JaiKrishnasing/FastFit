import { productInformation } from "./productInformation.js";
productInformation;

const amountOfItems = document.getElementById("amount-items-js");

let items = 0;
let index;

amountOfItems.addEventListener("click", () => {
  window.location.href = "/pages/checkout.html";
});

function addItem() {
  const itemContainer = document.getElementById("item-container-js");
  const addButtons = document.querySelectorAll(".redirect");
  let ID = 0;

  const productArray = [];

  addButtons.forEach((button) => {
    button.addEventListener("click", () => {
      items++;
      ID++;
      index = button.getAttribute("data-redirect");

      const product = {
        productID: ID,
        productName: productInformation[index].productName,
        productDescription: productInformation[index].productDescription,
        productPrice: productInformation[index].productPrice,
        productSrc: productInformation[index].productLocationImg,
        productType: productInformation[index].productType,
      };

      amountOfItems.innerText = items;

      productArray.push(product);

      localStorage.setItem("storedProducts", JSON.stringify(productArray));
    });
  });
}

addItem();

function setHeight() {
  const pageHeight =
    (document.documentElement.scrollHeight, document.body.scrollHeight);
  hamburgerMenuCourses.style.height = pageHeight + "px";
}

window.addEventListener("resize", setHeight);
window.addEventListener("load", setHeight);

setHeight();
