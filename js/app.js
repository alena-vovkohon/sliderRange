let desktop = document.querySelector('.desktop')
let sliderInfo = document.querySelector('#range1')
let sliderChoose = document.querySelector('#range2')
let pageviewsText = document.querySelector('.pageviews__span')
let numberText = document.querySelector('.number__span')

console.log('hi')
sliderInfo.oninput = function () {
  numberText.innerHTML = this.value
  console.log(this.value)
}
