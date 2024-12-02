let left=document.querySelector('.left');
let right=document.querySelector('.right');
let ghostSchool=document.querySelector('.ghostSchool');
let hauntedSchool=document.querySelector('.hauntedSchool');
let text=document.querySelector('p');
hauntedSchool.style.display="none";
let darkHallway=document.querySelector('.darkHallway');
darkHallway.style.display="none";
let school=document.querySelector('.school')
let exit=document.querySelector('.exit');
exit.style.display="none";
let hauntedClassroom=document.querySelector('.hauntedClassroom')
hauntedClassroom.sty;exit.display="none";
//left button 
left.addEventListener('click',function(){

    ghostSchool.style.display="none";
    left.style.display="none";
    right.style.display="none";
    hauntedSchool.style.display="block";
    

    text.innerHTML="You are trapped in an old school filled with a bunch of school spirits. How will you find your way out? Will you make it out alive or will you become one of the school spirits? Double click to enter.";
});
//double click 
hauntedSchool.addEventListener('dblclick',function(){
    text.innerHTML="Let's play";
    hauntedSchool.style.display="none";
    darkHallway.style.display="block";
    text.innerHTML="Go down the dark school hallway and try to find your way out. ";
    
    });

//mouse eneter event
school.addEventListener('mouseenter',function(){
darkHallway.style.display="none"
text.innerHTML="You have safely exited the school!";
exit.style.display="block";
});

//right button
right.addEventListener('click',function(){
hauntedClassroom.style.display="block";

});