
/*header bottom play buttons*/
document.querySelector('.header-bottom__playing-later').addEventListener('click', function () {
  document.querySelector('.header-bottom__playing-later .passive').classList.toggle('btn-active');
});

document.querySelector('.header-bottom__playing-now').addEventListener('click', function () {
  document.querySelector('.header-bottom__playing-now .passive').classList.toggle('btn-active');
});



/*кнопка play-podcasts*/
const buttons = document.querySelectorAll('.podcasts-svg__button')

for (let button of buttons) {
  button.addEventListener("click", e => {
    let activeBtn = document.querySelector('button.pause')
    if (activeBtn && activeBtn !== e.target) {
      activeBtn.classList.remove('pause')
    }
    button.classList.toggle('pause')
  });
}


/*кнопка Еще подкасты*/
document.querySelector('.podcasts-more__button').addEventListener('click', function () {
  var elements = document.getElementsByClassName('podcasts-item');
  for (var i = 0; i < elements.length; i++) {
    elements[i].classList.toggle("podcasts-item--active");
  }
});

document.querySelector('.podcasts-more__button').addEventListener('click', function () {
  document.querySelector('.podcasts-more__button').classList.toggle('podcasts-more__button--passive')
});



/*selects*/
const element = document.querySelector('select');
const choices = new Choices(element, {
  searchEnabled: false,
  itemSelectText: '',
  placeholderValue: 'Дмитрий Гутенберг',
});



/*accordion*/
$(".accordion-list").accordion({
  icons: false,
  heightStyle: "content",
  collapsible: true,
  active: true,
});



/*tabs*/
document.querySelectorAll('.tabs-nav__btn').forEach(function (tabsBtn) {
  tabsBtn.addEventListener('click', function (e) {
    const path = e.currentTarget.dataset.path;

    document.querySelectorAll('.tabs-nav__btn').forEach(function (btn) {
      btn.classList.remove('tabs-nav__btn--active')
    });

    e.currentTarget.classList.add('tabs-nav__btn--active');
    document.querySelectorAll('.tabs-item').forEach(function (tabsBtn) {
      tabsBtn.classList.remove('tabs-item--active')
    });

    document.querySelector(`[data-target="${path}"]`).classList.add('tabs-item--active');
  });
});



/*плавный скролл по якорям*/
const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()

    const blockID = anchor.getAttribute('href').substr(1)

    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  });
}



const swiper = new Swiper('.swiper-container', {
  loop: true,
  slidesPerView: 2,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

});


