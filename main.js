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

      setTimeout(() => {
        const saveURL = qr.querySelector("img").src;
        createSaveButton(saveURL);
      }, 50);
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
  const saveLink = document.querySelector("#save-link");
  if (saveLink) {
    saveLink.remove();
  }
};

const createSaveButton = (saveurl) => {
  const link = document.createElement("a");
  link.id = "save-link";
  link.classList =
    "bg-red-500 hover:bg-red-700 text-white font-bold py-2 rounded w-1/3 m-auto my-5";
  link.href = saveurl;
  link.download = "qrcode";
  link.innerText = "Save Image";
  document.querySelector("#generated").appendChild(link);
};

form.addEventListener("submit", onGenerateSubmit);
