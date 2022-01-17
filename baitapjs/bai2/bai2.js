function tinhThueSuat(thuNhap) {
  if (thuNhap <= 60000000) {
    return 5;
  }
  if (thuNhap > 60000000 && thuNhap <= 120000000) {
    return 10;
  }
  if (thuNhap > 120000000 && thuNhap <= 210000000) {
    return 15;
  }
  if (thuNhap > 210000000 && thuNhap <= 384000000) {
    return 20;
  }
  if (thuNhap > 384000000 && thuNhap <= 624000000) {
    return 25;
  }
  if (thuNhap > 624000000 && thuNhap <= 950000000) {
    return 30;
  }
  if (thuNhap > 950000000) {
    return 35;
  }
}

function tinhThue() {
  var tongThuNhapValue = document.getElementById("tongThuNhapTxt").value * 1;
  var soNguoiValue = document.getElementById("soNguoiPhuThuocTxt").value * 1;
  var kq = document.getElementById("ketQuaTxt");

  var thuNhap = tongThuNhapValue - 4000000 - soNguoiValue * 1600000;

  var thuNhapChiuThue = (thuNhap * tinhThueSuat(tongThuNhapValue)) / 100;
  thuNhapChiuThue = Math.floor(thuNhapChiuThue);
  kq.innerHTML =
    "Thuế Thu Nhập cá nhân của bạn là:  " +
    thuNhapChiuThue.toLocaleString() +
    " VND";
}
