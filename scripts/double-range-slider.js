//===============Double Range Slider using Vanilla Java Script====================

const rangeInput = document.querySelectorAll(".range-input input"),
priceInput = document.querySelectorAll(".price-input input"),
range = document.querySelector(".double-slider .progress");
let priceGap = 1000;
priceInput.forEach(input =>{
    input.addEventListener("input", e =>{
        let minPrice = parseInt(priceInput[0].value),
        maxPrice = parseInt(priceInput[1].value);

        if((maxPrice - minPrice >= priceGap) && maxPrice <= rangeInput[1].max){
            if(e.target.className === "input-min"){
                rangeInput[0].value = minPrice;
                range.style.left = ((minPrice / rangeInput[0].max) * 100) + "%";
            }else{
                rangeInput[1].value = maxPrice;
                range.style.right = 100 - (maxPrice / rangeInput[1].max) * 100 + "%";
            }
        }
    });
});
rangeInput.forEach(input =>{
    input.addEventListener("input", e =>{
        let minVal = parseInt(rangeInput[0].value),
        maxVal = parseInt(rangeInput[1].value);
        if((maxVal - minVal) < priceGap){
            if(e.target.className === "range-min"){
                rangeInput[0].value = maxVal - priceGap
            }else{
                rangeInput[1].value = minVal + priceGap;
            }
        }else{
            priceInput[0].value = minVal;
            priceInput[1].value = maxVal;
            range.style.left = ((minVal / rangeInput[0].max) * 100) + "%";
            range.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + "%";
        }
    });
});

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
