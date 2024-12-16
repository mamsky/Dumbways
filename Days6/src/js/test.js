// let arr = [];

// // fungsi untuk memasukkan data ke dalam array
// function addName(e) {
//   e.preventDefault();

//   let inputanNama = document.getElementById("input-nama").value;

//   let isiDidalamObjek = {
//     author: "Kucing",
//     isi_inputan: inputanNama,
//   };

//   arr.push(isiDidalamObjek);

//   renderNama();
// }

// function renderNama() {
//   let tampilkanNama = document.getElementById("isi-dari-input");
//   tampilkanNama.innerHTML = namaPertama();

//   for (let i = 0; i < arr.length; i++) {
//     tampilkanNama.innerHTML += `
//         <p>Author ke ${i}:${arr[i].author}  </p>
//         <p>isiInputan ke ${i}:${arr[i].isi_inputan}  </p>
//     `;
//   }
// }

// // pertama kali di render
// function namaPertama() {
//   return ``;
// }

// function testClick() {
//   testRender();
// }

// function testRender() {
//   testIsiRender2();
// }

// function testIsiRender2() {
//   console.log("test render 2");
// }
