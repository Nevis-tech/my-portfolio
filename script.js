const menuIcon = document.querySelector('#menu-icon');
const navLinks = document.querySelector('.nav-links');

menuIcon.onclick = () => {
    navLinks.classList.toggle('active');
}  

document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click',function( ) {
    document.querySelector('.nav-links').classList.remove('active');
    });
});