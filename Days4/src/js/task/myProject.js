var arr = [];
let lcProject = JSON.parse(localStorage.getItem("project") || "[]");
if (lcProject != []) {
  arr.push(...lcProject);
} else {
  submitForm();
}
const submitForm = (e) => {
  e.preventDefault();

  let name = document.getElementById("name").value;
  let startDate = document.getElementById("startDate").value;
  let endDate = document.getElementById("endDate").value;
  let description = document.getElementById("description").value;

  let arrCheckbox = [];
  let checkBox = document.querySelectorAll("input[type=checkbox]:checked");
  for (let i = 0; i < checkBox.length; i++) {
    arrCheckbox.push(checkBox[i].value);
  }

  let imageUpload = document.getElementById("upload-images");

  let imagesInput = document.querySelector(`input[type=file]`);
  console.log();

  if (name == "") {
    return alert("name input Tidak Boleh Kosong");
  } else if (startDate == "") {
    return alert("Start date input Tidak Boleh Kosong");
  } else if (endDate == "") {
    return alert("End Date input Tidak Boleh Kosong");
  } else if (description == "") {
    return alert("description input Tidak Boleh Kosong");
  } else if (description.length <= 100) {
    return alert("description input harus 100 Huruf");
  } else if (imageUpload.files.length == 0) {
    return alert("Images input Tidak Boleh Kosong");
  }

  //   if (description.length <= 80) {
  //     return alert("description input minimal harus 50 huruf");
  //   }
  let images = URL.createObjectURL(imageUpload.files[0]);
  console.log(images.name);

  let res = {
    author: name,
    startDate: startDate,
    endDate: endDate,
    description: description,
    checBox: arrCheckbox,
    images: imagesInput.files[0].name,
  };
  arr.push(res);
  localStorage.setItem("project", JSON.stringify(arr));
  alert("Berhasil");
};

// console.log("localStorage", lcProject.length);

const getStorage = () => {
  let projectList = document.getElementById("listProject");

  for (let i = 0; i < lcProject.length; i++) {
    console.log(lcProject[i].checBox[0]);

    projectList.innerHTML += `
        <div id=${i} class="card">
        <img src="../../assets/images/${lcProject[i].images}" alt="" class="img-hero" />
        <h2>${lcProject[i].author}</h2>
        <p>${lcProject[i].startDate} | Papoy </p>
        <p>
        ${lcProject[i].description}
        </p>
        <p>${lcProject[i].checBox[0]}</p>
        <div class="btn-section-two">
        <button class="btn-edit">edit</button>
        <button class="btn-delete">delete</button>
        </div>
        </div>
        </div>
        `;
  }
};

getStorage();
