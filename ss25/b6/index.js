function isPalindrome(str){
    let reveresstr=str.split("").reverse().join("");
    if(str===reveresstr){
        alert("là chuỗi đối xứng")
    }else{
        alert("không phải chuỗi đối xứng");
    }

}
let str=prompt("mời bạn nhập chuỗi: ");
isPalindrome(str);