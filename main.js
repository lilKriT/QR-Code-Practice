import "./style.css";
import * as QRCode from "qrcode";

const form = document.querySelector("#generate-form");
const qr = document.querySelector("#qrcode");

const onGenerateSubmit = (e) => {
  e.preventDefault();

  const url = document.querySelector("#url").value;
  const size = document.querySelector("#size").value;

  if (url == "") {
    alert("Please enter a valid url");
  } else {
    showSpinner();
    // console.log(url);

    setTimeout(() => {
      hideSpinner();

      generateQR(url);
    }, 1000);
  }
};

const generateQR = async (text) => {
  try {
    // console.log(await QRCode.toDataURL(text));
    const code = await QRCode.toDataURL(text);
    console.log(code);
    // QRCode.toCanvas(qr, "abc", (err) => console.log(err));
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

form.addEventListener("submit", onGenerateSubmit);
