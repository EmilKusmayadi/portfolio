const li = document.querySelectorAll('.links')
const sec = document.querySelectorAll('section')

const darkMode = document.querySelector('.input')
const body = document.body


function activeMenu() {
    let len = sec.length
    while(--len && window.scrollY + 97 < sec[len].offsetTop){}
    li.forEach(ltx => ltx.classList.remove("active"))
    li[len].classList.add("active")
}
activeMenu();
window.addEventListener('scroll', activeMenu);


darkMode.addEventListener('click', function(){
    body.classList.toggle('dark')
}) 