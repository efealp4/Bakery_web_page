/* ====== SHOW MENU ====== */ 
const navMenu= document.getElementById('nav-menu')
    navClose= document.getElementById('nav-close')
    navToggle= document.getElementById('nav-toggle')

/* Menu Show */ 
if(navToggle){
    navToggle.addEventListener('click', ()=>{
        navMenu.classList.add('show-menu')
    })
if(navClose){
    navClose.addEventListener('click', ()=>{
        navMenu.classList.remove('show-menu')
    })
}
}

/* ====== REMOVE MENU ====== */ 
const navLink= document.querySelectorAll('.nav__link')

const linkAction= () =>{
    const navMenu= document.getElementById('nav-menu')

    // When we click on each nav__link, we remove the show-menu class. 
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n=> n.addEventListener('click', linkAction))

/* ====== ADD BLUR HEADER ====== */ 
const blurHeader= ()=>{
    const header= document.getElementById('header')

    this.scrollY>= 50 ? header.classList.add('blur-header') : 
    header.classList.remove('blur-header')
}
window.addEventListener('scroll',blurHeader)

