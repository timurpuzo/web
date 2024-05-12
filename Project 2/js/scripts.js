/*!
* Start Bootstrap - Business Casual v7.0.9 (https://startbootstrap.com/theme/business-casual)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-business-casual/blob/master/LICENSE)
*/
// Highlights current date on contact page
window.addEventListener('DOMContentLoaded', event => {
    const listHoursArray = document.body.querySelectorAll('.list-hours li');
    listHoursArray[new Date().getDay()].classList.add(('today'));
})

let images = document.querySelectorAll('img')
let wrapper = document.getElementById('wrapper')
let imgWrapper = document.getElementById('fullImg')
let close = document.querySelector('span')
console.log(images);
console.log(wrapper);
console.log(imgWrapper);
console.log(close);

images.forEach((img, index) => {
    img.addEventListener('click',()=>{
        openModal(assets/img$(index).jpg)
    })
})


function openModal(pic){
    wrapper.style.display = "flex";
    imgWrapper.src = pic;
}

