const countries = document.querySelector('#countries')
const inputNum = document.querySelector('#numInput')
const inputMsg = document.querySelector('textarea')
const btnOpen = document.querySelector('.btn-open')
const btnTab = document.querySelector('.btn-tab')
const btnSave = document.querySelector('.btn-save')

/* OPEN IN A NEW TAB */
let newTab = () => {
  
  let rawNumber = inputNum.value.replace(/\D/g, '')
  let phoneNum = `${countries.value}${rawNumber}`
  if(inputMsg.value == ''){
    window.open(`https://web.whatsapp.com/send?phone=${phoneNum}&text&type=phone_number&app_absent=0`,'_blank')
    inputNum.value = ''
  } else{
    let msgArr = inputMsg.value.split(' ')
    let msgURL = msgArr.join('%20')
    window.open(`https://web.whatsapp.com/send?phone=${phoneNum}&text=${msgURL}&type=phone_number&app_absent=0`,'_blank')
    inputNum.value = ''
    inputMsg.value = ''
  }
  inputNum.focus()
}
btnTab.addEventListener('click', newTab)


/* OPEN IN THE SAME TAB */
let open = () => {
  let rawNumber = inputNum.value.replace(/\D/g, '')
  let phoneNum = `${countries.value}${rawNumber}`
  
  if(inputMsg.value == ''){
    chrome.tabs.update({ url: `https://web.whatsapp.com/send?phone=${phoneNum}&text&type=phone_number&app_absent=0`})
    inputNum.value = ''
  } else{
    let msgArr = inputMsg.value.split(' ')
    let msgURL = msgArr.join('%20')
    chrome.tabs.update({ url: `https://web.whatsapp.com/send?phone=${phoneNum}&text=${msgURL}&type=phone_number&app_absent=0`})
    inputNum.value = ''
    inputMsg.value = ''
  }
  inputNum.focus()
}
btnOpen.addEventListener('click', open)

/* SAVE NUMBER */
