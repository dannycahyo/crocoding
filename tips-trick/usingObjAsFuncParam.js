function createProduct(name, type, colors, price, discount) {
  const product = {
    name,
    type,
    colors,
    price,
    discount,
    getPriceWithDiscount() {
      return this.price * (1 - this.discount);
    },
    setColor(color) {
      this.colors.push(color);
    },
  };

  return product;
}

// We still worry about the order of the function with that, moreover it's not quite readable
const newProduct = createProduct("Shirt", "Clothes", ["Red", "Blue"], 100, 0.1);

// Better way is object as function parameters
/* 
function createProduct({ name, type, colors, price, discount }) {
  const product = {
    name,
    type,
    colors,
    price,
    discount,
    getPriceWithDiscount() {
      return this.price * (1 - this.discount);
    },
    setColor(color) {
      this.colors.push(color);
    },
  };

  return product;
}

// By using object we don't have to worry about the order of the arguments, and more readable
const newProduct = createProduct({
  name: "Shirt",
  type: "Clothes",
  colors: ["Red", "Blue"],
  price: 100,
  discount: 0.1,
});
*/
