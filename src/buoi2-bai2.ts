//Bài 2: Viết hàm trả về số lượng xuất hiện của 1 ký tự trong chuỗi
function demKyTu(chuoi: string, kyTuCanDem: string): number {
    let count = 0;
    for (let i = 0; i < chuoi.length; i++) {
        if (chuoi.charAt(i).toLowerCase() === kyTuCanDem.toLowerCase()) {
            count++;
        }
    }
    return count;
   
}
const chuoi = "Anh trai say hi!";
const kyTu = "a";
const soLan = demKyTu(chuoi, kyTu);


console.log(`Ký tự '${kyTu}' xuất hiện ${soLan} lần trong chuỗi "${chuoi}".`);