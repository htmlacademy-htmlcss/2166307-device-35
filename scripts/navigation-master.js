// обработчик строки поиска по сайту в ХЕДЕРЕ

var searchEvent = document.querySelectorAll('.search-line')[0];

searchEvent.addEventListener('focus', function () {
  document.querySelectorAll('.for-search')[0].style.setProperty("--border", "2px solid #AF4FFF"); // ставим border на .for-search:before по фокусу поля search-line
});

searchEvent.addEventListener('blur', BlurSearch);
searchEvent.addEventListener('input', BlurSearch);
function BlurSearch() {
  document.querySelectorAll('.for-search')[0].style.setProperty("--border", "2px solid transparent"); // прячем border по onblur
}

// обработчик кнопки "КАТАЛОГ ТОВАРОВ +/-"

var CatalogEvent = document.querySelectorAll('.catalog-button')[0];


CatalogEvent.addEventListener('click', ToggleFunction);


function ToggleFunction()
{
  if(document.getElementById("catalog-btn").value=="off"){
   document.getElementById("catalog-btn").value="on";
   document.querySelectorAll('.catalog-button')[0].style.setProperty("--background-image", "url('../images/circle-minus-icon.svg')");
   document.querySelectorAll('.catalog-list')[0].style.setProperty("--display", "grid");
}

 else {
  document.getElementById("catalog-btn").value="off";
  document.querySelectorAll('.catalog-button')[0].style.setProperty("--background-image", "url('../images/circle-plus-icon.svg')");
  document.querySelectorAll('.catalog-list')[0].style.setProperty("--display", "none");
}
}

// обработчик ВХОДА/ВЫХОДА юзера

var EnterEvent = document.querySelectorAll('.enter-link')[0];
var ExitEvent = document.querySelectorAll('.exit-link')[0];


EnterEvent.addEventListener('click', function () {
  document.querySelectorAll('.enter-user-container')[0].style.setProperty("--display", "none");
  document.querySelectorAll('.entered-user-container')[0].style.setProperty("--display", "flex");
});

ExitEvent.addEventListener('click', function () {
  document.querySelectorAll('.entered-user-container')[0].style.setProperty("--display", "none");
  document.querySelectorAll('.enter-user-container')[0].style.setProperty("--display", "flex");
});

// обработчик КОРЗИНЫ

var BasketEvent = document.getElementById('basket-btn');
BasketEvent.addEventListener('click', BasketToggleFunction);

function BasketToggleFunction() {

  if(document.getElementById("basket-btn").value=="off") {
   // alert('сработало условие что value кнопки = OFF ');
   document.getElementById("basket-btn").value="on";
  // alert('изменили value кнопки = ON ');
   document.getElementById("prebasket").style.setProperty("--display", "flex");
 //  alert('дали display: flex  поповеру');
}

else {
document.querySelectorAll('.basket-popover')[0].style.setProperty("--display", "none");
document.getElementById("basket-btn").value="off";

}

}
