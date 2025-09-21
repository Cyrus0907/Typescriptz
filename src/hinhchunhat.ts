function TinhChuVi(dai: number, rong: number): number {
    return (dai + rong) * 2;
}

function TinhDienTich(dai: number, rong: number): number {
    return dai * rong;
}

function HinhChuNhat(stt: number, dai: number, rong: number): void {
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
