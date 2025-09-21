"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function TinhChuVi(dai, rong) {
    return (dai + rong) * 2;
}
function TinhDienTich(dai, rong) {
    return dai * rong;
}
function HinhChuNhat(stt, dai, rong) {
    console.log(`
        Hình chữ nhật số ${stt}:
         - Chiều dài = ${dai},
         - Chiều rộng = ${rong},
         - Chu vi = ${TinhChuVi(dai, rong)},
         - Diện tích = ${TinhDienTich(dai, rong)}
    `);
}
HinhChuNhat(1, 7, 5);
HinhChuNhat(2, 2, 6);
HinhChuNhat(3, 3, 6);
