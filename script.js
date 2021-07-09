burger=document.querySelector(".burger");
menulist=document.querySelector(".menu-list");
rightnav=document.querySelector(".rightNav");
navbar=document.querySelector(".navbar");

burger.addEventListener('click',()=>{
    menulist.classList.toggle('vclass-rsp');
    rightnav.classList.toggle('vclass-rsp');
    navbar.classList.toggle('hnav-rsp');
})
