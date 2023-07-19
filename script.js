let section = document.querySelectorAll('.section');
let icon = document.querySelectorAll('.icon-box');
let link = document.querySelectorAll('.link');
let current = "home";
window.onscroll = () => {
    section.forEach((sections) => {
        if (scrollY >= sections.offsetTop - 100) {
            current = sections.getAttribute('id');
        }
    })
    icon.forEach((icon) => {
        icon.classList.remove('active');
        if (icon.href.includes(current)) {
            icon.classList.add('active');
        }
    })

    link.forEach((link)=>{
        link.classList.remove('act');
        if(link.href.includes(current+"-mob")){
            link.classList.add('act');
        }
    })
}


let hambuger = document.querySelector(".hambuger");
let navitems = document.querySelector('.nav-items');
let links = document.querySelectorAll('.link');
const collapse = () => {
    navitems.classList.toggle('hide');
};

hambuger.addEventListener('click', collapse)

        // for(let i =0;i<links.length;i++)
        // {
        //     links[i].addEventListener('click',collapse);
        // }