function hoa(password){
    for(let i=0;i<password.length;i++){
        if(password[i]>='A'&&password[i]<='Z'){
            return true;
        }
    }
    return false;
}
function thuong(password){
    for(let i=0;i<password.length;i++){
        if(password[i]>='a'&&password[i]<='z'){
            return true;
        }
    }
    return false;
}
function so(password){
    for(let i=0;i<password.length;i++){
        if(!isNaN(password[i])){
            return true;
        }
    }
    return false;
}
function isStrongPassword(password){
    if(password.length>=8){
        if(hoa(password)){
            if(thuong(password)){
                if(so(password)){
                    alert("true")
                }else{
                    alert("false")
                }
            }else{
                alert("false")
            }
        }else{
            alert("false")
        }
    }else{
        alert("false");
    }

}
let password=prompt("mời bạn nhập chuỗi mật khẩu: ");
isStrongPassword(password);