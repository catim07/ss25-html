function timGiaTriNhoNhat(mang) {
    if (mang.length === 0) {
        return "Mảng không chứa phần tử!";
    }
    let giaTriNhoNhat = Infinity;
    for (let i = 0; i < mang.length; i++) {
        if (typeof(mang[i]) === 'number') {
            if (mang[i] < giaTriNhoNhat) {
                giaTriNhoNhat = mang[i];
            }
        } else {
            return "Mảng chứa giá trị không hợp lệ!";
        }
    }
    return giaTriNhoNhat;
}
let mang1 = [2, 4, 8, 1, 9];
console.log(`Giá trị nhỏ nhất trong mảng là: ${timGiaTriNhoNhat(mang1)}`);
let mang2 = [];
console.log(`Giá trị nhỏ nhất trong mảng là: ${timGiaTriNhoNhat(mang2)}`);
let mang3 = "abc";
console.log(`Giá trị nhỏ nhất trong mảng là: ${timGiaTriNhoNhat(mang3)}`);
let mang4 = [5, 2, 7, 5, 4];
console.log(`Giá trị nhỏ nhất trong mảng là: ${timGiaTriNhoNhat(mang4)}`);
