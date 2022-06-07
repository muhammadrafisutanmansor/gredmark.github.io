var name = prompt("Sila masukan nama anda");

var markah = prompt("Sila masukkan markah peperiksaan anda");

if (markah >= 90 && markah <= 100) {
  alert(name + " markah anda A+");
} else if (markah >= 80 && markah <= 89) {
  alert(name + " markah anda A");
} else if (markah >= 75 && markah <= 79) {
  alert(name + " markah anda A-");
} else if (markah >= 70 && markah <= 74) {
  alert(name + " markah anda B+");
} else if (markah >= 65 && markah <= 69) {
  alert(name + " markah anda B");
} else if (markah >= 60 && markah <= 64) {
  alert(name + " markah anda C+");
} else if (markah >= 50 && markah <= 59) {
  alert(name + " markah anda C");
} else if (markah >= 45 && markah <= 49) {
  alert(name + " markah anda D");
} else if (markah >= 45 && markah <= 49) {
  alert(name + " markah anda E");
} else if (markah >= 00 && markah <= 39) {
  alert(name + " markah anda G");
} else {
  alert("Anda mememasukkan markah yang salah");
}
