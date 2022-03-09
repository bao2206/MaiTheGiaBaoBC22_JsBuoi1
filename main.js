console.log("Bài tập luyện 2");

// Đầu vào 
var n, unit, ten, hundred, sum

n = 123;

//Xử lý


unit = n % 10; // Lấy số ở hàng đơn vị

ten = Math.floor(n % 100 / 10); // Lấy số ở hàng chục

hundred = Math.floor(n /100) // Lấy số ở hàng trăm 

sum = hundred + ten + unit; // Tính tổng của 3 chữ số 

//Đầu ra
console.log("Tổng 3 ký số là: ",sum);


console.log("------------------------------------------------------------------------");


console.log("Bài tập luyện 3");

// Đầu vào

var tenPhim, soVe, doanhThu, phanTramTuThien, tienTuThien, tongDoanhThu, soVeNguoiLon, soVeTreEm, giaVeNguoiLon, giaVeTreEm


// Xử lý

tenPhim = "End Game";

soVeNguoiLon = 50;
soVeTreEm = 100;

giaVeTreEm = 50000;
giaVeNguoiLon = 100000;

soVe = soVeNguoiLon + soVeTreEm;//Tính tổng số vé

doanhThu = soVeNguoiLon * giaVeNguoiLon + soVeTreEm * giaVeTreEm;// Tính tiền doanh thu

phanTramTuThien = 0.1; // 

tienTuThien = doanhThu * phanTramTuThien; // Tính tiền từ thiện

tongDoanhThu = doanhThu - tienTuThien; // Tính tổng doanh thu 
// Đầu ra
// console.log(soVe, doanhThu, tienTuThien, tongDoanhThu);
console.log("Tổng số vé ",soVe);
console.log("Doanh thu: ",doanhThu);
console.log("Tiền từ thiện: ",tienTuThien);
console.log("Tổng doanh thu: ",tongDoanhThu);


console.log("------------------------------------------------------------------------");
console.log("Tính tiền lương nhân viên");

//Đầu vào 

var soNgayLam  = 3;
const LUONG = 100000;

//Xử lý

var tongTienLuong = LUONG * soNgayLam; //Tiền lương = lương 1 ngày * số ngày làm

//Đầu ra 

console.log("Tổng tiền lương là: "+tongTienLuong);



console.log("------------------------------------------------------------------------");
console.log("Tính giá trị trung bình");

//Đầu vào


var n1 = 1.0;
var n2 =  2.0;
var n3 = 3.0;
var n4 = 4.0;
var n5 = 5.0;

// Xử lý

var tinhTrungBinh = (n1 + n2 + n3 + n4 + n5) / 5; //Cộng lại 5 số sau đó chia cho 5

//Đầu ra 
console.log("Giá trị trung bình là: ",tinhTrungBinh);


console.log("------------------------------------------------------------------------");

console.log("Quy đổi tiền");


//Đầu vào 

var dollar = 2;
const VND = 23.500;

//Xử lý
var quyDoi = dollar * VND;

//Đầu ra 
console.log("USD sang VND = ",quyDoi); 

console.log("------------------------------------------------------------------------");

console.log("Tính diện tích, chu vi hình chữ nhật");


//Đầu vào
var cd = 50;
var cr = 20;

///Xử lý

var dienTich = cd * cr; //Áp dụng công thức tính diện tích
var chuVi =  (cd + cr) * 2;//Áp dụng công thức tính chu vi

// Đầu ra

console.log("Diện tích hình chữ nhật là: ",dienTich);
console.log("Chu vi hình chữ nhật là: ",chuVi);


console.log("------------------------------------------------------------------------");

console.log("Tính tổng 2 ký số")
//Đầu vào
var number = 22;
//Xử lý
var hangDV = number % 10; // Lấy hàng đơn vị
var hangChuc = Math.floor(number % 100 / 10); //Lấy hàng chục
//Đầu ra

console.log("Tổng 2 ký số: ",hangDV+hangChuc)