"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let products = [
    { id: 1, name: "Bánh mì", price: 5000, category: "Thực phẩm" },
    { id: 2, name: "Trà đào", price: 250, category: "Thực phẩm" },
    { id: 3, name: "Máy tính", price: 7000, category: "Điện tử" },
    { id: 4, name: "Iphone 11 pro", price: 9000, category: "Điện tử" },
    { id: 5, name: "Áo thun nam", price: 300, category: "Thời trang" }
];
//3
function filterByCategory(list, category) {
    return list.filter(p => p.category === category);
}
let fashionProduct = filterByCategory(products, "Thời trang");
console.log("Danh mục thời trang:", fashionProduct);
let foodProduct = filterByCategory(products, "Thực phẩm");
console.log("Danh mục thực phẩm:", foodProduct);
function calculateTotalPrice(list) {
    return list.reduce((sum, products) => sum + products.price, 0);
}
let total = calculateTotalPrice(products);
console.log("Tổng giá trị của tất cả sp trong danh sách: ", total);
function findMinMax(products) {
    if (products.length === 0)
        throw new Error("Empty");
    let min = products[0];
    let max = products[0];
    for (let i = 1; i < products.length; i++) {
        const p = products[i];
        if (!p)
            continue;
        if (p.price < min.price) {
            min = p;
        }
        if (p.price > max.price) {
            max = p;
        }
    }
    return { min, max };
}
const result = findMinMax(products);
console.log(`Sản phẩm rẻ nhất là: ${result.min.name} - Giá: ${result.min.price}`);
console.log(`Sản phẩm đắt nhất là: ${result.max.name} - Giá: ${result.max.price}`);
var FuelType;
(function (FuelType) {
    FuelType["Xang"] = "X\u0103ng";
    FuelType["Dien"] = "Dien";
})(FuelType || (FuelType = {}));
// 3. hàm calculateTravelTime
function calculateTravelTime(vehicle, distance) {
    if (vehicle.speed <= 0) {
        throw new Error("Tốc độ phải lớn hơn 0!");
    }
    return distance / vehicle.speed; // Thời gian = Quãng đường / Vận tốc
}
// 4. Danh sách phương tiện
const vehicles = [
    { name: "Honda Wave", type: "Xe máy", speed: 50, fuelType: FuelType.Xang },
    { name: "VinFast VF e34", type: "Ô tô", speed: 60, fuelType: FuelType.Dien },
    { name: "Yamaha Exciter", type: "Xe máy", speed: 70, fuelType: FuelType.Xang },
];
const distance = 100;
vehicles.forEach(v => {
    const time = calculateTravelTime(v, distance);
    console.log(`${v.name} (${v.type}, ${v.fuelType}) cần ${time.toFixed(2)} giờ để đi ${distance} km.`);
});
