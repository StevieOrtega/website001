/* 01/13/23  
1. Get the variables from the dom then start assiging the data to a variable for use
2. we then want to automatically create a div
3. assign the div with a class name for css rules
4. then we want to append the image to the background of the first section 
*/
" use strict";
//Variables
const backImg = document.getElementById("background-img");
const videoImg = document.getElementById("video-container");

const createFrontPageText = function () {
  const textBox = document.createElement("div");
  textBox.className = "main-text";
  textBox.insertAdjacentHTML(
    "afterbegin",
    'djsjd<h1 class="main-header">SuperCharge Accessibility</h1><p main-text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore natusillum dolorum autem officiis minima ullam necessitatibus, accusantiumvsint totam soluta nihil perferendis non corrupti dolorem architecto consequuntur quos similique. </p>'
  );
  return textBox;
};

const displayBackImg = function () {
  const img = document.createElement("img");
  img.className = "backImg";
  img.src = "/img/TigerKing.jpg";
  backImg.appendChild(img);
  const imgDiv = document.getElementsByClassName("backImg")[0];
  imgDiv.appendChild(createFrontPageText());
};
displayBackImg();

const displayVideoImg = function () {
  const img = document.createElement("img");
  img.className = "videoImg";
  img.src = "/img/TigerKing.jpg";
  videoImg.appendChild(img);
};
displayVideoImg();
/*         
  ----- To D0 --------
  1. input the text over the back ground image. 


*/
