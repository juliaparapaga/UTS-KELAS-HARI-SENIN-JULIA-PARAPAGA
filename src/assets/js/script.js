//Navbar Fixed
window.onscroll = function(){
    const header = document.querySelector('header');
    const FixedNav = header.offsetTop;
    if(window.pageXOffset >FixedNav){
       header.classList.add('navbar-fixed'); 
    }else{
        header.classList.remove('navrbar-fixed');
    }
}
//Hamburger
const Hamburger = document.querySelector('#hamburger');
const navMenu =document.querySelector('#nav-menu');

hamburger.addEventListener('click',function(){
    hamburger.classList.toggle('hamburger-active');
    navMenu.classList.toggle('hidden');
});

//klik di luar hamburger
window.addEventListener('click', function(e){
    if(e.target !=hamburger && e.target != navMenu){
        hamburger.classList.remove('hamburger-active');
        navMenu.classList.add('hidden');
    }
});