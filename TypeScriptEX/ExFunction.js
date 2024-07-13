var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
//กำหนด array ของ product
var products = [
    { name: 'Laptop', price: 50000, category: 'Electronics' },
    { name: 'Shirt', price: 1200, category: 'Apparel' },
    { name: 'Coffer Maker', price: 2500, category: 'Appliances' },
];
//สร้าง กรองข้อมูลของตามราคาที่กำหนด
function fillProductByPrice(products, dis) {
    return products.filter(function (product) { return product.price > dis; });
}
//สร้าง ส่วนลด
function discountProduct(product) {
    return product.map(function (product) { return (__assign(__assign({}, product), { price: product.price * 0.9 })); });
}
var filterProduct = fillProductByPrice(products, 2000);
var discountProducts = discountProduct(filterProduct);
//แสดงออกมา
//console.log(filterProduct);
console.log(discountProducts);
