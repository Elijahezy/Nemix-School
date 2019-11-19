var menuHidden = document.querySelector('.menu-hidden');
var	mainPage = document.querySelector('.main-page');
var	menuOpen = document.querySelector('.menu-block');
var	menuClose = document.querySelector('.close');

menuOpen.onclick = function () {
	mainPage.style.display = 'none';
	menuHidden.style.display = 'block';
}

menuClose.onclick = function () {
	mainPage.style.display = 'block';
	menuHidden.style.display = 'none';

}

var advantagesToggle = document.querySelectorAll('.flex-third > p');

var advantagesToggleArray = Array.prototype.slice.call(advantagesToggle);

const clName = 'pOnTarget';

const addOrRemoveTargetClass = function (n) {
  advantagesToggleArray.forEach(function (node) {
    if(!n.isEqualNode(node))
      node.classList.remove(clName);
  })
}

advantagesToggleArray.forEach(function (node) {
  node.onclick = function () {  
    addOrRemoveTargetClass(node);
    
  node.classList.toggle('pOnTarget');

let previousId = null;
  
function getDivById (id) {
	return document.getElementById(id);
}
  
function showDiv (node) {
	const id = node.getAttribute('data-target');
  	const div = getDivById(id);
  
  if(previousId) {   
    const previousDiv = getDivById(previousId);
    if(previousDiv) {
      previousDiv.style.display = 'none';
    }
  }
  
  if(div.style.display === 'none') {
    div.style.display = 'block';
  }
  else 
    div.style.display = 'none';
  
  previousId = id;
}


}});


