const passwordInput = document.getElementById("pass");
const loveLink = document.getElementById("love");

loveLink.addEventListener("click", function (event) {
  event.preventDefault();

  const password = passwordInput.value;

  if (password === "iloveyou" || password === "subash") {
    window.location.href = "www.google.com";
  } else {
    alert("Incorrect password.");
  }
});
