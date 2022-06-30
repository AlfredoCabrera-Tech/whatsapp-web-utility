const countries = document.querySelector('#countries')
const inputNum = document.querySelector('#numInput')
const inputMsg = document.querySelector('textarea')
const btnOpen = document.querySelector('.btn-open')
const btnTab = document.querySelector('.btn-tab')
const btnSave = document.querySelector('.btn-save')


/* OPEN IN A NEW TAB */
let newTab = () => {
  let phoneNum = `${countries.value}${inputNum.value}`
   
  if(inputMsg.value == ''){
    window.open(`https://wa.me/${phoneNum}`,'_blank')
    inputNum.value = ''
  } else{
    let msgArr = inputMsg.value.split(' ')
    let msgURL = msgArr.join('%20')
    window.open(`https://wa.me/${phoneNum}?text=${msgURL}`,'_blank')
    inputNum.value = ''
    inputMsg.value = ''
  }
}

btnTab.addEventListener('click', newTab)

/* OPEN IN THE SAME TAB */
let open = () => {
  let phoneNum = `${countries.value}${inputNum.value}`
   
  if(inputMsg.value == ''){
    window.location.href = `https://wa.me/${phoneNum}`
    inputNum.value = ''
  } else{
    let msgArr = inputMsg.value.split(' ')
    let msgURL = msgArr.join('%20')
    window.location.href = `https://wa.me/${phoneNum}?text=${msgURL}`
    inputNum.value = ''
    inputMsg.value = ''
  }
}

btnOpen.addEventListener('click', open)

/* SAVE NUMBER */
