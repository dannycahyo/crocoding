



const product = {
  // name: "Laptop",
  price: 1000,
  getDiscountPrice() {
    return this.price * 0.9;
  },
  features: ["8GB RAM", "1TB HDD", "i5 Processor"],
};

console.log(product.name?.toUpperCase());

console.log(product.getDiscountPrice?.());

product.features?.forEach(console.log);

