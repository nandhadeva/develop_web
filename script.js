const passwordInput = document.getElementById("pass");
const loveLink = document.getElementById("love");

loveLink.addEventListener("click", function (event) {
  event.preventDefault();

  const password = passwordInput.value;

  if (password === "qwertyuiop") {
    window.location.href = "https://media.tenor.com/UbqTvZhnxpEAAAAd/sigma.gif";
  } else {
    alert("Incorrect password.");
  }
});
