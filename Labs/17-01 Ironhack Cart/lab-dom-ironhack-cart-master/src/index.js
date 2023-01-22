// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  const price = product.querySelector ('.price span');
  let quantity = product.querySelector  ('.quantity input');
  const valuePrice = price.innerText;
  let valueQuantity = quantity.value;
  let subtotal = valuePrice * valueQuantity;
  product.querySelector ('.subtotal span').innerText = subtotal; 
  return subtotal;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2 - // ITERATION 3
  const singleProduct = document.getElementsByClassName('product');
  let total = 0;
  for (let i =0; i< singleProduct.length; i++){
    total +=  updateSubtotal (singleProduct[i]);
  }
document.querySelector ('#total-value span').innerText = total;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  let trExample = document.getElementsByClassName ('product')[0];
  let newTr = trExample.cloneNode(true);
  const tdNewProduct = document.querySelectorAll ('.create-product td input');
    newTr.querySelector('.name span').innerText = tdNewProduct[0].value;
    newTr.querySelector('.price span').innerText = tdNewProduct[1].value;
  let body = document.querySelector ('tbody');
  body.appendChild(newTr);
}
document.getElementById("create").addEventListener("click", createProduct);


// const price = product.querySelector ('.price span');
//   let quantity = product.querySelector  ('.quantity input');

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
