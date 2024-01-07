import { addProduct } from "../eventlisteners/addProduct";
import { Product } from "../models/product";
import { decreaseQuantity } from "./decreaseQuantity";
import { basketEmptyMessage } from "./emptyBasketMessage";
import { increaseQuantity } from "./increaseQuantity";
import { basketPrice, priceProduct } from "./prices";
import { removeObjectsWithXmark } from "./removeProductWithXmark";

export const createHtmlBasket = (basket: Product[], id: Product) => {
  const basketArticles = document.getElementById(
    "basketArticles"
  ) as HTMLTableSectionElement;
  basketArticles.innerHTML = "";
  const emptyBasket = basketEmptyMessage(basket);

  const addedProducts: Set<string> = new Set();

  for (let i = 0; i < basket.length; i++) {
    const currentProduct = basket[i];
    const productId = currentProduct._id;
    emptyBasket.innerHTML = "";

    let totalBasketPrice = 0;

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

      const oneProductXmark = document.createElement("section");
      oneProductXmark.className = "oneProduct--xmark";
      oneProductXmark.innerHTML = "X";
      oneProductXmark.dataset.productId = productId;
      oneProductXmark.addEventListener("click", () => {
        removeObjectsWithXmark(basket, productId);
        console.log(oneProductXmark, "klickade på kryss");
        createHtmlBasket(basket, id);
        console.log(basket);
      });

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
        createHtmlBasket(basket, id);
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

      let productQuantityNumber = document.createElement("span");
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

      const totalProductPricePlus = priceProduct(basket, productId);
      totalPrice.innerHTML = totalProductPricePlus + " SEK";

      totalBasketPrice = basketPrice(basket);
      totalPrice.innerHTML = totalBasketPrice + " SEK";

      countProducts.appendChild(productQuantityText);
      countProducts.appendChild(productQuantityNumber);
      addOrRemoveButtons.appendChild(minusButton);
      addOrRemoveButtons.appendChild(plusButton);
      buttonAndPrice.appendChild(addOrRemoveButtons);
      buttonAndPrice.appendChild(onePrductPrice);
      titleAndXmark.appendChild(oneProductXmark);
      openProductText.appendChild(titleAndXmark);
      openProductText.appendChild(basketProductTitle);
      openProductText.appendChild(countProducts);
      openProductText.appendChild(buttonAndPrice);
      basketImage.appendChild(img);
      basketOneProduct.appendChild(basketImage);
      basketOneProduct.appendChild(openProductText);
      basketOneProduct.appendChild(oneProductXmark);
      basketArticles.appendChild(basketOneProduct);

      addedProducts.add(productId);
    }
  }
};
