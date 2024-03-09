"use strict";

document
  .getElementById("copyright")
  .appendChild(document.createTextNode(new Date().getFullYear()));

// const BASE_URL = "https://my-proxy-server-rkxw.onrender.com";

fetch("https://my-proxy-server-rkxw.onrender.com")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });
