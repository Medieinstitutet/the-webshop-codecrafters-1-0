import { basket } from "../../eventlisteners/addProductsBasket";
import { Product } from "../../models/product";
import { createHtmlBasket } from "../basketPage/createHtmlBasket";

export const flavourList: { [productId: string]: string[] } = {};

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

export function createFlavourInput(productId: string) {
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
    optionForFlavour.addEventListener("change", function () {
      // Hämta checkboxens värde
      const checkboxValue = this.checked;
      const flavour = this.getAttribute("data-flavour");

      if (flavour !== null) {
        if (checkboxValue !== null) {
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
  return containerFlavourInput;
}

export const addFlavourInBasket = (checkbox: HTMLElement, productId: string, basket: Product[]) => {
  checkbox.addEventListener("change", () => {
    const selectedFlavourOptions = document.querySelectorAll(
      `#myCheckbox_${productId} .optionForColor--checkbuttons:checked`
    ) as NodeListOf<HTMLInputElement>;

    selectedFlavourOptions.forEach((selectedFlavourOption) => {
      const flavourFromUser = selectedFlavourOption.value;

      console.log(`ID: ${productId}, Vald smak: ${flavourFromUser}`);
    });

    uppdateBasketWithFlavours(basket);
    console.log("Uppdaterad smaklista:", flavourList);
  });
};

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
    flavourList[productId] = flavourList[productId].filter((f) => f !== flavour);
  }
  uppdateBasketWithFlavours(basket);
  console.log("Uppdaterad smaklista:", flavourList);
}

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
  // createHtmlBasket(basket);
  for (const id in checkedCheckboxes) {
    const checkbox = document.getElementById(id) as HTMLInputElement;
    if (checkbox) {
      checkbox.checked = true;
    }
  }
  console.log(basket);
}

// export const clearCheckboxStatesForProductId = (productId: string) => {
//   for (const flavourOption of flavourOptions) {
//     const key = `checkboxValue_${productId}_${flavourOption.value}`;
//     localStorage.removeItem(key);
//   }
// };
