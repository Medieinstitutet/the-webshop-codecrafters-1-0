import { Product } from "../models/product";

export const createHtmlBasket = (basket: Product[], product: Product) => {
  const basketArticles = document.getElementById(
    "basketArticles"
  ) as HTMLTableSectionElement;
  basketArticles.innerHTML = "";

  const addedProducts: Set<string> = new Set();

  for (let i = 0; i < basket.length; i++) {
    const currentProduct = basket[i];
    const productId = currentProduct._id;

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

      let productQuantityNumber = document.createElement("span");
      productQuantityNumber.className = "productQuantity--number";
      productQuantityNumber.innerHTML = "1";

      const buttonAndPrice = document.createElement("section");
      buttonAndPrice.className = "buttonAndPrice";

      const addOrRemoveButtons = document.createElement("section");
      addOrRemoveButtons.className = "addOrRemoveButtons";

      const minusButton = document.createElement("button");
      minusButton.className = "minusButton";
      minusButton.innerHTML = "-";
      minusButton.addEventListener("click", () => {
        if (basket.length > 0) {
          basket.splice(i, 1);
          createHtmlBasket(basket, product);
          let decreaseQuantity = parseInt(productQuantityNumber.innerHTML);
          //   decreaseQuantity = Math.max(0, decreaseQuantity - 1);
          decreaseQuantity -= 1;
          productQuantityNumber.innerHTML = decreaseQuantity.toString();
          console.log(basket);
        }
      });

      const plusButton = document.createElement("button");
      plusButton.className = "plusButton";
      plusButton.innerHTML = "+";
      plusButton.addEventListener("click", () => {
        basket.push(product);
        let increaseQuantity = parseInt(productQuantityNumber.innerHTML);
        increaseQuantity += 1;
        productQuantityNumber.innerHTML = increaseQuantity.toString();
        console.log(basket);
      });

      const onePrductPrice = document.createElement("p");
      onePrductPrice.className = "oneProductPrice";
      onePrductPrice.innerHTML = currentProduct.price.toString() + " SEK";

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
