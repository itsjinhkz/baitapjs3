function tinhDiemThi() {
  var diemThi1Value = document.getElementById("monThuNhatTxt").value * 1;
  var diemThi2Value = document.getElementById("monThuHaiTxt").value * 1;
  var diemThi3Value = document.getElementById("monThuBaTxt").value * 1;
  var diemThi = diemThi1Value + diemThi2Value + diemThi3Value;
  return diemThi;
}
function tinhDiemKhuVuc(khuVuc) {
  if (khuVuc == "A") {
    return 2;
  }
  if (khuVuc == "B") {
    return 1;
  }
  if (khuVuc == "C") {
    return 0.5;
  }
  if (khuVuc == "x") {
    return 0;
  }
}
function tinhDoiTuong(doiTuong) {
  if (doiTuong == 1) {
    return 2.5;
  }
  if (doiTuong == 2) {
    return 1.5;
  }
  if (doiTuong == 3) {
    return 1;
  }
  if (doiTuong == 0) {
    return 0;
  }
}

function tinhDiemTongKet() {
  var doiTuongValue = document.getElementById("doiTuongUuTienTxt").value;
  var khuVucValue = document.getElementById("khuVucUuTienTxt").value;
  var diemTongKet =
    tinhDiemThi() + tinhDoiTuong(doiTuongValue) + tinhDiemKhuVuc(khuVucValue);
  return diemTongKet;
}

function tinhDiem() {
  var diemHoiDongValue = document.getElementById("diemHoiDongTxt").value * 1;
  var kq = document.getElementById("ketQuaTxt");
  if (tinhDiemTongKet() >= diemHoiDongValue) {
    kq.innerText =
      "Chúc mừng bạn đã trúng tuyển\n " +
      "Tổng điểm của bạn là: " +
      tinhDiemTongKet() +
      "điểm";
  } else {
    kq.innerText =
      "Bạn đã rớt!\n" + "Tổng điểm của bạn là: " + tinhDiemTongKet() + " điểm";
  }
}
