document.addEventListener('DOMContentLoaded', () => {
  const minus = document.querySelector('.btn-minus')
  const plus = document.querySelector('.btn-plus')
  const knob = document.querySelector('.knob')
  const counter = document.querySelector('#counter')
  const maximum = document.querySelector('#maximum')

  plus.addEventListener('click', () => {
    if (Number(counter.textContent) < Number(maximum.textContent))
    counter.textContent = Number(counter.textContent) + 1
    knob.style.width = Number(counter.innerHTML * 10) + '%' ;

  })

  minus.addEventListener('click', () => {
    if (Number(counter.textContent) > 0)
    counter.textContent = Number(counter.textContent) - 1
    knob.style.width = Number(counter.innerHTML * 10) + '%' ;
    
  })

});

