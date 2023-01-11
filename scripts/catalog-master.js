//===============ОБРАБОТЧИК СОСТОЯНИЙ КАРТОЧКИ ПРОДУКТА====================

var productEvent0 = document.querySelectorAll('.product-button')[0];

productEvent0.addEventListener('mouseover', function () {
document.querySelectorAll('.product-card-image')[0].style.setProperty("--opacity", "0.3");
document.querySelectorAll('.product-price')[0].style.setProperty("--opacity", "0.6");
});

productEvent0.addEventListener('mousedown', function () {
  document.querySelectorAll('.product-card-image')[0].style.setProperty("--opacity", "0.3");
  document.querySelectorAll('.product-price')[0].style.setProperty("--opacity", "0.3");
  });

  productEvent0.addEventListener('mouseup', function () {
    document.querySelectorAll('.product-card-image')[0].style.setProperty("--opacity", "1");
    document.querySelectorAll('.product-price')[0].style.setProperty("--opacity", "1");
    });

productEvent0.addEventListener('mouseout', function () {
document.querySelectorAll('.product-card-image')[0].style.setProperty("--opacity", "1");
document.querySelectorAll('.product-price')[0].style.setProperty("--opacity", "1");
});

var productEvent1 = document.querySelectorAll('.product-button')[1];

productEvent1.addEventListener('mouseover', function () {
document.querySelectorAll('.product-card-image')[1].style.setProperty("--opacity", "0.3");
document.querySelectorAll('.product-price')[1].style.setProperty("--opacity", "0.6");
});

productEvent1.addEventListener('mousedown', function () {
  document.querySelectorAll('.product-card-image')[1].style.setProperty("--opacity", "0.3");
  document.querySelectorAll('.product-price')[1].style.setProperty("--opacity", "0.3");
  });

  productEvent1.addEventListener('mouseup', function () {
    document.querySelectorAll('.product-card-image')[1].style.setProperty("--opacity", "1");
    document.querySelectorAll('.product-price')[1].style.setProperty("--opacity", "1");
    });

productEvent1.addEventListener('mouseout', function () {
document.querySelectorAll('.product-card-image')[1].style.setProperty("--opacity", "1");
document.querySelectorAll('.product-price')[1].style.setProperty("--opacity", "1");
});

var productEvent2 = document.querySelectorAll('.product-button')[2];

productEvent2.addEventListener('mouseover', function () {
document.querySelectorAll('.product-card-image')[2].style.setProperty("--opacity", "0.3");
document.querySelectorAll('.product-price')[2].style.setProperty("--opacity", "0.6");
});

productEvent2.addEventListener('mousedown', function () {
  document.querySelectorAll('.product-card-image')[2].style.setProperty("--opacity", "0.3");
  document.querySelectorAll('.product-price')[2].style.setProperty("--opacity", "0.3");
  });

  productEvent2.addEventListener('mouseup', function () {
    document.querySelectorAll('.product-card-image')[2].style.setProperty("--opacity", "1");
    document.querySelectorAll('.product-price')[2].style.setProperty("--opacity", "1");
    });

productEvent2.addEventListener('mouseout', function () {
document.querySelectorAll('.product-card-image')[2].style.setProperty("--opacity", "1");
document.querySelectorAll('.product-price')[2].style.setProperty("--opacity", "1");
});

var productEvent3 = document.querySelectorAll('.product-button')[3];

productEvent3.addEventListener('mouseover', function () {
document.querySelectorAll('.product-card-image')[3].style.setProperty("--opacity", "0.3");
document.querySelectorAll('.product-price')[3].style.setProperty("--opacity", "0.6");
});

productEvent3.addEventListener('mousedown', function () {
  document.querySelectorAll('.product-card-image')[3].style.setProperty("--opacity", "0.3");
  document.querySelectorAll('.product-price')[3].style.setProperty("--opacity", "0.3");
  });

  productEvent3.addEventListener('mouseup', function () {
    document.querySelectorAll('.product-card-image')[3].style.setProperty("--opacity", "1");
    document.querySelectorAll('.product-price')[3].style.setProperty("--opacity", "1");
    });

productEvent3.addEventListener('mouseout', function () {
document.querySelectorAll('.product-card-image')[3].style.setProperty("--opacity", "1");
document.querySelectorAll('.product-price')[3].style.setProperty("--opacity", "1");
});
