// buttons and counter text
const counter = document.querySelector('#counter')
const btns = document.querySelectorAll('.btn')

// initialize the count variable
let count = 0

btns.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    const styles = e.currentTarget.classList

    if (styles.contains('increase')) {
      count++
    } else if (styles.contains('decrease')) {
      count--
    } else {
      count = 0
    }

    if (count > 0) {
      counter.style.color = '#4e17f4'
    }

    if (count < 0) {
      counter.style.color = '#d40000'
    }

    if (count === 0) {
      counter.style.color = '#555'
    }

    counter.textContent = count
  })
})
