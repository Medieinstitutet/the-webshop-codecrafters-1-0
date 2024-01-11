import { basket, saveToLocalstorage } from "../../eventlisteners/addProductsBasket";
import { Product } from "../../models/product";
// import { createHtmlBasket } from "../basketPage/createHtmlBasket";

export const flavourList: { [productId: string]: string[] } = {};
export const flavourList2: { [productId: string]: { [flavour: string]: boolean } } = {};

let flavourOptions = [
  { value: "Woody" },
  { value: "Winey" },
  { value: "Cereal" },
  { value: "Fruity" },
  { value: "Paety" },
  { value: "Feinty" },
  { value: "Surphur" },
  { value: "Floral" },
];

export function createFlavourInput(productId: string, previousState: { [flavour: string]: boolean } = {}) {
  const containerFlavourInput = document.createElement("section");
  containerFlavourInput.className = "colorInput";

  flavourOptions.forEach((option) => {
    const labelFlavour = document.createElement("label");

    const optionForFlavour = document.createElement("input");
    optionForFlavour.type = "checkbox";
    optionForFlavour.value = option.value;
    optionForFlavour.className = "optionForColor--checkbuttons";
    optionForFlavour.id = `myCheckbox_${productId}_${option.value}`;

    optionForFlavour.setAttribute("data-flavour", option.value);

    optionForFlavour.checked = previousState[option.value] || false;

    optionForFlavour.addEventListener("change", function () {
      // Hämta checkboxens värde
      const checkboxValue = this.checked;
      const flavour = this.getAttribute("data-flavour");

      if (flavour !== null) {
        if (checkboxValue) {
          // Lägg till smaken i den specifika produktens smaklista
          addToFlavourList(productId, flavour);
        } else {
          // Ta bort smaken från den specifika produktens smaklista
          removeFromFlavourList(productId, flavour);
        }
      }
      console.log("Checkbox blev klickad. Smak: " + flavour + ", Nuvarande värde: " + checkboxValue);
    });
    labelFlavour.appendChild(document.createTextNode(option.value));
    labelFlavour.appendChild(optionForFlavour);
    containerFlavourInput.appendChild(labelFlavour);
  });

  uppdateBasketWithFlavours(basket);
  return containerFlavourInput;
}

export function addToFlavourList(productId: string, flavour: string) {
  if (!flavourList[productId]) {
    flavourList[productId] = [];
  }

  if (!flavourList[productId].includes(flavour)) {
    flavourList[productId].push(flavour);
  }
  console.log("Uppdaterad smaklista:", flavourList);
}

function removeFromFlavourList(productId: string, flavour: string) {
  if (flavourList[productId]) {
    flavourList[productId] = flavourList[productId].filter((f) => f.trim() !== flavour.trim());
  }
  console.log("Uppdaterad smaklista:", flavourList);
}

export const addFlavourInBasket = (checkbox: HTMLElement, productId: string) => {
  checkbox.addEventListener("change", () => {
    const selectedFlavourOptions = document.querySelectorAll(
      `#myCheckbox_${productId} .optionForColor--checkbuttons:checked`
    ) as NodeListOf<HTMLInputElement>;

    selectedFlavourOptions.forEach((selectedFlavourOption) => {
      const flavourFromUser = selectedFlavourOption.value;

      console.log(`ID: ${productId}, Vald smak: ${flavourFromUser}`);
    });
  });
};

export function uppdateBasketWithFlavours(basket: Product[]) {
  const checkedCheckboxes: Record<string, boolean> = {};
  const checkboxes = document.querySelectorAll(".optionForColor--checkbuttons:checked");
  checkboxes.forEach((checkbox) => {
    const id = checkbox.id;
    if (id) {
      checkedCheckboxes[id] = true;
    }
  });

  for (const productId in flavourList) {
    const product = basket.find((p) => p._id === productId);

    if (product) {
      product.flavour = flavourList[productId];
    }
  }
  for (const id in checkedCheckboxes) {
    const checkbox = document.getElementById(id) as HTMLInputElement;
    if (checkbox) {
      checkbox.checked = true;
    }
  }
  console.log(flavourList);
  saveToLocalstorage(basket);
}

const checkoutbutton = document.getElementById("checkoutButton");
checkoutbutton?.addEventListener("click", (event) => {
  event.preventDefault();
  uppdateBasketWithFlavours(basket);
  console.log(basket);
});

// export function remove(basket: Product[], productId: string) {
//   const closeButton = document.getElementById("closeButton") as HTMLButtonElement;
//   closeButton.addEventListener("click", () => {
//     const basketProducts = basket.filter((product) => product._id === productId);

//     if (basketProducts.length === 0) {
//       // Om produkten inte finns i basket, ta bort smaklistan för det ID:et
//       if (flavourList[productId]) {
//         delete flavourList[productId];
//         console.log("Smaklista borttagen för produkt med ID:", productId);
//       }
//     }
//     console.log(flavourList);
//   });

//   uppdateBasketWithFlavours(basket);
// }

export function remover(productId: string) {
  flavourOptions.forEach((option) => {
    const id = `myCheckbox_${productId}_${option.value}`;
    const checkbox = document.getElementById(id) as HTMLInputElement;
    if (checkbox) {
      checkbox.checked = false;
    }
  });
}
