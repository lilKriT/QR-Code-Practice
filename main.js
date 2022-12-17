import "./style.css";

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

    setTimeout(() => {
      hideSpinner();
    }, 1000);
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
