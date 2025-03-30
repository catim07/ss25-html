function isPalindrome(str){
    let result="";
                let hoa= 1;
                for (let i = 0; i < str.length; i++) {
                    if (hoa) {
                        result += str[i].toUpperCase();
                        hoa = 0;
                    } else {
                        result += str[i].toLowerCase();
                    }
            
                    if (str[i] === " ") {
                        hoa = 1;
                    }
                }
                alert(result)

}
let str=prompt("mời bạn nhập chuỗi: ");
isPalindrome(str);