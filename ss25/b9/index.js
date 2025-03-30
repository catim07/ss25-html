
function ktra(email){
    if(email.includes('@')&&(email.endsWith('.com')||email.endsWith('.vn'))){
        return true
    }else{
        return false
    }
}
function dangki(email,user){
    if(!ktra(email)){
        alert("email không hợp lệ")
        return;
    }
    if(user.includes(email)){
        alert("email đã tồn tại");
    }else{
        user.push(email);
        alert("đăng kí email thanh công")
    }
}
let check=1,user=[];
do {
    let chose = +prompt(`
        ================= MENU ==================
        1. Đăng kí email
        2. thoát
        ==========================================
        Lựa chọn của bạn: `);
    switch (chose) {
        case 1:
            let email = prompt("mời bạn đăng kí email: ");
            if(email===null){
                break;
            }
            dangki(email,user);
            break;
        case 2:
            check=0
            break;
        default:
            alert("số ko hợp lệ");
            break;
    }

} while (check != 0);

