const products = [
  { name: "Jeans", price: 80, category: "clothes" },
  { name: "Hoodie", price: 60, category: "clothes" },
  { name: "Jacket", price: 120, category: "clothes" },
  { name: "Cards", price: 35, category: "games" },
  { name: "iPhone", price: 649, category: "electronics" },
];

const getProductName = (product) => product.name;

const productsName = products.map((product) => getProductName(product));
// Uncomment this code to show the point free implementation
// const productsName = products.map(getProductName);

const fetchProducts = async () => {
  const res = await fetch("https://fakestoreapi.com/products");
  const data = await res.json();
  return data;
};

fetchProducts().then((products) => console.log(products));
// Uncomment this code to show the point free implementation
// fetchProducts().then(console.log);

const compose =
  (...fns) =>
  (x) =>
    fns.reduceRight((y, f) => f(y), x);

const getProductClothesCategory = (products) =>
  products.filter((product) => product.category === "clothes");
const filterProductByPriceUnder100 = (products) =>
  products.filter((product) => product.price < 100);

const getProductsName = (products) => products.map(getProductName);

// Point Free example =>
const filterProduct = compose(
  getProductsName,
  filterProductByPriceUnder100,
  getProductClothesCategory,
);

const clothesNameUnder100 = filterProduct(products);

console.log(clothesNameUnder100);
