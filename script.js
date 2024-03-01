window.addEventListener('scroll', function() {
    var navbar = document.querySelector('.navbar');
    var input = document.querySelector('.navbar_right input')
    var scrollPosition = window.scrollY;

    if (scrollPosition > 100) { 
        input.style.backgroundColor = 'rgb(34, 34, 34)';
        input.style.border = 'transparent';
        input.style.filter = 'brightness(1)';
        navbar.style.backgroundColor = '#000000';
    } else {
        input.style.backgroundColor = 'transparent';
        input.style.border = '1px solid #ffffff';
        input.style.filter = 'brightness(3)';
        navbar.style.backgroundColor = 'transparent';
    }
});