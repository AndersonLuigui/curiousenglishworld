let isBoxVisible = true;
            
function displayConteudo(element) {
    const box = element.nextElementSibling;
    if (isBoxVisible) {
        box.style.display = 'none';
    } else {
        box.style.display = 'block';
    }
    isBoxVisible = !isBoxVisible;
}





