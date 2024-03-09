"use strict";

// Below is the code for my form validation.

const form = document.getElementById("contactForm");

// validates the form name
form.addEventListener("submit", (e) => {
  if (form.name.value < 5) {
    e.preventDefault();
    alert("Not a valid name");
  }
  // validates the phone number
  const phoneRegex = /^(\()?\d{3}(\))?(-|\s)?\d{3}(-|\s)\d{4}$/;
  if (!phoneRegex.test(form.phone.value)) {
    e.preventDefault();
    alert("Not a valid phone number");
  }
  // validates the email address
  const emailregix =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!emailregix.test(form.email.value)) {
    e.preventDefault();
    alert("Not a valid email");
  }
  // validates the message
  if (form.message.value < 5) {
    e.preventDefault();
    alert("Not a valid message");
  }
});

// Below is the code for the footer to update the year of the copyright.
document
  .getElementById("copyright")
  .appendChild(document.createTextNode(new Date().getFullYear()));
