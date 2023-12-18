const novelEls = document.querySelectorAll('.noveltitle');
novelEls.forEach(function(novelEl) {
  if (novelEl.getAttribute('href')=='javascript:void(0)'){
    novelEl.classList.add('linknotattached')
  }
});

new Swiper('.youtube .swiper', {
  direction: 'horizontal',
  loop: true,
  slidesPerView: 1,
  spaceBetween: 10,
  centeredSlides: true,
  pagination: {
    el: '.youtube .swiper-pagination', // 페이지 번호 요소 선택자
    clickable: true // 사용자의 페이지 번호 요소 제어 가능 여부
  },
  navigation: {
    prevEl: '.youtube .swiper-prev',
    nextEl: '.youtube .swiper-next'
  }
});