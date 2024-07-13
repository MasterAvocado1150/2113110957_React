type Product = {
    name: string;
    price: number;
    category: string;
}

//กำหนด array ของ product

let products : Product[] = [
    {name: 'Laptop', price: 50000, category:'Electronics'},
    {name: 'Shirt', price: 1200, category:'Apparel'},
    {name: 'Coffer Maker', price: 2500, category:'Appliances'},
]

//สร้าง กรองข้อมูลของตามราคาที่กำหนด
function fillProductByPrice(products:Product[], dis:number) : Product[] {
    return products.filter(product=>product.price>dis);
}

//สร้าง ส่วนลด
function discountProduct(product:Product[]) : Product[]{
    return product.map(product=>({...product,price:product.price*0.9}));
}


let filterProduct = fillProductByPrice(products,2000);
let discountProducts = discountProduct(filterProduct);

//แสดงออกมา
//console.log(filterProduct);

console.log(discountProducts);