let lastScollTop='0';
navbar=document.getElementById('navbar');
window.addEventListener('scroll',function(){
    let scroolTop=window.pageYOffset||document
    .documentElement.scrollTop;
    if(scroolTop>lastScollTop){
        navbar.style.top='-100%';
    }
    else{
        navbar.style.top='0px';
    }
    lastScollTop=scroolTop;
})














const icon=document.getElementById('icon');
const menu=document.getElementById('menu');
icon.onclick=function(){
    menu.classList.toggle('active');
    icon.classList.toggle('active');
}