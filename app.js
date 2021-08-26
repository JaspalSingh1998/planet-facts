const options = document.querySelectorAll(".option");
const images = document.querySelectorAll(".planet_img");
const descriptions = document.querySelectorAll(".description");

options.forEach((option, i) => {
  option.addEventListener("click", () => handleOptionToggle(event, i), false);
});

function handleOptionToggle(event, i) {
  document.querySelector(".option-active").classList.remove("option-active");
  event.target.classList.add("option-active");
  handlePlanetImages(i);
  handlePlanetDescription(i);
}

function handlePlanetImages(i) {
  document.querySelector(".img-show").classList.remove("img-show");

  images[i].classList.add("img-show");
  if (i === 2) {
    document.querySelector(".surface-geology").classList.add("img-show");
  } else {
    document.querySelector(".surface-geology").classList.remove("img-show");
  }
}

function handlePlanetDescription(i) {
  document
    .querySelector(".show-description")
    .classList.remove("show-description");
  descriptions[i].classList.add("show-description");
}
