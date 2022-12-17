import "./style.css";
import * as QRCode from "qrcode";

const form = document.querySelector("#generate-form");
const qr = document.querySelector("#qrcode");

const onGenerateSubmit = (e) => {
  e.preventDefault();

  clearUI();

  const url = document.querySelector("#url").value;
  const size = document.querySelector("#size").value;

  if (url == "") {
    alert("Please enter a valid url");
  } else {
    showSpinner();

    setTimeout(() => {
      hideSpinner();
      generateQR(url);
    }, 1000);
  }
};

const generateQR = async (text) => {
  try {
    const code = await QRCode.toDataURL(text);
    const img = document.createElement("img");
    img.src = code;
    qr.appendChild(img);
  } catch (err) {
    console.error(err);
  }
};

const showSpinner = () => {
  document.querySelector("#spinner").style.display = "block";
};

const hideSpinner = () => {
  document.querySelector("#spinner").style.display = "none";
};
hideSpinner();

const clearUI = () => {
  qr.innerHTML = "";
};

form.addEventListener("submit", onGenerateSubmit);
