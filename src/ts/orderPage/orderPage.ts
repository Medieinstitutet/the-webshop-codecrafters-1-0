import { Order } from "../models/order";






const test = () => {



    const orderArray: Order = {

        firstname: 'Molly',
        lastname:'hello',
        phone:'070123123',
        street: 'gata 1',
        postcode: 12389,
        county: 'Stockholm',
      paymentmethod: 'kort',
      totalprice: 1500,
      items: [{"_id": "6590074fa26f7240140b969c",
      "titel": "Collector's",
      "image": "https://images.unsplash.com/photo-1615887023544-3a566f29d822",
      "price": 2000,
      "description": [
          "För den seriösa samlaren erbjuder vårt Collector's-abonnemang en extraordinär inblick i whiskyns värld. Varje månad presenterar unika buteljer från historiska destillerier och begränsade upplagor. Skapa en samling av tidlös och exceptionell whisky." ,
          "Ge din samling en exklusiv touch med vårt Collector's-abonnemang. Vi kurerar buteljer från välrenommerade destillerier och whisky som är svår att hitta någon annanstans. Upplev spänningen av att äga verkliga juveler inom whiskyns värld." ,
          "Utforska sällsynta skatter med vårt Collector's-abonnemang. Varje månad tar vi dig med på en resa genom tid och tradition noggrant utvalda buteljer från legendariska destillerier. Skapa en unik och imponerande samling med varje leverans."
      ]}, {
        "_id": "658c0822982493ac38e5094f",
        "titel": "Basic",
        "image": "https://images.unsplash.com/photo-1615887023544-3a566f29d822",
        "price": 1200,
        "description": [
            "Utforska grundläggande whiskyupplevelser med vårt prisvärda abonnemang. Smaka på noggrant utvalda destillerier och njut av varje droppe. Upptäck hemligheterna bakom varje butelj och låt din passion för whisky blomstra.",
            "Upptäck en värld av rika smakupplevelser med vårt grundläggande whiskyabonnemang. Från rökiga torvtoner till söta sherry-nyanser, varje månad erbjuder vi en resa genom olika smakprofiler som kommer att förföra dina sinnen.",
            "Utforska vårt grundläggande whiskyabonnemang och upplev bredden av våra partnerskap med kända viskemärken. Från de ikoniska skotska usen till innovativa artisanala destillerier, varje månad presenterar vi olika märken för att berika din samling."
        ]
    },
    {
        "_id": "658c09a4982493ac38e50950",
        "titel": "Premium",
        "image": "https://images.unsplash.com/photo-1615887023544-3a566f29d822",
        "price": 1500,
        "description": [
            "Njut av exklusiva whiskyupplevelser med vårt premiumabonnemang. Varje månad presenterar vi exceptionella buteljer från sällsynta och eftertraktade destillerier. Upplev lyxen av unika smaker och sätt en extraordinär prägel på din whiskykollektion.",
            "Förundras över en överlägsen smakresa med vårt premiumabonnemang. Från sällsynta single malts till exklusiva blandningar, varje månad väljer vi ut de finaste whiskysorterna för att erbjuda en oöverträffad smakupplevelse. Unna dig det bästa av det bästa.",
            "Upptäck världen av lyxig whisky med vårt premiumabonnemang. Vi samarbetar med de mest prestigefyllda destillerierna och erbjuder en exklusiv samling varje månad. Ge din passion för whisky en upphöjd nivå med vårt noggrant kuraterade urval."
        ]
    }]
    
    
    }
    
    const getTotalPrice: number = 1235;


    orderPage(orderArray, getTotalPrice)


}







const emoijis = () =>{


    const emoijisContainer = document.createElement('section')
    emoijisContainer.classList.add('emoijisContainer')

    document.body.appendChild(emoijisContainer)
    

        for(let i = 0; i < 30; i++){
        let emoji =  document.createElement('p')
        emoji.classList.add('emoji')
        if(i % 2)
        emoji.innerHTML= `🎉`
        
        emoijisContainer.appendChild(emoji)
        }
            }


