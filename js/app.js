let sliderInfo = document.querySelector('#range')
let sliderChoose = document.querySelector('#checkbox')
let pageviewsText = document.querySelector('.pageviews__span')
let numberText = document.querySelector('.number__span')
let buttonShow = document.querySelector('.desktop__button')
let buttonClose = document.querySelector('.dialog__button')
let dialog = document.querySelector('.desktop__dialog')

let info = [
  { name: '1', pageviews: '10K', full_price: 8 },
  { name: '2', pageviews: '50K', full_price: 12 },
  { name: '3', pageviews: '100K', full_price: 16 },
  { name: '4', pageviews: '500K', full_price: 24 },
  { name: '5', pageviews: '1M', full_price: 36 },
]
let billing_plan
let billing_pageviews

function get_price() {
  for (let i = 0; i <= info.length - 1; i++) {
    if (i == billing_pageviews - 1) {
      // console.log('current name ' + info[i].name)
      // console.log(info[i].pageviews)
      pageviewsText.innerHTML = info[i].pageviews
      if (billing_plan == true) {
        let new_price = info[i].full_price * 0.75
        // console.log(new_price)
        numberText.innerHTML = '$' + new_price + '.00'
      } else {
        numberText.innerHTML = '$' + info[i].full_price + '.00'
      }
    }
  }
}
sliderInfo.oninput = function () {
  billing_pageviews = this.value
  console.log('billing_pageviews = ' + billing_pageviews)
  get_price()
}

sliderChoose.oninput = function () {
  billing_plan = this.checked
  console.log('billing_plan =' + billing_plan)
  get_price()
}

sliderInfo.oninput()
sliderChoose.oninput()

buttonShow.onclick = function () {
  dialog.classList.add('open')
  console.log('show')
}
buttonClose.onclick = function () {
  dialog.classList.remove('open')
  console.log('close')
}
