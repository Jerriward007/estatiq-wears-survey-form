const rangeInput = document.getElementById('likelihood');
const rangeValue = document.getElementById('range-value');

rangeInput.addEventListener('input', function () {
  rangeValue.textContent = this.value;
});
