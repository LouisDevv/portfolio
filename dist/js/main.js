const navToggle = document.querySelector("#checkbox");
const primaryNav = document.querySelector(".primary-navigation");
const scrollDown = document.querySelector(".scroll");

// Navigation

navToggle.addEventListener("change", () => {
  primaryNav.toggleAttribute("data-visible");
  document.body.classList.toggle("no-scroll");
});

let links = document.getElementsByClassName("nav-links");

for (var i = 0; i < links.length; i++) {
  links[i].addEventListener("click", myMenu, false);
}

function myMenu() {
  primaryNav.toggleAttribute("data-visible");
  navToggle.checked = false;
}

// Scrolls and Animation

scrollDown.addEventListener("click", () => {
  let pageHeight = window.innerHeight;
  window.scrollBy({ top: pageHeight, behavior: "smooth" });
});

window.addEventListener("scroll", () => {
  if (window.pageYOffset < 20) {
    scrollDown.style.height = "30px";
    scrollDown.style.opacity = 1;
  } else {
    scrollDown.style.opacity = 0;
    scrollDown.style.height = "0";
  }
});

const scrollElements = document.querySelectorAll(".js-scroll");

const elementInView = (el, dividend = 1) => {
  const elementTop = el.getBoundingClientRect().top;

  return (
    elementTop <=
    (window.innerHeight || document.documentElement.clientHeight) / dividend
  );
};

const elementOutofView = (el) => {
  const elementTop = el.getBoundingClientRect().top;

  return (
    elementTop > (window.innerHeight || document.documentElement.clientHeight)
  );
};

const displayScrollElement = (element) => {
  element.classList.add("scrolled");
};

const handleScrollAnimation = () => {
  scrollElements.forEach((el) => {
    if (elementInView(el, 1.25)) {
      displayScrollElement(el);
    }
  });
};

window.addEventListener("scroll", () => {
  handleScrollAnimation();
});
