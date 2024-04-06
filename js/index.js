const header = document.querySelector('.header');
window.addEventListener('scroll', function (e) {
   if (document.documentElement.scrollTop > 40) {
      header.style.backgroundColor = ' #ddf1f3'
      header.style.opacity = 0.5
      header.addEventListener("mouseover", function (e) {
         header.style.opacity = 1
      })
      header.addEventListener("mouseleave", function (e) {
         header.style.opacity = 0.5
      })
   }
   else {
      header.style.backgroundColor = 'transparent'
      header.style.opacity = 1
      console.log('else')
   }
})
const headerArray = header.querySelectorAll('li');
let product = document.querySelector('.main__achivments')
let price = document.querySelector('.main__advices')
let contacts = document.querySelector('.main__video')
header.querySelector('button').addEventListener('click', function (e) {
   console.log('work')
   window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth"
   });
})
headerArray[0].addEventListener('click', function (e) {
   console.log('work')
   window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth"
   });
})
headerArray[1].addEventListener('click', function (e) {
   console.log('work')
   window.scrollTo({
      top: 1000,
      left: 0,
      behavior: "smooth"
   });
})
headerArray[2].addEventListener('click', function (e) {
   console.log('work')
   window.scrollTo({
      top: 2200,
      left: 0,
      behavior: "smooth"
   });
})
headerArray[3].addEventListener('click', function (e) {
   console.log('work')
   window.scrollTo({
      top: 3200,
      left: 0,
      behavior: "smooth"
   });
})