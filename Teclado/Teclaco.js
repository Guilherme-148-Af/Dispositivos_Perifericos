const topButton = document.getElementById("topButton");

window.onscroll = function () {
  topButton.style.display = window.scrollY > 250 ? "block" : "none";
};

topButton.onclick = function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
};
