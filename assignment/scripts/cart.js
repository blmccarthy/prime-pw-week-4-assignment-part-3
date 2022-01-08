console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

let basket = [];

function addItem(item) {
  if (isFull() === false){
    basket.push(item);
    return true;
  }
  else if (isFull()){
    console.log(`CART FULL! Unable to add ${item} to cart`);
    return false;
  }
}

function listItems() {
  if (basket.length > 0){                     // Checks if basket has items
    console.log('Items in your basket:');     // Lists items in basket
    for (items of basket){
      console.log(items);
    }
  }
  else {                                      // Checks if basket is empty
    console.log("Your basket is empty");      // Provides feedback that basket is empty
  }
}

function empty() {                            // Resets 'basket' array to []
  basket = [];                                // Provides feedback that you have emptied basket
  console.log("You have emptied your basket");
}

console.log("I'm adding an RTX 3080 to cart (expect true):", addItem('RTX 3080'));
listItems();

console.log("I'm adding a Ryzen 5800X to cart (expect true):", addItem('Ryzen 5800X'));
listItems();

console.log("I'm adding a 32GB DDR4 RAM to cart (expect true):", addItem('32GB DDR4 RAM'));
listItems();

console.log("I changed my mind, I want a Prebuilt PC instead");
empty();
listItems();

console.log("I'm adding a Prebuilt PC to cart (expect true):", addItem('Prebuilt PC'));
listItems();

/// Stretch Goals ///

const maxItems = 5;
basket = [];

function isFull(){
  if (basket.length < 5){
    return false;
  }
  else {
    return true;
  }
}

console.log("I'm adding a item_01 to cart (expect true):", addItem('item_01'));
console.log("I'm adding a item_02 to cart (expect true):", addItem('item_02'));
console.log("I'm adding a item_03 to cart (expect true):", addItem('item_03'));
console.log("I'm adding a item_04 to cart (expect true):", addItem('item_04'));
console.log("I'm adding a item_05 to cart (expect true):", addItem('item_05'));
console.log("I'm adding a item_06 to cart (expect true):", addItem('item_06'));
listItems();

function removeItem(item){
  if (basket.indexOf(item) > -1){             // checks for item string in basket array
    basket.splice(basket.indexOf(item), 1);   // if found, it removes from basket array
    return true;
  }
  else {
    console.log(`NULL: ${item} was not found in your basket`);  // if item isn't found, function reports item wasn't found
    return false;
  }
}

console.log('remove item_04 from cart:', removeItem('item_04'));
listItems();
console.log('remove item_04 from cart:', removeItem('item_04'));
listItems();
