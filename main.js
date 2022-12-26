
const box = document.getElementById('box');

// 👇️ Change text color on mouseover
box.addEventListener('mouseover', function handleMouseOver() {
  box.style.color = 'red';
});

// 👇️ Change text color back on mouseout
box.addEventListener('mouseout', function handleMouseOut() {
  box.style.color = 'black';
});
const box1=document.getElementById('box1');
box1.addEventListener('mouseover' ,function bigImg(){
    box1.style.height = "64px";
    box1.style.width = "64px";
});
box1.addEventListener('mouseout', function normalImg(){
    box1.style.height = "32px";
    box1.style.width = "32px";
  });
