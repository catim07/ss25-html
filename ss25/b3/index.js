function sochan(mang){
    let count=0,arr=[];
    for(let i=0;i<mang.length;i++){
        if(typeof (mang[i])!=='number'){
            return "dữ liệu ko hợp lệ"
        }
        if(mang[i]%2==0){
            arr[count]=mang[i];
            count++;
        }
    }
    if(count==0){
        return"mảng ko chứ số chẵn";
    }else{
        return arr
    }
}
let arr1=[11,4,6,64];
let arr2=[1,3,5,7];
let arr3="text"
alert(`
    ${sochan(arr1)}
    ${sochan(arr2)}
    ${sochan(arr3)}`);
