"use strict";
(function(){

  const images = [
    "images/1.jpg",
    "images/2.jpg",
    "images/3.jpg"
  ];
  let num = 0;

  const changeImg = () => {
    if (event.target.id === "next") {
      num++;
      if (num >= images.length) num = 0;
    } else if (event.target.id === "prev") {
      num--;
      if (num < 0) num = images.length-1;
    }
    slider.src = images[num];
  }

  next.addEventListener('click', changeImg);
  prev.addEventListener('click', changeImg);

})()
// single changeImg function with if-else and nestef if statements