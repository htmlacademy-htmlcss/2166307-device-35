
//-----------↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓------- ОТКРЫТИЕ-ЗАКРЫТИЕ МОДАЛЬНОГО ОКНА ----------------------------------------------

var OpenWinEvent = document.querySelectorAll('.delivery-btn')[0];
OpenWinEvent.addEventListener('click', showModalWin)

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

var closeWinEvent = document.querySelectorAll('.close-button')[0];
closeWinEvent.addEventListener('click', function () {  // обработчик кнопки закрытия модального окна
  var modalWin = document.getElementById('popupWin'); // находим наше окошко
  var darkLayer = document.querySelectorAll('.shadow')[0]; // находим слой затемнения
  darkLayer.parentNode.removeChild(darkLayer); // выключаем затемнение
  document.querySelectorAll('.mail-error-msg')[0].style.setProperty('--color', '#000000'); // сообщение об ошибке в почте красим снова в черный
  document.querySelectorAll('.modal-mail-input')[0].style.setProperty('--border', '2px solid #F0F0F0'); // ставим бордер почты в исходное состояние
  document.querySelectorAll('.for-mail')[0].style.setProperty('--display', 'block'); // возвращаем сиреневый исходный фокус на почту
  document.getElementById('modal-delivery-window').reset() // делаем сброс формы перед выключением модального окна
  modalWin.style.display = 'none'; // выключаем модальное окно
  return false;
});

//----------↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑------- ОТКРЫТИЕ-ЗАКРЫТИЕ МОДАЛЬНОГО ОКНА -----------------------------------------------


//-----------↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓------ ОБРАБОТЧИК для INPUT type=NUMBER -------------------------------------------------

var minusClickEvent = document.querySelectorAll('.quantity-arrow-minus')[0];
minusClickEvent.addEventListener('click', function () {
  document.querySelectorAll('.quantity-arrow-minus')[0].nextElementSibling.stepDown();  // используем JS метод stepDown для уменьшения значения
  document.querySelectorAll('.quantity-arrow-minus')[0].nextElementSibling.onchange();
});

var plusClickEvent = document.querySelectorAll('.quantity-arrow-plus')[0];
plusClickEvent.addEventListener('click', function () {
  document.querySelectorAll('.quantity-arrow-plus')[0].previousElementSibling.stepUp(); // используем JS метод stepUP для увеличения значения
  document.querySelectorAll('.quantity-arrow-plus')[0].previousElementSibling.onchange();
});

//-----------↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑------ ОБРАБОТЧИК для INPUT type=NUMBER --------------------------------------------------


//-----------↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓------ ОБРАБОТЧИК для INPUT  MAIL/NAME/GOODS ---------------------------------------------


var nameEvent = document.querySelectorAll('.modal-name-input')[0];
var mailEvent = document.querySelectorAll('.modal-mail-input')[0];
var goodsEvent = document.querySelectorAll('.modal-goods-input')[0];

nameEvent.addEventListener('focus', function () {
  document.querySelectorAll('.for-name')[0].style.setProperty("--border", "2px solid #AF4FFF"); // ставим border на .for-name:before по фокусу поля Name
});

nameEvent.addEventListener('blur', BlurName);
nameEvent.addEventListener('input', BlurName);
function BlurName() {
  document.querySelectorAll('.for-name')[0].style.setProperty("--border", "2px solid transparent"); // прячем border по onblur
}


mailEvent.addEventListener('focus', function () {
  document.querySelectorAll('.for-mail')[0].style.setProperty("--border", "2px solid #AF4FFF"); // ставим border на .for-mail:before по фокусу поля Mail
});

mailEvent.addEventListener('blur', BlurMail);
mailEvent.addEventListener('input', BlurMail);
function BlurMail() {
  document.querySelectorAll('.for-mail')[0].style.setProperty("--border", "2px solid transparent"); // прячем border по onblur
}

goodsEvent.addEventListener('focus', function () {
  document.querySelectorAll('.for-goods')[0].style.setProperty("--border", "2px solid #AF4FFF"); //ставим border на .for-goods:before по фокусу поля Goods
});

goodsEvent.addEventListener('blur', BlurGoods);
goodsEvent.addEventListener('input', BlurGoods);
function BlurGoods() {
  document.querySelectorAll('.for-goods')[0].style.setProperty("--border", "2px solid transparent"); // прячем border по onblur
}

//----------↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑ ↑------- ОБРАБОТЧИК для INPUT  MAIL/NAME/GOODS ----------------------------------------------------


//-----------↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓ ↓------ ДОП ОБРАБОТЧИК для INPUT  MAIL (error msg, red border - invalid, green border - valid) -------

mailEvent.addEventListener('invalid', function () {
  document.querySelectorAll('.mail-error-msg')[0].style.setProperty('--color', '#FF3D3D');
  document.querySelectorAll('.modal-mail-input')[0].style.setProperty('--border', '2px solid #FF3D3D');
  document.querySelectorAll('.for-mail')[0].style.setProperty('--display', 'none');
});
