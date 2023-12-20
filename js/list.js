const maintitleEls = document.querySelectorAll('.maintitle');
const mainsentEls = document.querySelectorAll('.mainsentence');

maintitleEls.forEach((maintitleEl, index)=>{
  maintitleEl.addEventListener('mouseover', function(){
    maintitleEls[index].classList.add('mouseover');
    mainsentEls[index].classList.add('visible');
  });
  maintitleEl.addEventListener('mouseout', function(){
    maintitleEls[index].classList.remove('mouseover');
    mainsentEls[index].classList.remove('visible');
  });
});