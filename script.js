document.addEventListener('DOMContentLoaded', function(){
    const menuT = document.querySelector('.menu-toggle');
    const navlinkT = document.querySelector('#nav-right');

    menuT.addEventListener('click', function(){
        navlinkT.classList.toggle('active')

        const icon = menuT.querySelector('#nav-a');
        icon.classList.toggle('fa-bars')
        icon.classList.toggle('fa-x')
    })
})