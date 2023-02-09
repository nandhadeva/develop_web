const passwordInput = document.getElementById("pass");
const loveLink = document.getElementById("love");

loveLink.addEventListener("click", function (event) {
  event.preventDefault();

  const password = passwordInput.value;

  if (password === "deva" || password === "subash") {
    window.location.href = "https://projectnn.vercel.app";
  } else {
    alert("Incorrect password.");
  }
});
