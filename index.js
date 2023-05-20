document.querySelector("#image-input").onchange = function() {
  document.querySelector("form p").style.display = "block";
}

let loading = document.querySelector("form div");

const form = document.querySelector("#image-form");
const resultDiv = document.querySelector("#result");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  loading.style.display = "block";
  const formData = new FormData();
  formData.append("image", form.elements.image.files[0]);
  try {
    const res = await fetch("https://excited-bee-buckle.cyclic.app/ocr", {
      method: "POST",
      body: formData,
    });
    loading.style.display = "none";
    const data = await res.json();
    console.log(data);
    console.log(data.ocrResult.split("\n"));
    resultDiv.textContent = data.ocrResult;
  } catch (err) {
    console.error(err);
    resultDiv.textContent = "Error occurred";
  }
});