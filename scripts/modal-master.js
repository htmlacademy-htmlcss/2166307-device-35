//-----------↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓------- ОТКРЫТИЕ-ЗАКРЫТИЕ МОДАЛЬНОГО ОКНА ---------------------------------------------

function showModalWin() {

  var darkLayer = document.createElement('div'); // слой затемнения
  darkLayer.className = "shadow" // даем новому элементу класс, чтобы подхватить стиль
  document.body.appendChild(darkLayer); // включаем затемнение

  var modalWin = document.getElementById('popupWin'); // находим наше окошко
  modalWin.style.display = 'block'; // делаем его видимым

  darkLayer.onclick = function () {  // при клике на слой затемнения все исчезнет
    darkLayer.parentNode.removeChild(darkLayer); // удаляем затемнение
    modalWin.style.display = 'none'; // выключаем модальное окно
    return false;
  };
}

function closeClick() {  // обработчик кнопки закрытия модального окна
  var modalWin = document.getElementById('popupWin'); // находим наше окошко
  var darkLayer = document.querySelectorAll('.shadow')[0]; // находим слой затемнения
  darkLayer.parentNode.removeChild(darkLayer); // выключаем затемнение
  document.getElementById('modal-delivery-window').reset() // делаем сброс формы перед выключением модального окна
  modalWin.style.display = 'none'; // выключаем модальное окно
  return false;
};

//----------↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑------- ОТКРЫТИЕ-ЗАКРЫТИЕ МОДАЛЬНОГО ОКНА ---------------------------------------------


//-----------↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓------ ОБРАБОТЧИК для INPUT type=NUMBER ---------------------------------------------

function minusClick() {
  document.querySelectorAll('.quantity-arrow-minus')[0].nextElementSibling.stepDown();  // используем JS метод stepDown для уменьшения значения
  document.querySelectorAll('.quantity-arrow-minus')[0].nextElementSibling.onchange();
};

function plusClick() {
  document.querySelectorAll('.quantity-arrow-plus')[0].previousElementSibling.stepUp(); // используем JS метод stepUP для увеличения значения
  document.querySelectorAll('.quantity-arrow-plus')[0].previousElementSibling.onchange();
};

//----------↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑------- ОБРАБОТЧИК для INPUT type=NUMBER ---------------------------------------------
