function kiemtra(num){
    let check=1;
    if(num<2||typeof num!=='number'||isNaN(num)){
        alert ("không hợp lệ")
    }else{
        check=2;
    }
    for(let i=2;i<=Math.sqrt(num);i++){
        if(num%i==0){
            alert("số bạn nhập ko phải số ngto")
            check =1
        }
    }
    if(check==2){
        alert("số bạn là số nguyên tố")
    }
}
let num=prompt("mời bạn nhập số: ");
kiemtra(num);