// Ini File Javascript

console.log('Hello World');

function calculateBmi() {
    let resultBmi = document.getElementById("result-bmi");
    let weight = document.getElementById('input-berat-badan').value;
    let height = document.getElementById('input-tinggi-badan').value;
    let age = document.getElementById('input-usia').value;

    if (weight != '' && height != '' && age != '') {
        let bmi = (weight / ((height / 100) ** 2)).toFixed(2);
        resultBmi.textContent = bmi;
    } else {
        alert('Please fill in all fields');
    }
   

}

// Jenis Kelamin
let gender = document.querySelector('input[name="gender"]:checked').value;
console.log("Jenis Kelamin:", gender);

// hitung BMI
function calculateBMI() { // Ganti nama fungsi
    console.log("Fungsi calculateBMI dijalankan!"); 

    let berat = parseFloat(document.getElementById("input-berat-badan").value);
    let tinggi = parseFloat(document.getElementById("input-tinggi-badan").value) / 100; // Ubah ke meter
    let usia = parseFloat(document.getElementById("input-usia").value);


    if (!berat || !tinggi || !usia) {
        alert("Please fill in all fields");
        return;
    }
    
    // Hitung BMI
    let bmi = berat / (tinggi * tinggi);
    let kategori = "";

    // Menentukan kategori BMI
    if (bmi < 18.5) {
        kategori = "Kurus";
        penjelasan = "Anda berada dalam kategori kekurangan berat badan. Untuk meningkatkan berat badan Anda, cobalah untuk meningkatkan asupan kalori dan melakukan latihan yang menambah massa otot. Semangat, yaa!";
    } else if (bmi >= 18.5 && bmi < 25) {
        kategori = "Normal";
        penjelasan = "Berat badan Anda berada dalam kategori normal. Untuk mempertahankan berat badan ideal, jaga pola makan yang sehat dan rutin berolahraga. Semangat, yaa!";
    } else if (bmi >= 25 && bmi < 30) {
        kategori = "Overweight";
        penjelasan = "Anda berada dalam kategori overweight. Jika BMI Anda berada dalam kategori ini maka Anda dianjurkan untuk menurunkan berat badan hingga batas normal. Cara terbaik untuk menurunkan berat badan adalah dengan mengatur kalori makanan yang dikonsumsi dan berolahraga. Semangat, yaa! ";
    } else {
        kategori = "Obesitas";
        penjelasan = "Anda berada dalam kategori obesitas. Disarankan untuk segera berkonsultasi dengan dokter atau ahli gizi untuk menentukan cara yang aman dan efektif untuk menurunkan berat badan. Semangat, yaa!";
    }

    // Menampilkan hasil di halaman
    document.getElementById("result-bmi").textContent = bmi.toFixed(2);
    document.getElementById("bmi-category").textContent = `Kategori: ${kategori}`;
    document.getElementById("bmi-explanation").textContent = penjelasan;

    console.log("Kategori BMI:", kategori); // Debugging
} 