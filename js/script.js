let imageArray = [
  {
    url: './asset/58.jpg',
    title: "Рис1"
  },
  {
    url: './asset/41.jpg',
    title: "Рис2"
  },
  {
    url: './asset/43.jpg',
    title: "Рис3"
  },
];


function initImageSlider() {
  let slider_img = document.querySelector(".slider_img");
  let point_select_left = document.querySelector('.point-select-left');
  let point_select_right = document.querySelector('.point-select-right');



  function initImage() {
    imageArray.forEach(function (item, index) {
      let imgDiv = `<div class="img${index} image ${index === 0 ? "currentImg" : ""}" style=background-image:url(${imageArray[index].url}) data-index=${index}></div>`;
      slider_img.innerHTML += imgDiv;
    })
  };

  initImage();

  function initSelect() {
    let currentIndex = +slider_img.querySelector(".currentImg").dataset.index;
    let nextIndex=0;
    point_select_right.addEventListener('click', function () {
      nextIndex === imageArray.length-1 ? nextIndex = 0 : nextIndex += 1;
      moveCurrentImg(nextIndex);
    })
    point_select_left.addEventListener('click', function () {
      nextIndex === 0 ? nextIndex = imageArray.length-1 : nextIndex -= 1;
      moveCurrentImg(nextIndex);
    })
  }

  initSelect();

  function moveCurrentImg(numb) {
    slider_img.querySelector('.currentImg').classList.remove("currentImg");
    slider_img.querySelector('.img' + numb).classList.add("currentImg");
  };

};

document.addEventListener("DOMContentLoaded", initImageSlider);
