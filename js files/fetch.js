"use strict";

// const BASE_URL = "https://my-proxy-server-rkxw.onrender.com";

//this fetch grabs the backend data and wakes up the server to get the data from the backend if it's not already awake.
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

  