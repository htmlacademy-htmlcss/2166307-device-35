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
  if(document.getElementById("catalog-btn").value=="OFF"){
   document.getElementById("catalog-btn").value="ON";
   document.querySelectorAll('.catalog-button')[0].style.setProperty("--background-image", "url('../images/circle-minus-icon.svg')");
   document.querySelectorAll('.catalog-list')[0].style.setProperty("--display", "grid");
  }

 else {
  document.getElementById("catalog-btn").value="OFF";
  document.querySelectorAll('.catalog-button')[0].style.setProperty("--background-image", "url('../images/circle-plus-icon.svg')");
  document.querySelectorAll('.catalog-list')[0].style.setProperty("--display", "none");
}
}
