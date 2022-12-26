console.log(document.domain);
console.log(document.URL);
console.log(document.title);
console.log(document.title);
console.log(document.doctype);
console.log(document.head);
console.log(document.body);
console.log(document.all);
console.log(document.form[0]);

console.log(document.getElementById);
headerTittle.textContent="Hello";

//getElementById bt tag name

var li= document.getElementsByTagName('li');
console.log(li);
console.log(li[1]);
li[1].textContent='Hello 2';
li[1].style.fontWeight='bold';
li[1].style.backgroundColor='yellow';
for(var i=0;i<li.length;i++){
    li[i].style.backgroundColor='#f4f4f4';
}