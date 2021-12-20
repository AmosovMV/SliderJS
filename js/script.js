let imageArray = [
  {
    url: './image/image_1.png',
    title: "Рис1"
  },
  {
    url: './image/image_2.png',
    title: "Рис2"
  },
  {
    url: './image/image_3.png',
    title: "Рис3"
  },
];


function initImageSlider() {
  let sliderImg = document.querySelector(".project-image-select");
  let selectLeft = document.querySelector('.select-left');
  let selectRight = document.querySelector('.select-right');
  let lineSelectLeft = document.querySelector('.line-select-left');
  let lineSelectRight = document.querySelector('.line-select-right');
  let dotsSelect = document.querySelector('.dot-select');
  let linkSelect = document.getElementsByClassName('select-items_link');
  let pointSelectLeft = document.querySelector('.point-select-left');
  let pointSelectRight = document.querySelector('.point-select-right');

  ////////////// инициализация массива изображений

  function initImage() {
    imageArray.forEach(function (item, index) {
      let imgDiv = `<div class="img${index} image ${index === 0 ? "currentImg" : ""}" style=background-image:url(${imageArray[index].url}) data-index=${index}></div>`;
      sliderImg.innerHTML += imgDiv;
    })
  };

  initImage();

  ///////////// 
  function initSelect() {
    let currentIndex = +sliderImg.querySelector(".currentImg").dataset.index;
    let nextIndex = 0;

    /////////обработка события клика на стрелках

    selectRight.addEventListener('click', function () {
      nextIndex === imageArray.length - 1 ? nextIndex = 0 : nextIndex += 1;
      moveCurrentImg(nextIndex);
    })
    selectLeft.addEventListener('click', function () {
      nextIndex === 0 ? nextIndex = imageArray.length - 1 : nextIndex -= 1;
      moveCurrentImg(nextIndex);
    })

    ////////обработка события клика на линиях 

    lineSelectRight.addEventListener('click', function () {
      nextIndex === imageArray.length - 1 ? nextIndex = 0 : nextIndex += 1;
      moveCurrentImg(nextIndex);
    });

    lineSelectLeft.addEventListener('click', function () {
      nextIndex === 0 ? nextIndex = imageArray.length - 1 : nextIndex -= 1;
      moveCurrentImg(nextIndex);
    });

    //////////обработка события клика на точках

    pointSelectRight.addEventListener('click', function () {
      nextIndex === imageArray.length - 1 ? nextIndex = 0 : nextIndex += 1;
      moveCurrentImg(nextIndex);
    });

    pointSelectLeft.addEventListener('click', function () {
      nextIndex === 0 ? nextIndex = imageArray.length - 1 : nextIndex -= 1;
      moveCurrentImg(nextIndex)
    });
  }

  initSelect();

  function moveCurrentImg(numb) {
    /////////////активное изображение
    sliderImg.querySelector('.currentImg').classList.remove("currentImg");
    sliderImg.querySelector('.img' + numb).classList.add("currentImg");
    ///////////// активная точка
    dotsSelect.querySelector('.active').classList.remove('active');
    dotsSelect.querySelector('.point' + numb).classList.add('active');
    ////////////// активная ссылка   
    document.querySelector('.link.active').classList.remove('active');
    linkSelect[`${numb}`].className = 'select-items_link link active';
  };

  ////////////////////точки 

  function initPoint() {
    imageArray.forEach((image, index) => {
      let dot = document.createElement('div');
      dot.className = `point point${index} ${index === 0 ? "active" : ""}`;
      dot.dataset.index = index;
      dot.addEventListener("click", function () {
        moveCurrentImg(this.dataset.index);
      });
      dotsSelect.appendChild(dot);
    });
  };

  initPoint();

  //////////////////ссылки

  function initLink() {
    imageArray.forEach((image, index) => {
      linkSelect[index].className = `select-items_link link ${index === 0 ? "active" : ""}`
      let linkIndex = index;
      linkSelect[index].onclick = function () {
        moveCurrentImg(linkIndex);
      };
    });
  };

  initLink();

};

document.addEventListener("DOMContentLoaded", initImageSlider);