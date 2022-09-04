// Variables;
const navDrop1 = document.getElementById('drop1');
const navDrop2 = document.getElementById('drop2');
const navMenuOpen = document.getElementById('mobileNav');

// DropDown Code;
navDrop1.addEventListener('click', () => {
    document.getElementById('dropdown1').classList.toggle('hidden');
    if(!document.getElementById('dropdown1').classList.contains('hidden')) {
        document.getElementById('arrow-img1').setAttribute('src', './images/icon-arrow-up.svg')
    } else {
        document.getElementById('arrow-img1').setAttribute('src', './images/icon-arrow-down.svg')
    }
});

navDrop2.addEventListener('click', () => {
    document.getElementById('dropdown2').classList.toggle('hidden');
    if(!document.getElementById('dropdown2').classList.contains('hidden')) {
        document.getElementById('arrow-img2').setAttribute('src', './images/icon-arrow-up.svg')
    } else {
        document.getElementById('arrow-img2').setAttribute('src', './images/icon-arrow-down.svg')
    }
});


// Navbar Code
navMenuOpen.addEventListener('click', () => {
    document.getElementById('nav').classList.toggle('nav-open');
    if(!document.getElementById('nav').classList.contains('nav-open')) {
        document.getElementById('nav-menu-img').setAttribute('src', './images/icon-menu.svg')
    } else {
        document.getElementById('nav-menu-img').setAttribute('src', './images/icon-close-menu.svg')
    }
});