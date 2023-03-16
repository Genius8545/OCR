// const dotenv = require("dotenv");
// dotenv.config({ path: "./config.env" });

const form = document.querySelector("#image-form");
const resultDiv = document.querySelector("#result");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const formData = new FormData();
  formData.append("image", form.elements.image.files[0]);
  try {
    const res = await fetch("https://excited-bee-buckle.cyclic.app/ocr", {
      method: "POST",
      body: formData,
      headers: {
        'x-api-key': '52fe4821-c727-4a1f-ab41-8742117e73d4',
      },
    });
    const data = await res.json();
    console.log(data);
    resultDiv.textContent = data.ocrResult;
  } catch (err) {
    console.error(err);
    resultDiv.textContent = "Error occurred";
  }
});
