// ITERATION 1

function updateSubtotal(product) {

  const productPrice = product.querySelector('.price span').innerText;
  const productQuantity = product.querySelector('.quantity input').value;
 
  //productSubtotal = product.querySelector('.subtotal span').innerText = 99;
  //console.log(productPrice, productQuantity, productSubtotal);

  //Calculate and send subtotal

  let productSubtotal = product.querySelector('.subtotal span');

  let calcSubtotal = productQuantity * productPrice;

//document.getElementsByClassName(".subtotal span").innerText = calcSubtotal;

   productSubtotal.innerText = calcSubtotal; 
  

   console.log (productSubtotal)

   return calcSubtotal;

}

function calculateAll() {

  let total =  0;

  let totalValue = document.querySelector('#total-value span');

  const allProducts = document.querySelectorAll('.product');
 
  allProducts.forEach(  (product) => {total += updateSubtotal(product)} )

  totalValue.innerText = total;


console.log (total)

}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
