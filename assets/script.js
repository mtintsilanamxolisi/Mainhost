/*================Sticky Navigation Bar===============*/



/*================Navigation Bar Open/Close Toggle===============*/


/*================Close Navigation Bar on Link Click===============*/



/*================Ourclients Swiper initialization and configuration===============*/
var swiper = new Swiper(".mySwiper", {
    cssMode: true,

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
    },
    mousewheel: true,
    keyboard: true,
  });

/*================Scroll Reveal Animations===============*/

const martScroll = ScrollReveal({
  origin: 'top',
  distance: '80px',
  duration: 2000,
  reset: true
})

// scroll Home

martScroll.reveal('.home__data-title',{})
martScroll.reveal('.home__data-desc',{})
martScroll.reveal('.home__btn',{})
martScroll.reveal('.home__image',{})


//scroll About

martScroll.reveal('.about__image',{})
martScroll.reveal('.about__data',{})
martScroll.reveal('.about__data-desc',{})


//why choose us

martScroll.reveal('.whychooseus__title',{})
martScroll.reveal('.whychooseus__data',{})
martScroll.reveal('.whychooseus__card',{})
martScroll.reveal('.whychooseus__card-title',{})
martScroll.reveal('.whychooseus__tag  ',{})
martScroll.reveal('.whychooseus__card-desc',{})


//services

martScroll.reveal('.services__tag',{})
martScroll.reveal('.services__title',{})
martScroll.reveal('.services__data',{})
martScroll.reveal('.services__single',{})
martScroll.reveal('.services-desc',{})
martScroll.reveal('.btn-primary',{})
martScroll.reveal('.btn-secondary',{})


//services cards

martScroll.reveal('.sc__container',{})
martScroll.reveal('.scard',{})
martScroll.reveal('.imgbx',{})
martScroll.reveal('.scard__content',{})


//plans & pricing

martScroll.reveal('.ourclients__tag',{})
martScroll.reveal('.ourclients__container',{})
martScroll.reveal('.pricingcontainer',{})
martScroll.reveal('.webheading',{})
martScroll.reveal('.btn_wrap',{})
martScroll.reveal('.toogletag',{})
martScroll.reveal('.switch',{})
martScroll.reveal('.content',{})
martScroll.reveal('.h3heading',{})
martScroll.reveal('.scard__content',{})
martScroll.reveal('.pl__desc',{})



//our clients


//contact


//footer

