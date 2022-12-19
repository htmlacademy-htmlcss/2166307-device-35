function redLine() {
    document.querySelectorAll('.sub-form-wrapper')[0].style.setProperty('--background-color', '#FF3D3D');
}


function greenLine() {
    try { setCustomValidity('') } catch (e) { };
    document.querySelectorAll('.sub-form-wrapper')[0].style.setProperty('--background-color', 'transparent');
}
