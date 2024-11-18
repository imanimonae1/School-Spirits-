let left=document.querySelector('.left');
let right=document.querySelector('.right');
let leftRight=document.querySelector('.leftorRight');
let hauntedSchool=document.querySelector('.hauntedSchool');
let text=document.querySelector('p');
hauntedSchool.style.display="none";

left.addEventListener('click',function(){

    leftRight.style.display="none";
    left.style.display="none";
    right.style.display="none";
    hauntedSchool.style.display="block";

    text.innerHTML="Click to eneter";
});

hauntedSchool.addEventListener('dblclick',function(){
    text.innerHTML="Let's play";
    
    
    });