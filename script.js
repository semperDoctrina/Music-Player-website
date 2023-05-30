document.addEventListener("DOMContentLoaded", function() {
    const carousel = document.querySelector(".carousel");
    let currentPosition = 0;
    let interval = setInterval(nextSlide, 3000);
  
    function nextSlide() {
      currentPosition -= 100;
      if (currentPosition <= -carousel.offsetWidth) {
        currentPosition = 0;
      }
      carousel.style.transform = `translateX(${currentPosition}px)`;
    }
  
    const prevButton = document.querySelector(".prev-button");
    prevButton.addEventListener("click", previousSlide);
  
    function previousSlide() {
      currentPosition += 100;
      if (currentPosition > 0) {
        currentPosition = -(carousel.offsetWidth - 100);
      }
      carousel.style.transform = `translateX(${currentPosition}px)`;
    }
  
    const controlButtons = document.querySelectorAll(".control-button");
    controlButtons.forEach(button => {
      button.addEventListener("click", () => {
        const slideIndex = parseInt(button.getAttribute("data-slide-index"));
        goToSlide(slideIndex);
      });
    });
  
    function goToSlide(slideIndex) {
      currentPosition = -slideIndex * 100;
      carousel.style.transform = `translateX(${currentPosition}%)`;
    }
  
    document.addEventListener("keydown", function(e) {
      if (e.key === "ArrowLeft") {
        previousSlide();
      } else if (e.key === "ArrowRight") {
        nextSlide();
      }
    });
  
    carousel.addEventListener("mouseenter", function() {
      clearInterval(interval);
    });
  
    carousel.addEventListener("mouseleave", function() {
      interval = setInterval(nextSlide, 3000);
    });
  });
  