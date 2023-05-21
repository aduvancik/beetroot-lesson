// const screenWidth = window.innerWidth;
// let amountPartnersSwipe = 9;
// if(screenWidth < 1300) {
//   amountPartnersSwipe = 3;
// } 

window.scrollTo({
  top: 0,
  behavior: 'smooth'
});
document.body.style.overflow = 'hidden';

new Swiper(".image-slider", {
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

new Swiper(".products", {
  speed: 600,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  slidesPerView: 5,
  spaceBetween: 50,
  loop: true,
  loopedSlides: 3,
  initialSlides: 10,
  centeredSlides: true,
  breakpoints: {
    // 960: {
    //   slidesPerView: 4.6,
    //   spaceBetween: 20
    // },
    // 800: {
    //   slidesPerView: 3.2,
    //   spaceBetween: 70
    // },
    // 780: {
    //   slidesPerView: 4,
    //   spaceBetween: 10
    // },
    // 540: {
    //   slidesPerView: 2.6,
    //   spaceBetween: 90
    // },
    // 320: {
    //   slidesPerView: 1,
    //   spaceBetween: 20
    // },
  }
  });

  new Swiper(".partners", {
    speed: 300,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    // slidesPerView: 9, 
    // spaceBetween: 50,
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
        spaceBetween: 70
      },
    }
    });
    document.body.style.overflow = 'hidden';
function hidePreloader() {
  const preloader = document.querySelector(".pl-wrapper");
  preloader.style.display = 'none';
  document.body.style.overflow = 'auto';
}

window.addEventListener("load", function() {
  setTimeout(hidePreloader, 1000);
});

const scrollLinks = document.querySelectorAll(".header__list li")[3];
const footer = document.querySelector(".footer")
console.log(scrollLinks);

scrollLinks.addEventListener('click', function(e) {
    e.preventDefault();
    footer.scrollIntoView({
      behavior: 'smooth',
      block: 'end'
    });
  });


const statusElements = document.querySelectorAll('.products__status');

statusElements.forEach(function(element) {
  element.addEventListener('click', function(event) {
    if (event.target.tagName === 'A') {
      event.preventDefault(); 
      const link = event.target;
      link.textContent = 'sold';
    }

    this.style.backgroundColor = '#F8F1EA';
  });
});







