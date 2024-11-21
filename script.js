let left=document.querySelector('.left');
let right=document.querySelector('.right');
let ghostSchool=document.querySelector('.ghostSchool');
let hauntedSchool=document.querySelector('.hauntedSchool');
let text=document.querySelector('p');
hauntedSchool.style.display="none";
let darkHallway=document.querySelector('.darkHallway')
darkhallway.style.display="none";
left.addEventListener('click',function(){

    ghostSchool.style.display="none";
    left.style.display="none";
    right.style.display="none";
    hauntedSchool.style.display="block";

    text.innerHTML="Click to eneter";
});

hauntedSchool.addEventListener('dblclick',function(){
    text.innerHTML="Let's play";
    
    
    
    });

