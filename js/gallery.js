"use strict";
(function(){

  const images = [
    "images/1.jpg",
    "images/2.jpg",
    "images/3.jpg"
  ];
  let num = 0;

  const getNext = () => {
    num++;
    if (num >= images.length) num = 0;
  }

  const getPrev = () => {
    num--;
    if (num < 0) num = images.length-1;
  }

  const changeImg = () => {
    event.target.id === "next" ? getNext() : getPrev()
    slider.src = images[num];
  }

  next.addEventListener('click', changeImg);
  prev.addEventListener('click', changeImg);

})()
// single changeImg ternary calling separate functions]