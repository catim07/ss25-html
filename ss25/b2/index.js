function tinhtong(a,b){
    if(typeof(a)==='number'&&typeof(b)==='number'&&Number.isInteger(a)&&Number.isInteger(b)){
        return `tổng 2 số là: ${a+b}`;
    }else{
        return "dữ liệu ko hợp lệ";
    }
}
let num1=+prompt("mời bạn nhập số thứ 1: ");
let num2=+prompt("mời bạn nhập số thứ 2: ");
alert(tinhtong(num1,num2));