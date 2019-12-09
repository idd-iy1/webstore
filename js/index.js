const products = [
  {
    name: `Hyper Base`,
    price: 300,
    colour: `Black`,
    rating: `4/5`,
    size: 15,
    wireless: `No`,
    category: `headphones`,
    logo: `img/hyperx.jpg`,
    value: `Best Value!`
  }, {
    name: `Base Plus`,
    price: 375,
    colour: `Black`,
    rating: `4/5`,
    size: 15,
    wireless: `Yes`,
    category: `earphones`,
    logo: `/img/ear5.jpg`,
    value: `Amazing Value!`
  }, {
    name: `Stacked Base`,
    price: 199,
    colour: `Black`,
    rating: `4/5`,
    size: 15,
    wireless: `Yes`,
    category: `earphones`,
    logo: `/img/ear6.jpg`,
    value: ``
  }, {
    name: `Base 3s`,
    price: 295,
    colour: `Black`,
    rating: `4/5`,
    size: 15,
    wireless: `Yes`,
    category: `headphones`,
    logo: `/img/head2.png`,
    value: `Great Value!`
  }, {
    name: `Base V`,
    price: 99,
    colour: `Black`,
    rating: `4/5`,
    size: 15,
    wireless: `No`,
    category: `earphones`,
    logo: `/img/ear8.png`,
    value: `Great Value!`
  }, {
    name: `Base Kings`,
    price: 1200,
    colour: `Black`,
    rating: `4/5`,
    size: 15,
    wireless: `Yes`,
    category: `headphones`,
    logo: `/img/head8.png`,
    value: `Great Value!`
  }, {
    name: `Base Thrill`,
    price: 1000,
    colour: `Red`,
    rating: `4/5`,
    size: 15,
    wireless: `Yes`,
    category: `earphones`,
    logo: `/img/ear9.jpg`,
    value: `Great Value!`
  }, {
    name: `Hyper Base`,
    price: 1000,
    colour: `Black`,
    rating: `4/5`,
    size: 15,
    wireless: `Yes`,
    category: `headphones`,
    logo: `img/hyperx.jpg`,
    value: `Great Value!`
  }, {
    name: `Hyper Base`,
    price: 1000,
    colour: `Black`,
    rating: `4/5`,
    size: 15,
    wireless: `Yes`,
    category: `headphones`,
    logo: `img/hyperx.jpg`,
    value: `Great Value!`
  }, {
    name: `Hyper Base`,
    price: 1000,
    colour: `Black`,
    rating: `4/5`,
    size: 15,
    wireless: `No`,
    category: `earphones`,
    logo: `img/hyperear.jpg`,
    value: `Great Value!`
  } 
  , {
    name: `Hyper Base`,
    price: 1000,
    colour: `Black`,
    rating: `4/5`,
    size: 15,
    wireless: `No`,
    category: `earphones`,
    logo: `img/hyperear.jpg`,
    value: `Great Value!`
  } 
  , {
    name: `Hyper Base`,
    price: 1000,
    colour: `Black`,
    rating: `4/5`,
    size: 15,
    wireless: `No`,
    category: `earphones`,
    logo: `img/hyperear.jpg`,
    value: `Great Value!`
  } 
  , {
    name: `Hyper Base`,
    price: 1000,
    colour: `Black`,
    rating: `4/5`,
    size: 15,
    wireless: `No`,
    category: `earphones`,
    logo: `img/hyperear.jpg`,
    value: `Great Value!`
  } 
  , {
    name: `Hyper Base`,
    price: 1000,
    colour: `Black`,
    rating: `4/5`,
    size: 15,
    wireless: `No`,
    category: `earphones`,
    logo: `img/hyperear.jpg`,
    value: `Great Value!`
  } 
  , {
    name: `Hyper Base`,
    price: 1000,
    colour: `Black`,
    rating: `4/5`,
    size: 15,
    wireless: `No`,
    category: `earphones`,
    logo: `img/hyperear.jpg`,
    value: `Great Value!`
  } 
  , {
    name: `Hyper Base`,
    price: 1000,
    colour: `Black`,
    rating: `4/5`,
    size: 15,
    wireless: `No`,
    category: `earphones`,
    logo: `img/hyperear.jpg`,
    value: `Great Value!`
  } 
  , {
    name: `Hyper Base`,
    price: 1000,
    colour: `Black`,
    rating: `4/5`,
    size: 15,
    wireless: `No`,
    category: `earphones`,
    logo: `img/hyperear.jpg`,
    value: `Great Value!`
  } 
  , {
    name: `Hyper Base`,
    price: 1000,
    colour: `Black`,
    rating: `4/5`,
    size: 15,
    wireless: `No`,
    category: `earphones`,
    logo: `img/hyperear.jpg`,
    value: `Great Value!`
  } 
  , {
    name: `Hyper Base`,
    price: 1000,
    colour: `Black`,
    rating: `4/5`,
    size: 15,
    wireless: `No`,
    category: `earphones`,
    logo: `img/hyperear.jpg`,
    value: `Great Value!`
  } 
  , {
    name: `Hyper Base`,
    price: 1000,
    colour: `Black`,
    rating: `4/5`,
    size: 15,
    wireless: `No`,
    category: `earphones`,
    logo: `img/hyperear.jpg`,
    value: `Great Value!`
  } 
];


function getProductAsHtmlString(product) {

  return `<article class="product ${product.category}">
            <h3 class="product-name">${product.name}</h3>
            <img src="${product.logo}" alt="Logo for ${product.name}" class="product-logo">
            <ul class="product-info">
              <li>Price: <strong>$${product.price}</strong></li>
              <li>Colour: <strong>${product.colour}</strong></li>
              <li>Rating: <strong>${product.rating}</strong></li>
              <li>Size: <strong>${product.size}</strong></li>
              <li>Wireless: <strong>${product.wireless}</strong></li></ul>
              <div class="product-value">${product.value}</div>
          </article>`;
}


function renderProducts(arr) {

  const arrOfHtml = arr.map(getProductAsHtmlString);
  
  const strOfHtml = arrOfHtml.join('\n');
  
  document.getElementById('products').innerHTML = strOfHtml;

}

function lowCostProducts(product){
  return product.price < 1500;
}

const arrLowCosties = products.filter(lowCostProducts)
renderProducts(arrLowCosties);