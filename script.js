let left=document.querySelector('.left');
let right=document.querySelector('.right');
let ghostSchool=document.querySelector('.ghostSchool');
let hauntedSchool=document.querySelector('.hauntedSchool');
let text=document.querySelector('p');
hauntedSchool.style.display="none";
let darkHallway=document.querySelector('.darkHallway');
darkHallway.style.display="none";
let school=document.querySelector('.school')
school.style.display="none";
let exit=document.querySelector('.exit');
exit.style.display="none";
let hauntedClassroom=document.querySelector('.hauntedClassroom')
hauntedClassroom.style.display="none";
let schoolLunchroom=document.querySelector('.schoolLunchroom')
schoolLunchroom.style.display="none";
let pumpkin=document.querySelector('.pumpkin');
pumpkin.style.display="none";
//left button 
left.addEventListener('click',function(){

    ghostSchool.style.display="none";
    left.style.display="none";
    right.style.display="none";
    hauntedSchool.style.display="block";
    hauntedClassroom.style.display="none";
    schoolLunchroom.style.display="none";
    pumpkin.style.display="none";

    text.innerHTML="You are trapped in an old school filled with a bunch of school spirits. How will you find your way out? Will you make it out alive or will you become one of the school spirits? Double click to enter.";
});
//double click 
hauntedSchool.addEventListener('dblclick',function(){
    text.innerHTML="Let's play";
    hauntedSchool.style.display="none";
    darkHallway.style.display="block";
    hauntedClassroom.style.display="none";
    text.innerHTML="Go down the dark school hallway and try to find your way out. Find the school emoji to find your way out. ";
    schoolLunchroom.style.display="none";
    school.style.display="block";
    });

//mouse eneter event
school.addEventListener('mouseenter',function(){
darkHallway.style.display="none"
text.innerHTML="You have safely exited the school!";
exit.style.display="block";
hauntedClassroom.style.display="none";
});

//right button
right.addEventListener('click',function(){
hauntedClassroom.style.display="block";
ghostSchool.style.display="none";
hauntedSchool.style.display="none";
exit.style.display="none";
school.style.display="none";
text.innerHTML="You get locked in one of the classrooms. Hover over the pumpkin to go to the next place.";
schoolLunchroom.style.display="none";
pumpkin.style.display="block";
left.style.display="none";
right.style.display="none";
});
//mouse enter event 2
pumpkin.addEventListener('mouseenter',function(){
hauntedClassroom.style.display="none";
text.innerHTML=" You never find your way out!";
schoolLunchroom.style.display="block";

});