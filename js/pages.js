
// TRADUZIR ESCONDER
let traduzir = document.querySelector('#traduzir');
let esconder = document.querySelector('#esconder');
const box1 = document.querySelector('.box1');

traduzir.addEventListener('click', (e) => {
    box1.style.display = 'block'; 
    traduzir.style.display = 'none';
    esconder.style.display = 'block';
})

esconder.addEventListener('click',(e)=> {
    box1.style.display = 'none';
    traduzir.style.display = 'block';
    esconder.style.display = 'none';  
})





