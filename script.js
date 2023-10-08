// contoh program if dan else
var nilai = 75;

if (nilai >= 80) {
  console.log("Nilai Anda adalah A");
} else if (nilai >= 70) {
  console.log("Nilai Anda adalah B");
} else if (nilai >= 60) {
  console.log("Nilai Anda adalah C");
} else {
  console.log("Nilai Anda adalah D");
}

// contoh program nested if
var usia = 25;
var memilikiSIM = true;

if (usia >= 18) {
  console.log("Anda cukup usia untuk mengemudi.");

  if (memilikiSIM) {
    console.log("Anda boleh mengemudi.");
  } else {
    console.log("Anda harus memperoleh SIM terlebih dahulu.");
  }
} else {
  console.log("Anda belum cukup usia untuk mengemudi.");
}

// contoh program switch case
var hari = "Senin";

switch (hari) {
  case "Senin":
    console.log("Hari ini adalah hari Senin.");
    break;
  case "Selasa":
    console.log("Hari ini adalah hari Selasa.");
    break;
  case "Rabu":
    console.log("Hari ini adalah hari Rabu.");
    break;
  case "Kamis":
    console.log("Hari ini adalah hari Kamis.");
    break;
  case "Jumat":
    console.log("Hari ini adalah hari Jumat.");
    break;
  case "Sabtu":
    console.log("Hari ini adalah hari Sabtu.");
    break;
  case "Minggu":
    console.log("Hari ini adalah hari Minggu.");
    break;
  default:
    console.log("Tidak ada hari yang cocok.");
}

// contoh program for statement
console.log("Perulangan menghitung bilangan dari 1 hingga 5");
for (var i = 1; i <= 5; i++) {
  console.log(i);
}

// contoh program while
console.log("Perulangan menghitung bilangan dari 1 hingga 5");
var i = 1;
while (i <= 5) {
  console.log(i);
  i++;
}

// contoh program do while
console.log("Perulangan menghitung bilangan dari 1 hingga 5");
var i = 1;
do {
  console.log(i);
  i++;
} while (i <= 5);

// contoh program function

// Fungsi sederhana untuk menghitung jumlah dua angka
function tambah(a, b) {
    return a + b;
  }
  
  var hasilPenambahan = tambah(5, 3);
  console.log("Hasil penambahan: " + hasilPenambahan);
  
  // Fungsi untuk menggabungkan dua string
  function gabungString(string1, string2) {
    return string1 + " " + string2;
  }
  
  var hasilGabungan = gabungString("Hello", "World!");
  console.log("Hasil gabungan string: " + hasilGabungan);
  
  // Fungsi untuk menghitung luas segitiga
  function hitungLuasSegitiga(alas, tinggi) {
    return (alas * tinggi) / 2;
  }
  
  var luasSegitiga = hitungLuasSegitiga(6, 8);
  console.log("Luas segitiga: " + luasSegitiga);
  