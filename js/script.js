let imageArray = [{ src: "./asset/58.jpg" }, { src: "./asset/41.jpg" }];

function initImageSlider() {
  let slider_img = document.querySelector(".slider_img");
  let point_select = document.querySelector('.point-select');


  
  function initImage() {
    imageArray.forEach(function(item,index){
      let imgDiv = `<div class="image_${index} ${index===0? "currentImg":""}" style="backgroung-image:src(${imageArray[index].src})"></div>`;
      slider_img.innerHTML += imgDiv;
    })
  };
initImage();
}

document.addEventListener("DOMContentLoaded", initImageSlider);
