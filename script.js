let tanya = true;

while ( tanya ) {
    // Pemberitahuan / Syarat Bermain
    alert("Masukkan character dengan huruf kecil")

    // Menangkap Pilihan Player
    let user = prompt("Silahkan pilih : Gajah, Semut, orang");


    // Menangkap Pilihan Computer
    // Membangkitkan / generate bilangan random 
    let comp = Math.random();

    if (comp < 0.34) {
        comp = "gajah";
    } else if (comp >= 0.34 && comp < 0.67) {
        comp = "orang";
    } else {
        comp = "semut";
    }

    let hasil = "";
    // Rules 
    if (user == comp) {
        hasil = "SERI!";
    } else if (user == "gajah") {
        // if(comp == "Orang"){
        //     hasil = "MENANG!";
        // }else{
        //     hasil == "KALAH!";
        // }
        hasil = (comp == "orang") ? "MENANG!" : "KALAH!";
    } else if (user == "orang") {
        // if(comp == "Gajah"){
        //     hasil = "KALAH!";
        // }else{
        //     hasil = "MENANG"
        // }
        hasil = (comp == "gajah") ? "KALAH!" : "MENANG!";
    } else if (user == "semut") {
        hasil = (comp == "orang") ? "KALAH!" : "MENANG!";
    } else {
        hasil = "Memasukkan Pilihan Yang Salah!!"
    }

    // Tampilkan hasilnya 
    alert("Kamu memilih " + user + " dan Komputer memilih : " + comp + "\nMaka hasilnya kamu " + hasil)


    tanya = confirm("Mau Bermain Lagi?")
}

alert("Terima Kasih Sudah Bermain")