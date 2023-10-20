// DARK MODE
const darkmode = document.querySelector('#change-theme');
const lightlogo = document.querySelector('#logo');
const enwhite = "img/enwhite.png";
const enblack = "img/enblack.png";
const tela = document.querySelectorAll('.texts');


darkmode.addEventListener('change', (e) => {
    toggleDarkMode();

})


function loadTheme() {
    const darkMode = localStorage.getItem('dark');

    if (darkMode) {
        toggleDarkMode();


    }
}
loadTheme();


function toggleDarkMode() {
    document.body.classList.toggle('dark');

    localStorage.removeItem('dark');
    lightlogo.src = enblack;

    if(document.body.classList.contains('dark')) {
        localStorage.setItem('dark', 1);
        lightlogo.src = enwhite;
    }
}

function search() {
    let input = document.getElementById('search').value;
    input = input.toLowerCase();
    let x = document.getElementsByClassName('texts');


    for( i=0; i< x.length; i++) {
        if(!x[i].innerHTML.toLowerCase().includes(input)){
            x[i].style.display = 'none';
        } else {
            x[i].style.display = 'list-item'
        }
    }
}

function trocaSearch() {
    const searchB = document.querySelector(".search-txt");
    
    searchB.style.display = "block";

 
}









