const title = document.querySelector(".hello")
title.style.fontSize = "9vh";
outputElement = document.querySelector(".output");

btn = document.querySelector(".btn");

const ul = document.querySelector('.list');
const liMaker = (text) => {
    const li = document.createElement('li');
    li.textContent = text;
    ul.appendChild(li);
  }

function handleBtnClick() {
  console.log("I have been clicked");
  console.log(title.style.fontSize);
  title.style.fontSize = "18vh";

  
  liMaker('HI')
  
  console.log("H")
  console.log(title.style.color);
}





btn.addEventListener("click", handleBtnClick);

