//contoh program javascript menggunakan if,else
let score = 99;

if (score >= 95) {
  console.log("Nilai Saya A");
} else if (score >= 85) {
  console.log("Nilai Saya B");
} else if (score >= 75) {
  console.log("Nilai Saya C");
} else {
  console.log("Nilai Saya D");
}

// Nested if
let temperature = 30;

if (temperature > 30) {
  console.log("Cuaca Panas");
} else {
  if (temperature > 20) {
    console.log("Cuaca Dingin");
  } else {
    console.log("Cuaca Sejuk");
  }
}

// Switch case
let day = "Senin";
let schedule;

switch (day) {
  case "Senin":
    schedule = "Rapat jam 9 Pagi";
    break;
  case "Selasa":
    schedule = "Jogging jam 4 sore";
    break;
  case "Rabu":
    schedule = "Makan siang bersama teman pada pukul 12.30";
    break;
  case "Kamis":
    schedule = "Tidur jam 9 Malam";
    break;
  case "Jumat":
    schedule = "Berenang jam 2 Siang";
    break;
  default:
    schedule = "No specific schedule for the day";
}

console.log(`Schedule for ${day}: ${schedule}`);

// For Statment
const fruits = ["Banana", "Apple", "Lychee", "Watermelon"];

for (let i = 0; i < fruits.length; i++) {
  console.log(`Buah ke-${i + 1}: ${fruits[i]}`);
}

// While
let count = 96;

while (count <= 100) {
  console.log(`Iterasi ke-${count}`);
  count++;
}

// Do While
let number = 90;

do {
  console.log(`Nomor: ${number}`);
  number--;
} while (number >= 86);

// Function
function add(a, b) {
  return a + b;
}

const sum = add(45, 99);
console.log("Hasil penjumlahan:", sum);
