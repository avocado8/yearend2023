const toTopEl = document.querySelector('#to-top');

window.addEventListener('scroll', _.throttle(function() {
  toTopEl.addEventListener('click', function() {
    gsap.to(window, 1, {
      scrollTo: 0
    })
  })
}))
