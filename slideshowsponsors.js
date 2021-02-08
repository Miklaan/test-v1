const slideshow = document.querySelector(".sponsors-logo");

setInterval(() => {
  const firstIcon = slideshow.firstElementChild;

  firstIcon.classList.add("fade-out");

  setTimeout(() => {

    slideshow.removeChild(firstIcon);

    slideshow.appendChild(firstIcon)
    firstIcon.classList.remove("fade-out");
  }, 450);
}, 3000);
