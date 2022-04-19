// MENU SHOW //
const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')
const links = document.querySelectorAll('nav ul li a')

for (const element of toggle) {
  element.addEventListener('click', function () {
    nav.classList.toggle('show')
  })
}
for (const link of links) {
  link.addEventListener('click', function () {
    nav.classList.remove('show')
  })
}

const menu = document.querySelector('.menu')
window.addEventListener('scroll', function () {
  if (this.window.scrollY >= navHeight) {
    menu.classList.add('scroll')
  } else {
    menu.classList.remove('scroll')
  }
})

const sections = document.querySelectorAll('main section[id]')
function activateMenuAtCurrentSection() {
  const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4

  for (const section of sections) {
    const sectionTop = section.offsetTop
    const sectionHeight = section.offsetHeight
    const sectionId = section.getAttribute('id')

    const checkpointStart = checkpoint >= sectionTop
    const checkpointEnd = checkpoint <= sectionTop + sectionHeight

    if (checkpointStart && checkpointEnd) {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.add('active')
    } else {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.remove('active')
    }
  }
}

// HEADER //
const header = document.querySelector('#header')
const navHeight = header.offsetHeight

function changeHeaderWhenScroll() {
  if (window.scrollY >= navHeight) {
    // scroll é maior que a altura do header
    header.classList.add('scroll')
  } else {
    // menor que a altura do header
    header.classList.remove('scroll')
  }
}

// SWIPER-TESTIMONIALS //
const swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true
  },
  keyboard: true,
  breakpoints: {
    767: {
      slidesPerView: 1,
      setWrapperSize: true
    },
    1024: {
      slidesPerView: 2,
      setWrapperSize: true
    },
    1400: {
      slidesPerView: 3,
      setWrapperSize: true
    }
  }
})

// SWIPER-TESTIMONIALS //
const swiperGallery = new Swiper('.swiper-container-gallery', {
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true
  },
  grabCursor: true,
  simulateTouch: true,
  keyboard: true
})

// SCROLLREVEAL PAGE //
const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '20px',
  duration: 1000,
  reset: false
})

scrollReveal.reveal(
  `#home .image, #home .text,
    #about .image, #about .text,
    #services header, #services .card, #gallery header, #gallery .container,
    #testimonials header, #testimonials .testimonials, #common-questions .header-common-questions, #common-questions .accordion,
    #contact .text, #contact .links, #contact form, footer .brand, footer .social
    `,
  { interval: 10 }
)

// BACK TO TOP BUTTON //
const backToTopButton = document.querySelector('.back-to-top')

function backToTop() {
  if (window.scrollY >= 560) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}

// COLLAPSE COMMON QUESTIONS //
const accordion = document.querySelectorAll('.accordion')
accordion.forEach(acc => {
  acc.addEventListener('click', event => {
    const currentlyActive = document.querySelector('.accordion.active')
    if (currentlyActive && currentlyActive !== acc) {
      currentlyActive.classList.toggle('active')
      currentlyActive.nextElementSibling.style.maxHeight = 0
    }
    acc.classList.toggle('active')
    const panel = acc.nextElementSibling
    if (acc.classList.contains('active')) {
      panel.style.maxHeight = panel.scrollHeight + 'px'
    } else {
      panel.style.maxHeight = 0
    }
  })
})

// FUNCTIONS SCROLL //
window.addEventListener('scroll', function () {
  changeHeaderWhenScroll()
  backToTop()
  activateMenuAtCurrentSection()
})
