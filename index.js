const sideMenu =  document.querySelector("aside");
const menuBtn = document.getElementById("menu-btn");
const closeBtn = document.getElementById("close-btn");
const themeToggle = document.querySelector('.theme-toggler');

menuBtn.addEventListener('click',()=>{
    sideMenu.style.display = 'block';
})

closeBtn.addEventListener('click',()=>{
    sideMenu.style.display = 'none';
})


// change theme

themeToggle.addEventListener("click",()=>{
    document.body.classList.toggle('dark-theme-variables');

    themeToggle.querySelector('span:nth-child(1)').classList.toggle('active');
    themeToggle.querySelector('span:nth-child(2)').classList.toggle('active');
})

