// change navbar style on scroll 



document.addEventListener('scroll',function()
{
    const n = document.querySelector('nav');
    if(window.scrollY > 0)
    {
        n.classList.add('scrolled');
    }
    else
    {
        n.classList.remove('scrolled');
    }
})

// toggle FAQS

const faqs = document.querySelectorAll('.faq')

faqs.forEach(faq =>
{
    faq.addEventListener('click',() =>
{
    faq.classList.toggle('open')

    //icon change

    const icon = faq.querySelector('.faq_icon i')
    if(icon.className == "fa-solid fa-plus")
    {
       icon.className = "fa-solid fa-minus"
    }
    else
    {
        icon.className = "fa-solid fa-plus"
    }
})
})

// toggle nev menu

const menu = document.querySelector('.nav_menu')
const openbtn = document.querySelector('#open-menu-btn')
const closebtn = document.querySelector('#close-menu-btn')

openbtn.addEventListener('click',() =>
{
    menu.style.display = "block"
    openbtn.style.display = "none"
    closebtn.style.display = "inline-block"
})

closebtn.addEventListener('click',() =>
{
    menu.style.display = "none"
    openbtn.style.display = "inline-block"
    closebtn.style.display = "none"
})