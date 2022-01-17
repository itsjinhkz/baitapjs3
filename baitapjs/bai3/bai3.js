// check khách hàng
function updateCustomer() {
  var customerEl = document.getElementById("customer").value;
  var ketNoiEl = document.getElementById("ketNoi");
  if (customerEl == "2") {
    ketNoiEl.style.display = "block";
  } else {
    ketNoiEl.style.display = "none";
  }
}
// tính đầu kết nối
function tinhDauKetNoi() {
  var soKetNoiValue = document.getElementById("soKetNoiTxt").value * 1;
  var dauKetNoi;
  if (soKetNoiValue <= 10) {
    dauKetNoi = soKetNoiValue * 75;
  } else {
    dauKetNoi = (soKetNoiValue - 10) * 5 + 10 * 75;
  }
  return dauKetNoi;
}

function tinhTien() {
  var customerEl = document.getElementById("customer").value;
  var kenhCaoCapValue = document.getElementById("kenhCaoCapTxt").value * 1;
  var maKhachHangValue = document.getElementById("maKhachHangTxt").value;
  var kq = document.getElementById("ketQuaTxt");
  var tongTien;
  if (customerEl == "1") {
    tongTien = 4.5 + 20.5 + kenhCaoCapValue * 7.5;
  }
  if (customerEl == "2") {
    tongTien = 15 + tinhDauKetNoi() + kenhCaoCapValue * 50;
  }
  console.log(tinhDauKetNoi());
  kq.innerText =
    "Mã khách hàng là: " +
    maKhachHangValue +
    " \n Số tiền bạn phải trả là: " +
    tongTien.toLocaleString() +
    " $";
}
