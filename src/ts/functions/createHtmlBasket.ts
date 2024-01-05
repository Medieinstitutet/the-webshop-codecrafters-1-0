import { Product } from "../models/product";
import { decreaseQuantity } from "./decreaseQuanity";
import {
  increaseQuantityPlusButton,
  increaseQuantityProductButton,
} from "./increaseQuantity";
import { basketPrice, priceProduct } from "./pricesBasket";

let productQuantityNumber = document.createElement("span");
productQuantityNumber.className = "productQuantity--number";
productQuantityNumber.innerHTML = "0";

export const createHtmlBasket = (basket: Product[], product: Product) => {
  const basketArticles = document.getElementById(
    "basketArticles"
  ) as HTMLTableSectionElement;
  basketArticles.innerHTML = "";

  const addedProducts: Set<string> = new Set();

  for (let i = 0; i < basket.length; i++) {
    const currentProduct = basket[i];
    const productId = currentProduct._id;

    let totalBasketPrice = 0;

    if (!addedProducts.has(productId)) {
      const basketOneProduct = document.createElement("section");
      basketOneProduct.className = "basket--oneProduct";

      const oneProductXmark = document.createElement("section");
      oneProductXmark.className = "oneProduct--xmark";
      oneProductXmark.innerHTML = "X";

      const basketImage = document.createElement("section");
      basketImage.className = "basket--image";

      const img = document.createElement("img");
      img.src = `${currentProduct.image}`;
      img.className = "img";

      const openProductText = document.createElement("section");
      openProductText.className = "openProduct--text";

      const basketProductTitle = document.createElement("p");
      basketProductTitle.className = "basket--productTitle";
      basketProductTitle.innerHTML = currentProduct.titel;

      const countProducts = document.createElement("section");
      countProducts.className = "countProducts";

      const productQuantityText = document.createElement("span");
      productQuantityText.className = "productQuantity--text";
      productQuantityText.innerHTML = "Quantity: ";

      const buttonAndPrice = document.createElement("section");
      buttonAndPrice.className = "buttonAndPrice";

      const addOrRemoveButtons = document.createElement("section");
      addOrRemoveButtons.className = "addOrRemoveButtons";

      increaseQuantityProductButton(productQuantityNumber);

      const minusButton = document.createElement("button");
      minusButton.className = "minusButton";
      minusButton.innerHTML = "-";
      minusButton.addEventListener("click", () => {
        decreaseQuantity(
          basket,
          i,
          productQuantityNumber,
          basketArticles,
          basketOneProduct
        );
        const totalProductPricePlus = priceProduct(basket, productId);
        onePrductPrice.innerHTML = totalProductPricePlus + " SEK";

        totalBasketPrice = basketPrice(basket);
        totalPrice.innerHTML = totalBasketPrice + " SEK";
      });

      const plusButton = document.createElement("button");
      plusButton.className = "plusButton";
      plusButton.innerHTML = "+";
      plusButton.addEventListener("click", () => {
        increaseQuantityPlusButton(basket, product, productQuantityNumber);

        const totalProductPricePlus = priceProduct(basket, productId);
        onePrductPrice.innerHTML = totalProductPricePlus + " SEK";

        totalBasketPrice = basketPrice(basket);
        totalPrice.innerHTML = totalBasketPrice + " SEK";

        console.log(basket);
      });

      const totalProductPrice = priceProduct(basket, productId);
      const onePrductPrice = document.createElement(
        "p"
      ) as HTMLParagraphElement;
      onePrductPrice.className = "oneProductPrice";
      onePrductPrice.innerHTML = totalProductPrice + " SEK";

      const totalPrice = document.getElementById("summa") as HTMLSpanElement;

      const totalProductPricePlus = priceProduct(basket, productId);
      totalPrice.innerHTML = totalProductPricePlus + " SEK";

      countProducts.appendChild(productQuantityText);
      countProducts.appendChild(productQuantityNumber);
      addOrRemoveButtons.appendChild(minusButton);
      addOrRemoveButtons.appendChild(plusButton);
      buttonAndPrice.appendChild(addOrRemoveButtons);
      buttonAndPrice.appendChild(onePrductPrice);
      openProductText.appendChild(basketProductTitle);
      openProductText.appendChild(countProducts);
      openProductText.appendChild(buttonAndPrice);
      basketOneProduct.appendChild(oneProductXmark);
      basketImage.appendChild(img);
      basketOneProduct.appendChild(basketImage);
      basketOneProduct.appendChild(openProductText);
      basketArticles.appendChild(basketOneProduct);

      addedProducts.add(productId);
    }
  }
};
