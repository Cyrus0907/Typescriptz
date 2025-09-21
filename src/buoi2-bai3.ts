// Bài 3:Viết hàm trả về boolean kiểm tra 1 số có phải số nguyên tố
function laSoNguyenTo(n:number): boolean {
    if(n<2){
        return false;
    }
    for(let i = 2;i *i <= n; i++){
        if(n % i === 0)
            return false;

    }
    return true;
    
}
const numbers = [1, 4,7,9,0];
numbers.forEach(num => {
    console.log(`${num} là số nguyên tố? ${laSoNguyenTo(num)}`);
    
});