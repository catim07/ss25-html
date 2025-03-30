function kiemtra(arr){
    let count=0;
    for(let i=0;i<arr.length;i++){
        if(Number.isInteger(arr[i])&&arr[i]>0){
            count++;
        }
    }
    if(count>0){
        alert(count);
    }else{
        alert("không có số nguyên trong mảng")
    }
}
let arr1=[4,5.4,6,-2];
let arr2=[1.2,5.4,-6,-2];
kiemtra(arr1);
kiemtra(arr2);