"use strict";
(function(){

  const images = [
    "images/1.jpg",
    "images/2.jpg",
    "images/3.jpg"
  ];
  let num = 0;

  const changeImg = () => slider.src = images[num];

  const nextImg = () => {
    num++;
    if (num >= images.length) num = 0;
    changeImg();
  }

  const prevImg = () => {
    num--;
    if (num < 0) num = images.length-1;
    changeImg();
  }

  next.addEventListener('click', nextImg);
  prev.addEventListener('click', prevImg);

})()
// separate next and prev functions