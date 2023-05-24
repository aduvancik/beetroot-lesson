window.scrollTo({ //перезагрузка сторінки
  top: 0,
  behavior: 'smooth'
});
document.body.style.overflow = 'hidden';

new Swiper(".image-slider", { //перший слайдер
pagination: {
  el: ".swiper-pagination",
  clickable: true,
},
autoplay: {
  delay: 3500,
  stopOnLastSlide: false,
  disableOnInteraction: false,
},
speed: 1600,
effect: "fade",
fadeEffect: {
  crossFade: true,
},
});

new Swiper(".products", { //другий слайдер
  slidesPerGroup: 4,
  pagination: {
    el: ".products-pagination",
    clickable: true,
  },
  speed: 600,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  slidesPerView: 5,
  spaceBetween: 40,
  loop: true,
  loopedSlides: 3,
  initialSlides: 10,
  centeredSlides: true,
  breakpoints: {
    1000: {
      slidesPerView: 5,
      spaceBetween: 40
    },
    700: {
      slidesPerView: 3.2,
      spaceBetween: 70
    },
    540: {
      slidesPerView: 2.5,
      spaceBetween: 20
    },
    0: {
      slidesPerView: 1,
      spaceBetween: 20
    },
  }
  });

  new Swiper(".partners", { // третій слайдер
    
    pagination: {
      el: ".partners-pagination",
      clickable: true,
    },
    speed: 300,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    loop: true,
    breakpoints: {
      960: {
        slidesPerView: 9,
        spaceBetween: 50
      },
      800: {
        slidesPerView: 6,
        spaceBetween: 50
      },
      540: {
        slidesPerView: 3,
        spaceBetween: 140
      },
      320: {
        slidesPerView: 2,
        spaceBetween: 70,
        slidesPerGroup: 6,
      },
    }
    });
    document.body.style.overflow = 'hidden';
function hidePreloader() {
  const preloader = document.querySelector(".pl-wrapper");
  preloader.style.display = 'none';
  document.body.style.overflow = 'auto';
}

window.addEventListener("load", function() {//сховати preloader
  setTimeout(hidePreloader, 1000);
});

const scrollLinks = document.querySelectorAll(".header__list li")[3];
const footer = document.querySelector(".footer")
console.log(scrollLinks);

scrollLinks.addEventListener('click', function(e) { //клік на contacts
    e.preventDefault();
    footer.scrollIntoView({
      behavior: 'smooth',
      block: 'end'
    });
  });


const statusElements = document.querySelectorAll('.products__status');

statusElements.forEach(function(element) { //другий слайдер
  element.addEventListener('click', function(event) {
    if (event.target.tagName === 'A') {
      event.preventDefault(); 
      const link = event.target;
      link.textContent = 'sold';
      link.style.color = '#000';
    }

    this.style.backgroundColor = '#F8F1EA';
  });
});

const burgerMenu = document.querySelector(".header__burger");
const headerList = document.querySelector(".header__list");

burgerMenu.addEventListener('click', function() { //бургер меню
  headerList.classList.toggle("header__list-active");
  burgerMenu.classList.toggle("header__burger-active");
})






