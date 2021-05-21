// Open source from: https://codepen.io/pascallllacroix/pen/MWpeyKr
document.querySelectorAll(".box-gold").forEach(function (box) {
  box.style.height = box.offsetWidth / 1.4 + "px";
});

document.querySelectorAll(".carousel").forEach(function (carousel) {
  const itemsCount = carousel.querySelectorAll(".carousel-item").length;

  let previousItem, activeItem, nextItem;

  if (carousel.classList.contains("carousel-arrows")) {
    addArrows();
  }

  if (carousel.classList.contains("carousel-nav")) {
    addButtons();
  }
  
  showSlide(0);

  function addArrows() {
    const arrowLeft = document.createElement("a");
    arrowLeft.setAttribute("href", "#");
    arrowLeft.setAttribute("class", "arrow arrow-left");
    arrowLeft.innerText = "❮";
    carousel.appendChild(arrowLeft);
    arrowLeft.onclick = function (e) {
      e.preventDefault();
      showSlide(activeItem - 1);
    };

    const arrowRight = document.createElement("a");
    arrowRight.setAttribute("href", "#");
    arrowRight.setAttribute("class", "arrow arrow-right");
    arrowRight.innerText = "❯";
    carousel.appendChild(arrowRight);
    arrowRight.onclick = function (e) {
      e.preventDefault();
      showSlide(activeItem + 1);
    };
  }

  function addButtons() {
    const navigation = document.createElement("div");
    navigation.setAttribute("class", "carousel-navigation");
    carousel.append(navigation);

    for (let i = 0; i < itemsCount; i++) {
      const btn = document.createElement("a");
      btn.setAttribute("href", "#");
      btn.setAttribute("class", "carousel-btn");
      navigation.append(btn);
      btn.onclick = function (e) {
        e.preventDefault();
        showSlide(i);
      };
    }
  }

  function showSlide(index) {
    index = Number(index);
    if (index >= itemsCount) {
      activeItem = 0;
    } else if (index < 0) {
      activeItem = itemsCount - 1;
    } else {
      activeItem = index;
    }
    nextItem = activeItem + 1 >= itemsCount ? 0 : activeItem + 1;
    previousItem = activeItem === 0 ? itemsCount - 1 : activeItem - 1;
    removeClasses();
    addClasses();
  }

  function removeClasses() {
    carousel.querySelectorAll(".carousel-item").forEach((item) => {
      item.classList.remove("previous");
      item.classList.remove("active");
      item.classList.remove("next");
    });
    carousel.querySelectorAll(".carousel-btn").forEach((btn) => {
      btn.classList.remove("active");
    });
  }

  function addClasses() {
    carousel
      .querySelectorAll(".carousel-item")
      [activeItem].classList.add("active");
    carousel.querySelectorAll(".carousel-item")[nextItem].classList.add("next");
    carousel
      .querySelectorAll(".carousel-item")
      [previousItem].classList.add("previous");
    carousel
      .querySelectorAll(".carousel-btn")
      [activeItem].classList.add("active");
  }
});