export const orderPage = (orderArray: Order, getTotalPrice: number) => {
const number: number = (Math.random() * (10523 - 100) + 10);;
    const orderNumber:string = `#${Math.floor(number)}`

    const date:string = `${Date().toString().substring(7, 10)} ${Date().toString().substring(4,7)} ${Date().toString().substring(11,15)}`

  

  

if(orderArray && orderNumber && date && getTotalPrice ){

    
  
      

    const containerPage = document.createElement('article')
    containerPage.classList.add('containerPage')

const orderContainer = document.createElement('section')
orderContainer.classList.add('orderContainer')



const buyerInfo = document.createElement('section')
buyerInfo.classList.add('buyerInfo')


const text = document.createElement('p')
text.classList.add('buyerInfo___text')
text.innerText = `Tack ${orderArray.firstname},

Vi uppskattar verkligen ditt köp hos oss! Din order har nu bekräftats och kommer att behandlas inom kort. Nedan finns en sammanfattning av din beställning:

Ordernummer: ${orderNumber}
Datum för beställning: ${date}
Betalningsmetod: ${orderArray.paymentmethod}
`

const deliveryaddress = document.createElement('p')
deliveryaddress.classList.add('buyerInfo___deliveryaddress')
deliveryaddress.innerHTML = `Leveransadress:`

const name = document.createElement('p')
name.classList.add('buyerInfo___name')
name.innerHTML = `${orderArray.firstname} ${orderArray.lastname}`
const street = document.createElement('p')
street.classList.add('buyerInfo___street')
street.innerHTML = `${orderArray.street} `
const postcodeCounty = document.createElement('p')
postcodeCounty.classList.add('buyerInfo___postcodeCounty')
postcodeCounty.innerHTML = `${orderArray.postcode}, ${orderArray.county} `



const orderDetailsContainer = document.createElement('section')
orderDetailsContainer.classList.add('orderDetailsContainer')
const orderDetailsText = document.createElement('p')
orderDetailsText.classList.add('orderDetailsContainer___orderDetailsText')



const totalPriceContainer = document.createElement('section')
totalPriceContainer.classList.add('totalPriceContainer')




// Räkna ut moms
var moms = +getTotalPrice * 0.25;

const momsPrice = document.createElement('p')
momsPrice.classList.add('totalPriceContainer___momsPrice')
momsPrice.innerHTML =  `moms: ${moms} kr`

const totalPrice = document.createElement('p')
totalPrice.classList.add('totalPriceContainer___totalPrice')
totalPrice.innerHTML =  `Totalt: ${getTotalPrice} kr`


/* append elements */

document.body.appendChild(containerPage)
containerPage.appendChild(orderContainer)
orderContainer.appendChild(buyerInfo)
buyerInfo.appendChild(text)
buyerInfo.appendChild(deliveryaddress)
buyerInfo.appendChild(name)
buyerInfo.appendChild(street)
buyerInfo.appendChild(postcodeCounty)



/* tabel */
const table = document.createElement('table');
table.classList.add('orderDetailsTable');

orderContainer.appendChild(orderDetailsContainer)
orderDetailsContainer.appendChild(orderDetailsText)
orderDetailsContainer.appendChild(table);


// Lägg till rubrik till tabellen
const tableHeader = document.createElement('thead');
const headerRow = document.createElement('tr');
const titleHeader = document.createElement('th');
titleHeader.textContent = 'Köpta artiklar';

const quantityHeader = document.createElement('th');
quantityHeader.textContent = 'Antal';
const priceHeader = document.createElement('th');
priceHeader.textContent = 'Pris';

/* lägger rubriker i header raden */
headerRow.appendChild(titleHeader);
headerRow.appendChild(priceHeader);
headerRow.appendChild(quantityHeader)
tableHeader.appendChild(headerRow);
table.appendChild(tableHeader);





for (const element of orderArray.items) {
    const row = document.createElement('tr');
    
    const titel  = document.createElement('td')
    titel.classList.add('orderDetailsTable___titel')
    titel.innerHTML = `${element.titel}`

    const price  = document.createElement('td')
    price.classList.add('orderDetailsTable___price')
    price.innerHTML = `${element.price}/st`

    
    const quantity = document.createElement('td')
    quantity.classList.add('orderDetailsTable___quantity')
    quantity.innerHTML = `2`

    table.appendChild(row)
    row.appendChild(titel)
    row.appendChild(price)
    row.appendChild(quantity)
  }



/* totalprice */
orderContainer.appendChild(totalPriceContainer)
totalPriceContainer.appendChild(momsPrice)
totalPriceContainer.appendChild(totalPrice)

  let emojiRain = true;
 
  setTimeout(() => {
      emojiRain = false;
  }, 2000);

  if(emojiRain){
      emoijis()
  }





}



}

test()