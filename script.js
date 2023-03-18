const passwordInput = document.getElementById("pass");
const loveLink = document.getElementById("love");

loveLink.addEventListener("click", function (event) {
  event.preventDefault();

  const password = passwordInput.value;

  if (password === "deva_" || password === "subash") {
    window.location.href = "https://tenor.com/en-IN/view/gpmuthu-sethapayale-nakku-swearing-tiktok-gif-20326152";
  } else {
    alert("Incorrect password.");
  }
});
