const options = document.querySelectorAll(".option");

options.forEach((option) => {
  option.addEventListener("click", handleOptionToggle, false);
});

function handleOptionToggle(event) {
  document.querySelector(".option-active").classList.remove("option-active");
  event.target.classList.add("option-active");
  // document.querySelector(".img-show").classList.remove("img-show");
}
