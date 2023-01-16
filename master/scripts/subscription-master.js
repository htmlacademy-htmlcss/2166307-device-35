var SubscriptionEvent = document.querySelectorAll('.field-line')[0];

SubscriptionEvent.addEventListener('change', greenLine)

SubscriptionEvent.addEventListener('invalid', function () {
  document.querySelectorAll('.sub-form-wrapper')[0].style.setProperty('--background-color', '#FF3D3D');
});

function greenLine() {
  try { setCustomValidity('') } catch (e) { };
    document.querySelectorAll('.sub-form-wrapper')[0].style.setProperty('--background-color', 'transparent');
    document.getElementByClass('fsubscription-form').reset();
}
