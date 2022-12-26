var searchEvent = document.querySelectorAll('.search-line')[0];


searchEvent.addEventListener('focus', function () {
  document.querySelectorAll('.for-search')[0].style.setProperty("--border", "2px solid #AF4FFF"); // ставим border на .for-search:before по фокусу поля search-line
});

searchEvent.addEventListener('blur', BlurSearch);
searchEvent.addEventListener('input', BlurSearch);
function BlurSearch() {
  document.querySelectorAll('.for-search')[0].style.setProperty("--border", "2px solid transparent"); // прячем border по onblur
}
