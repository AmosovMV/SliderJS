let imageArray = [{ url: "./asset/58.jpg" }, { url: "./asset/41.jpg" }];

function initImageSlider() {
  let slider_img = document.querySelector(".slider_img");
  let point_select = document.querySelector('.point-select');


  
  function initImage() {
    imageArray.forEach(function(item,index){
      let imgDiv = `<div class="img_${index} image ${index === 0? "currentImg" : ""}" style=background-image:url(${imageArray[index].url})></div>`;
      slider_img.innerHTML += imgDiv;
    })
  };

  initImage();
  
};

document.addEventListener("DOMContentLoaded", initImageSlider);
