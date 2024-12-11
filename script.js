const carouselBtns = document.querySelectorAll(".carosuel__btn");
const carouselContent = document.querySelector(".carousel__content");

carouselBtns.forEach((item, idx) => {
  item.addEventListener("click", () => {
    carouselContent.style.transform = `translateX(-${idx * 100}%)`;

    carouselBtns.forEach((item) => {
      item.classList.remove("active");
    });

    item.classList.add("active");
  });
});
