"use strict";
// Bài 1: Arrow function
// 1.1 Viết hàm (function và arrow function) tính tổng có giá trị trả về không dùng
// tham số.
Object.defineProperty(exports, "__esModule", { value: true });
// function tinhTong(a: number, b: number): number { -. như này là truyền tham số a, b
//     const a = 5;
//     return a+b;
// } 
function tinhTong() {
    const a = 5;
    const b = 5;
    return a + b;
}
console.log(`Tổng = ${tinhTong()}`);
const tinhTongArrow = () => {
    const c = 6;
    const d = 6;
    return c + d;
};
console.log(`Kết quả tổng arrow function = ${tinhTongArrow()}`);
// 2. Viết hàm arrow function tính tổng 2 số (có sử dụng default value, optional
// parameter, rest parameter)
const tinhTongDefault = (num1 = 1, num2 = 1) => num1 + num2;
console.log(tinhTongDefault);
console.log(tinhTongDefault(2));
console.log(tinhTongDefault(2, 3));
const tinhTongOptionalParameter = (num3, num4) => {
    return num3 + (num4 ?? 0); //nếu b undefined thì dùng 0
};
console.log(tinhTongOptionalParameter(5)); // 5+ 0
console.log(tinhTongOptionalParameter(7, 2));
const tinhTongRest = (...nums) => {
    return nums.reduce((sum, n) => sum + n, 0);
    //reduce tính tổng tất cả các số
};
console.log(tinhTongRest(1, 2, 3, 4));
console.log(tinhTongRest(7));
console.log(tinhTongRest());
// dùng tất cả default + option+ rest
const tinhTongFull = (num5 = 1, num6, ...num1s) => {
    const sumB = num6 ?? 0;
    return num5 + sumB + num1s.reduce((sumB, n) => sumB + n, 0);
};
console.log(tinhTongFull());
console.log(tinhTongFull(2));
console.log(tinhTongFull(2, 4));
console.log(tinhTongFull(2, 4, 4, 2));
// 1.3 Thực hiện ví dụ merging array with spread operator
const arr1 = [1, 2, 3];
const arr2 = [7, 8, 9];
// ghép mảng
const arr12 = [0, ...arr1, 4, 5, 6, ...arr2];
console.log(arr12);
// Bài 2
// 2.1 Function & void
let sum = (x = 5, y) => {
    return x + y;
};
let speech = (ouput) => {
    console.log("Result is:" + ouput);
};
speech(sum(5, 6));
// 2.2 Nerver & void
let something = undefined;
function throwError(errMsg) {
    throw new Error(errMsg);
}
throwError("Something went wrong");
// 2.3 Function & Callback
function AddAndHandle(x1, y1, cb) {
    const result = x1 + y1;
    cb(result);
}
AddAndHandle(15, 20, (result) => { console.log(result); });
