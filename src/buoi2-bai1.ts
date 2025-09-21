//Viết 1 hàm tính tổng nhiều số (không biết trước số lượng tham số), sử dụng rest parameter
function sum(...numbers:number[]):number {
    let total = 0;
    console.log("Các số đc cộng là:");
    
    for(const num of numbers){
        console.log(num, "+");
        
        total +=num;
    }
    return (total);
    
}
// sum(1,2,3,4,5,6);
// sum(2,3,4);
// sum(67,0,3,1);
console.log("Tổng 1=", sum(1,2,3,4,5,6));
console.log("Tổng 2=", sum(2,3,4));
console.log("Tổng 3=", sum(67,0,3,1));
