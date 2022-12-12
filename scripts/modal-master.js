function showModalWin() {

  var darkLayer = document.createElement('div'); // слой затемнения
  darkLayer.id = 'shadow'; // id чтобы подхватить стиль
  document.body.appendChild(darkLayer); // включаем затемнение

  var modalWin = document.getElementById('popupWin'); // находим наше окошко
  modalWin.style.display = 'block'; // "включаем" его


  darkLayer.onclick = function () {  // при клике на слой затемнения все исчезнет
    darkLayer.parentNode.removeChild(darkLayer); // удаляем затемнение
    modalWin.style.display = 'none'; // выключаем модальное окно
    return false;
  };
}

function handleClick() {  // обработчик кнопки закрытия формы
  var modalWin = document.getElementById('popupWin'); // находим наше окошко
  var darkLayer = document.getElementById('shadow'); // находим слой затемнения
  darkLayer.parentNode.removeChild(darkLayer); // выключаем затемнение
  document.getElementById('modal-delivery-window').reset() // делаем сброс формы перед выключением
  modalWin.style.display = 'none'; // выключаем модальное окно
  return false;
};
