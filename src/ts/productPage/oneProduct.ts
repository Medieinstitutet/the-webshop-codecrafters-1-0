import { Product } from "../models/product"


export const oneProduct = (oneProduct?: Product[], productPageContainer?: HTMLElement) => {
  


if(oneProduct && oneProduct.length > 0 && productPageContainer ) {

/* selected product */
const selectedProduct = document.createElement('section')
selectedProduct.classList.add('selectedProduct')


/* selected product image and description container*/
const imgAndDescription = document.createElement('section')
imgAndDescription.classList.add('imgAndDescription')

/*  image */
const imgAndDescription___imgContainer = document.createElement('section')
imgAndDescription___imgContainer.classList.add('imgAndDescription___imgContainer')
const imgAndDescription___imgContainer___img = document.createElement('img')
imgAndDescription___imgContainer___img.classList.add('imgAndDescription___imgContainer___img')

    imgAndDescription___imgContainer___img.src = oneProduct[0].image;
 
/* description  */
const imgAndDescription___description = document.createElement('p')
imgAndDescription___description.classList.add('imgAndDescription___description')


/* button */
const imgAndDescription___button = document.createElement('button')
imgAndDescription___button.classList.add('imgAndDescription___button')
imgAndDescription___button.innerHTML = `Add  <i class="fa fa-shopping-basket"></i> ` ;


/*  titel */
const selectedProduct___titel = document.createElement('h2')
selectedProduct___titel.classList.add('selectedProduct___titel')
selectedProduct___titel.innerText = oneProduct[0].titel;


/* append elements */


/* selected product */
productPageContainer.appendChild(selectedProduct)


/* selected product titel */
selectedProduct.appendChild(selectedProduct___titel)


/* selected product image and description container*/
selectedProduct.appendChild(imgAndDescription)

/* image */
imgAndDescription.appendChild(imgAndDescription___imgContainer)
imgAndDescription___imgContainer.appendChild(imgAndDescription___imgContainer___img)
/* description  */

imgAndDescription.appendChild(imgAndDescription___description)

for(let i = 0; i < oneProduct[0].description.length; i++ ){
    const text = document.createElement('p')
    text.classList.add('imgAndDescription___description___p')
    text.innerText = oneProduct[0].description[i];
    imgAndDescription___description.appendChild(text)
    }

imgAndDescription___description.appendChild(imgAndDescription___button)
}
}

