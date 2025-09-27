var products = [
    { id: 1, name: "Bánh mì", price: 5000, category: "Thực phẩm" },
    { id: 2, name: "Trà đào", price: 250, category: "Thực phẩm" },
    { id: 3, name: "Máy tính", price: 7000, category: "Điện tử" },
    { id: 4, name: "Iphone 11 pro", price: 9000, category: "Điện tử" },
    { id: 5, name: "Áo thun nam", price: 300, category: "Thời trang" }
];
//3
function filterByCategory(list, category) {
    return list.filter(function (p) { return p.category === category; });
}
var fashionProduct = filterByCategory(products, "Thời trang");
console.log("Danh mục thời trang:", fashionProduct);
var foodProduct = filterByCategory(products, "Thực phẩm");
console.log("Danh mục thực phẩm:", foodProduct);
function calculateTotalPrice(list) {
    return list.reduce(function (sum, products) { return sum + products.price; }, 0);
}
var total = calculateTotalPrice(products);
console.log("Tổng giá trị của tất cả sp trong danh sách: ", total);
function findMinMax(products) {
    if (products.length === 0)
        throw new Error("Empty");
    var min = products[0];
    var max = products[0];
    for (var i = 1; i < products.length; i++) {
        var p = products[i];
        if (!p)
            continue;
        if (p.price < min.price) {
            min = p;
        }
        if (p.price > max.price) {
            max = p;
        }
    }
    return { min: min, max: max };
}
var result = findMinMax(products);
console.log("S\u1EA3n ph\u1EA9m r\u1EBB nh\u1EA5t l\u00E0: ".concat(result.min.name, " - Gi\u00E1: ").concat(result.min.price));
console.log("S\u1EA3n ph\u1EA9m \u0111\u1EAFt nh\u1EA5t l\u00E0: ".concat(result.max.name, " - Gi\u00E1: ").concat(result.max.price));
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
var vehicles = [
    { name: "Honda Wave", type: "Xe máy", speed: 50, fuelType: FuelType.Xang },
    { name: "VinFast VF e34", type: "Ô tô", speed: 60, fuelType: FuelType.Dien },
    { name: "Yamaha Exciter", type: "Xe máy", speed: 70, fuelType: FuelType.Xang },
];
var distance = 100;
vehicles.forEach(function (v) {
    var time = calculateTravelTime(v, distance);
    console.log("".concat(v.name, " (").concat(v.type, ", ").concat(v.fuelType, ") c\u1EA7n ").concat(time.toFixed(2), " gi\u1EDD \u0111\u1EC3 \u0111i ").concat(distance, " km."));
});
