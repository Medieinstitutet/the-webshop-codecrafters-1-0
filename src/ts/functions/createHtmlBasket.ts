import { addProduct } from "../eventlisteners/addProduct";
import { Product } from "../models/product";
import { decreaseQuantity } from "./decreaseQuantity";
import { basketEmptyMessage } from "./emptyBasketMessage";
import { increaseQuantity } from "./increaseQuantity";
import { basketPrice, priceProduct } from "./prices";
import { xmark } from "./xmark";

export const createHtmlBasket = (basket: Product[], id: Product) => {
  const basketArticles = document.getElementById(
    "basketArticles"
  ) as HTMLTableSectionElement;
  basketArticles.innerHTML = "";

  const addedProducts: Set<string> = new Set();

  let totalBasketPrice = 0;

  const emptyBasket = basketEmptyMessage(basket);

  for (let i = 0; i < basket.length; i++) {
    const currentProduct = basket[i];
    const productId = currentProduct._id;
    emptyBasket.innerHTML = "";

    if (!addedProducts.has(productId)) {
      const basketOneProduct = document.createElement("section");
      basketOneProduct.className = "basket--oneProduct";

      const basketImage = document.createElement("section");
      basketImage.className = "basket--image";

      const img = document.createElement("img");
      img.src = `${currentProduct.image}`;
      img.className = "img";

      const openProductText = document.createElement("section");
      openProductText.className = "openProduct--text";

      const titleAndXmark = document.createElement("section");
      titleAndXmark.className = "titleAndXmark";

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

        // createHtmlBasket(basket, id);
      });

      const plusButton = document.createElement("button");
      plusButton.className = "plusButton";
      plusButton.innerHTML = "+";
      addProduct(plusButton, currentProduct);

      plusButton.addEventListener("click", () => {
        const totalQuantityProductPlus = increaseQuantity(basket, productId);
        productQuantityNumber.innerHTML += totalQuantityProductPlus;

        const totalProductPricePlus = priceProduct(basket, productId);
        onePrductPrice.innerHTML = totalProductPricePlus + " SEK";

        totalBasketPrice = basketPrice(basket);
        totalPrice.innerHTML = totalBasketPrice + " SEK";

        console.log(basket);
      });

      const totalQuantityProduct = increaseQuantity(basket, productId);

      const productQuantityNumber = document.createElement("span");
      productQuantityNumber.className = "productQuantity--number";
      productQuantityNumber.innerHTML += totalQuantityProduct;
      console.log(totalQuantityProduct);

      const totalProductPrice = priceProduct(basket, productId);

      const onePrductPrice = document.createElement(
        "p"
      ) as HTMLParagraphElement;
      onePrductPrice.className = "oneProductPrice";
      onePrductPrice.innerHTML = totalProductPrice + " SEK";

      const totalPrice = document.getElementById("summa") as HTMLSpanElement;

      const oneProductXmark = xmark(
        basket,
        productId,
        totalPrice,
        totalBasketPrice,
        id
      );

      const totalProductPricePlus = priceProduct(basket, productId);
      totalPrice.innerHTML = totalProductPricePlus + " SEK";

      totalBasketPrice = basketPrice(basket);

      countProducts.appendChild(productQuantityText);
      countProducts.appendChild(productQuantityNumber);
      addOrRemoveButtons.appendChild(minusButton);
      addOrRemoveButtons.appendChild(plusButton);
      buttonAndPrice.appendChild(addOrRemoveButtons);
      buttonAndPrice.appendChild(onePrductPrice);
      titleAndXmark.appendChild(basketProductTitle);
      titleAndXmark.appendChild(oneProductXmark);
      openProductText.appendChild(titleAndXmark);
      openProductText.appendChild(countProducts);
      openProductText.appendChild(buttonAndPrice);
      basketImage.appendChild(img);
      basketOneProduct.appendChild(basketImage);
      basketOneProduct.appendChild(openProductText);
      basketArticles.appendChild(basketOneProduct);

      addedProducts.add(productId);
    }
  }
};
