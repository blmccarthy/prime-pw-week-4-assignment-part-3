console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

let basket = [];

function addItem(item) {
  basket.push(item);
  return true;
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
