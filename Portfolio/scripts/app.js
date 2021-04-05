const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll(".nav-links li");
  const links = document.querySelectorAll(".nav-links a");

  //Toggle
  burger.addEventListener("click", () => {
    nav.classList.toggle("nav-active");
    

    navLinks.forEach((link, index) => {
      link.addEventListener("click", () => {
        nav.classList.toggle("nav-deactive");
      });
      if (link.style.animation) {
        link.style.animation = ``;
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${
          index / 7 + 0.2
        }s`;
      }
    });

    //burger animation
    burger.classList.toggle("toggle");
  });
};

navSlide();

$(document).ready(function () {
  $("a").on("click", function (event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top - 100,
        },
        10
      );
    }
  });
});
