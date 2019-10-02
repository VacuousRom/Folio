const switchBtn = document.querySelector('.switch');

const elementsToDarken = document.querySelectorAll('.add');

let isDark = false;

switchBtn.addEventListener('click', function() {
    if (!isDark) {elementsToDarken.forEach( (el) => el.classList.add('dark'));
    document.querySelectorAll('.fas').forEach( (el) => el.style.color = '#000' )
    isDark = !isDark;
} else {
    elementsToDarken.forEach( (el) => el.classList.remove('dark'));
    document.querySelectorAll('.fas').forEach( (el) => el.style.color = '#D85300' )
    isDark = !isDark;
    
}
 });