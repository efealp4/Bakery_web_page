/* ====== SHOE MENU ====== */ 
const navMenu= document.getElementById('nav-menu'),
      navToggle= document.getElementById('nav-toggle'),
      navClose= document.getElementById('nav-close')
      
/* Menu Show */ 
if(navToggle){
    navToggle.addEventListener('click', ()=>{
        navMenu.classList.add('show-menu')
    })
}

/* Menu Hidden */ 
if(navClose){
    navClose.addEventListener('click', ()=> {
        navMenu.classList.remove('show-menu')
    })
}

/* ====== REMOVE MENU MOBILE ====== */ 
const navLink = document.querySelectorAll('.nav__link')

const linkAction = ()=> {
    const navMenu= document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n=> n.addEventListener('click',linkAction))

/* ====== ADD BLUR HEADER ====== */ 
const blurHeader= ()=> {
    const header= document.getElementById('header')
    // When the scroll is greater than 50 viewport height, add the blur-header class to the header tag
    this.scrollY>= 50? header.classList.add('blur-header'):
                       header.classList.remove('blur-header') 
}
window.addEventListener('scroll', blurHeader)

/* ====== SHOW SCROLL UP ====== */ 
const scrollUp = () => {
    const scrollUp= document.getElementById('scroll-up')
    // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scroll up class. 
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll') : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll',scrollUp)

/* ====== SCROLL SECTION ACTIVE LINK ====== */ 
const sections= document.querySelectorAll('section[id]')

const scrollActive= ()=> {
    const scrollDown = window.scrollY

    sections.forEach(current=> {
        const sectionHeight= current.offsetHeight,
        sectionTop= current.offsetTop -58, 
        sectionId= current.getAttribute('id'),
        sectionClass= document.querySelector('.nav__menu a[href*=' + sectionId + ']')

        if(scrollDown > sectionTop && scrollDown<= sectionTop + sectionHeight){
            sectionClass.classList.add('active-link')
        }

        else{
            sectionClass.classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll',scrollActive)
