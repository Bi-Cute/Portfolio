// 연락처 Modal
document.querySelector('.tel_button').addEventListener('click', ()=>{
  document.querySelector('#tel_modal').classList.replace('-z-10','z-10')
  document.querySelector('#tel_modal').classList.replace('opacity-0','opacity-100')
})

document.querySelector('#tel_colse').addEventListener('click', ()=>{
  document.querySelector('#tel_modal').classList.replace('z-10','-z-10')
  document.querySelector('#tel_modal').classList.replace('opacity-100','opacity-0')
})
// // 연락처 Modal


// Menu List
const menuButton = document.getElementById('menu_checkbox')
menuButton.addEventListener('click', ()=>{
  if(menuButton.checked != false){
  document.querySelector('body').classList.toggle('overflow-hidden')
  document.querySelector('#nav').classList.replace('-z-10','z-30')
  document.querySelector('#nav').classList.replace('opacity-0','opacity-100')
  document.querySelector('#menu_text_bar').classList.replace('before:text-black','before:text-white')
  document.querySelector('#menu_text_bar').classList.replace('bg-black','bg-white')
  } else {
    document.querySelector('body').classList.toggle('overflow-hidden')
    document.querySelector('#nav').classList.replace('z-30','-z-10')
    document.querySelector('#nav').classList.replace('opacity-100','opacity-0')
    document.querySelector('#menu_text_bar').classList.replace('before:text-white','before:text-black')
    document.querySelector('#menu_text_bar').classList.replace('bg-white','bg-black')
  }
})
// // Menu List


let $$list = document.querySelectorAll('nav ul li');
for (i=0; i<$$list.length; i++){
$$list[i].addEventListener('click', function(){
  menuButton.click();
})
}