const toggleButton = document.querySelector('.toggle-nav')
const navLinks = document.getElementsByClassName('nav-links')[0]

toggleButton.addEventListener('click', ()=>{
    navLinks.classList.toggle('active')
})

