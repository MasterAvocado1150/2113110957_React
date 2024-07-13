enum ProductStatus {
  Available = "Available",
  OutOfStock = "Out of Stock",
  Discontinued = "Discontinued",
}

let products: any[] = [
  { name: "Labtop", status: ProductStatus.Available, price: 1200 },
  { name: "Smartphone", status: ProductStatus.OutOfStock, price: 700 },
  { name: "Tablet", status: ProductStatus.Discontinued, price: 300 },
];

function displayproductdetails(products: any[]) {
  products.forEach((product) => {
    console.log(`Product:${product.name} , Product:${product.status} , Product:${product.price}`)
  });
}

displayproductdetails(products);
