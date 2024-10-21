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
  console.log("luongDien: ", luongDien);
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
