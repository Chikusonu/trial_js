var headline=document.querySelector('#header-title');
headline.style.color='yellow';
var card=document.querySelector('.title');
card.style.color='royalblue';
var card1=document.querySelector('#items');
card1.style.color='red';
var card1=document.querySelector('.list-group-item:last-child');
card1.style.color='orange';
var card1=document.querySelector('.list-group-item:nth-child(3)');
card1.style.color='orange';
var card1=document.querySelectorAll('.list-group-item');
card1[1].style.color='orange';

var itemList=document.querySelector('#items');
console.log(itemList.parentNode);

//parentElement
itemList.parentElement.style.backgroundColor='#f4f4f4';
console.log(itemList.parentElement);

//childnodes
console.log(itemList.childNodes);

console.log(itemList.children);
console.log(itemList.children[1]);
itemList.children[1].style.backgroundColor='yellow';

console.log(itemList.firstChild);

console.log(itemList.firstElementChild);
itemList.firstElementChild.textContent='Hello';

console.log(itemList.nextSibling);
console.log(itemList.nextElementSibling);

console.log(itemList.previousSibling);
console.log(itemList.previousElementSibling);
itemList.previousElementSibling.style.color='green';
var newDiv=document.createElement('div');
newDiv.className='hello';
console.log(newDiv);





