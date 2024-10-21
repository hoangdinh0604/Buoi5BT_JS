//Bài tập xét kết quả thi
document.querySelector("#tinhKQThi").onclick = function () {
  let diemChuan = document.querySelector("#diemChuan").value * 1;

  let diemBaMon = document.querySelector("#diemBaMon").value * 1;

  let khuVuc = document.querySelector("#khuVuc").value;

  let diemKhuVuc = 0;
  if (khuVuc == "A") {
    diemKhuVuc = 2;
  } else if (khuVuc == "B") {
    diemKhuVuc = 1;
  } else if (khuVuc == "C") {
    diemKhuVuc = 0.5;
  }
  let doiTuong = document.querySelector("#doiTuong").value;

  let diemDoiTuong = 0;
  if (doiTuong == "1") {
    diemDoiTuong = 2.5;
  } else if (doiTuong == "2") {
    diemDoiTuong = 1.5;
  } else if (doiTuong == "3") {
    diemDoiTuong = 1;
  }
  let tongDiem = diemBaMon + diemDoiTuong + diemKhuVuc;
  if (tongDiem >= diemChuan) {
    document.querySelector(
      "#result1"
    ).innerHTML = `Bạn đã đậu với tổng điểm là ${tongDiem}`;
  } else {
    document.querySelector(
      "#result1"
    ).innerHTML = `Bạn đã rớt với tổng điểm là ${tongDiem}`;
  }
};
//Bài tập 2
document.querySelector("#tinhTienDien").onclick = function () {
  let luongDien = document.querySelector("#luongDien").value * 1;

  let tongTienDien = 0;
  if (luongDien <= 50) {
    tongTienDien = 500 * luongDien;
  } else if (luongDien > 50 && luongDien <= 100) {
    tongTienDien = 500 * 50 + (luongDien - 50) * 650;
  } else if (luongDien > 100 && luongDien <= 200) {
    tongTienDien = 500 * 50 + 50 * 650 + (luongDien - 100) * 850;
  } else if (luongDien > 200 && luongDien <= 350) {
    tongTienDien = 500 * 50 + 50 * 650 + 100 * 850 + (luongDien - 200) * 1100;
  } else if (luongDien > 350) {
    tongTienDien =
      500 * 50 + 50 * 650 + 100 * 850 + 150 * 1100 + (luongDien - 250) * 1300;
  }
  document.querySelector(
    "#result2"
  ).innerHTML = `Tổng tiền điện là: ${tongTienDien} VND <br>và tổng lượng điện tiêu thụ là ${luongDien}kW`;
};
//Bài tập tính thuế thu nhập cá nhân
document.querySelector("#tinhThue").onclick = function () {
  let tongThuNhap = document.querySelector("#thuNhap").value * 1;
  let soNguoiPhuThuoc = document.querySelector("#soNguoiPhuThuoc").value * 1;
  let ten = document.querySelector("#ten").value;
  let tienThuePhaiDong;
  let thuNhapChiuThue = tongThuNhap - 4 - soNguoiPhuThuoc * 1.6;
  if (thuNhapChiuThue <= 60) {
    tienThuePhaiDong = thuNhapChiuThue * 0.05;
  } else if (thuNhapChiuThue > 60 && thuNhapChiuThue <= 120) {
    tienThuePhaiDong = 60 * 0.05 + (thuNhapChiuThue - 60) * 0.1;
  } else if (thuNhapChiuThue > 120 && thuNhapChiuThue <= 210) {
    tienThuePhaiDong = 60 * 0.05 + 60 * 0.1 + (thuNhapChiuThue - 120) * 0.15;
  } else if (thuNhapChiuThue > 210 && thuNhapChiuThue <= 384) {
    tienThuePhaiDong =
      60 * 0.05 + 60 * 0.1 + 90 * 0.15 + (thuNhapChiuThue - 210) * 0.2;
  } else if (thuNhapChiuThue > 384 && thuNhapChiuThue <= 624) {
    tienThuePhaiDong =
      60 * 0.05 +
      60 * 0.1 +
      90 * 0.15 +
      174 * 0.2 +
      (thuNhapChiuThue - 384) * 0.25;
  } else if (thuNhapChiuThue > 624 && thuNhapChiuThue <= 960) {
    tienThuePhaiDong =
      60 * 0.05 +
      60 * 0.1 +
      90 * 0.15 +
      174 * 0.2 +
      240 * 0.25 +
      (thuNhapChiuThue - 624) * 0.3;
  } else if (thuNhapChiuThue > 960) {
    tienThuePhaiDong =
      60 * 0.05 +
      60 * 0.1 +
      90 * 0.15 +
      174 * 0.2 +
      240 * 0.25 +
      336 * 0.3 +
      (thuNhapChiuThue - 960) * 0.35;
  }
  document.querySelector(
    "#result3"
  ).innerHTML = `${ten} phải đóng tiền thuế là: ${tienThuePhaiDong} triệu VND`;
};
//Bài tập tính tiền cáp

let myFunction = () => {
  let loaiKH = document.querySelector("#loaiKH").value;
  let btnsoKetNoi = document.querySelector("#divSoKetNoi");

  if (loaiKH == 1) {
    btnsoKetNoi.classList.add("hidden");
  } else {
    btnsoKetNoi.classList.remove("hidden");
  }
};
document.querySelector("#tinhTienCap").onclick = function () {
  let phiXuLyHD = 0;
  let phiDVCoBan = 0;
  let phiThueCaoCap = 0;
  let maKH = document.querySelector("#maKH").value;
  let loaiKH = document.querySelector("#loaiKH").value;
  let soKetNoi = document.querySelector("#soKetNoi").value * 1;
  let soKenhCaoCap = document.querySelector("#soKenhCaoCap").value * 1;
  let tongTienCap = 0;
  if (loaiKH == 1) {
    phiXuLyHD = 4.5;
    phiDVCoBan = 20.5;
    phiThueCaoCap = 7.5 * soKenhCaoCap;
    tongTienCap = phiXuLyHD + phiDVCoBan + phiThueCaoCap;
    document.querySelector(
      "#result4"
    ).innerHTML = `${maKH} phải đóng tiền cáp là: ${tongTienCap}$`;
  } else if (loaiKH == 2) {
    phiXuLyHD = 15;
    let tienKetNoi = 0;
    if (soKetNoi <= 10) {
      tienKetNoi = 75;
    } else {
      tienKetNoi = 75 + (soKetNoi - 10) * 5;
    }
    phiThueCaoCap = 50 * soKenhCaoCap;
    tongTienCap = phiXuLyHD + phiDVCoBan + phiThueCaoCap + tienKetNoi;

    document.querySelector(
      "#result4"
    ).innerHTML = `${maKH} phải đóng tiền cáp là: ${tongTienCap}$`;
  }
};
