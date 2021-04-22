let danhsachhanghoa = []
let danhsachbanhang = []
let doanhthu = 0
class hanghoa {
    dinhDanh
    tenMathang
    giaThanh
    nhaSanXuat
    giamGia
    ngayNhap
    constructor(dinhDanh, tenMathang, giaThanh, giamGia, ngayNhap) {
        this.dinhDanh = dinhDanh
        this.tenMathang = tenMathang
        this.giaThanh = giaThanh
        this.giamGia = giamGia
        this.ngayNhap = ngayNhap
    }
    nhaphangHoa(data) {
        danhsachhanghoa.push(data);
        console.log(danhsachhanghoa);
    }
    banhang(data){
        for (let i = 0; i < danhsachhanghoa.length; i++) {
            if (danhsachhanghoa[i].dinhDanh == data) {
                danhsachbanhang.push(danhsachhanghoa[i]);
                danhsachhanghoa.splice(i,1);
                console.log(danhsachbanhang);
                break
            } else {
                continue;
            }
        }
    }
}
class Dogiadung extends hanghoa {
    doben
    constructor(dinhDanh, tenMathang, giaThanh, giamGia, ngayNhap, doben) {
        super(dinhDanh, tenMathang, giaThanh, giamGia, ngayNhap)
        this.doben = doben
    }
}
class quanAo extends hanghoa {
    xuatXu
    chatLieu
    constructor(dinhDanh, tenMathang, giaThanh, giamGia, ngayNhap, xuatXu, chatLieu){
        super(dinhDanh, tenMathang, giaThanh, giamGia, ngayNhap)
        this.xuatXu = xuatXu
        this.chatLieu = chatLieu
    }
}
class doAn extends hanghoa {
    vi
    constructor(dinhDanh, tenMathang, giaThanh, giamGia, ngayNhap, vi){
        super(dinhDanh, tenMathang, giaThanh, giamGia, ngayNhap)
        this.vi = vi
    }
}
let dogiadung1 = new Dogiadung ("đồ gia dụng", "cốc", 15000, "10%", "13/04/2021", "đạp phát vỡ luôn" ) 
let quanAo1 = new quanAo ("quần áo", "áo nilong chất lượng cao", 15000000, "5%", "14/03/2021", "bãi rác thành phố", "nilong 100%")
let doAn1 = new doAn ("đồ ăn", "mỳ", "5000/gói", "2%", "29/02/2020", "không hề ngon")
dogiadung1.nhaphangHoa(dogiadung1)
quanAo1.nhaphangHoa(quanAo1)
doAn1.nhaphangHoa(doAn1)

