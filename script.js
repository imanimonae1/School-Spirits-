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
let hauntedClassroom=document.querySelector('.hauntedClassroom');
hauntedClassroom.style.display="none";
let schoolLunchroom=document.querySelector('.schoolLunchroom');
schoolLunchroom.style.display="none";
let pumpkin=document.querySelector('.pumpkin');
pumpkin.style.display="none";
let niceSpirit=document.querySelector('.niceSpirit');
niceSpirit.style.display="none";
let evilSpirit=document.querySelector('.evilSpirit');
evilSpirit.style.display="none";
//left button 
left.addEventListener('click',function(){

    ghostSchool.style.display="none";
    left.style.display="none";
    right.style.display="none";
    hauntedSchool.style.display="none";
    hauntedClassroom.style.display="none";
    schoolLunchroom.style.display="none";
    pumpkin.style.display="none";
    darkHallway.style.display="block";
    school.style.display="block";
    niceSpirit.style.display="none";
   evilSpirit.style.display="none";
   exit.style.display="none";
    text.innerHTML="You are trapped in an old school filled with a bunch of school spirits. How will you find your way out? Will you make it out alive or will you become one of the school spirits? Double click to enter. Or hover over the school emoji to go down a different path.";
});

//double click 
darkHallway.addEventListener('dblclick',function(){
    hauntedSchool.style.display="none";
    darkHallway.style.display="none";
    hauntedClassroom.style.display="none";
    text.innerHTML="You go down the dark hallway and exit out alive!";
    schoolLunchroom.style.display="none";
    school.style.display="none";
    niceSpirit.style.display="none";
    evilSpirit.style.display="none";
    exit.style.display="block";
    });

//mouse eneter event
school.addEventListener('mouseenter',function(){
darkHallway.style.display="none"
text.innerHTML="You never make it out the school and become one of the school spirits. You end up all alone.";
exit.style.display="none";
hauntedClassroom.style.display="none";
schoolLunchroom.style.display="block";
niceSpirit.style.display="none";
evilSpirit.style.display="none";
});

//right button
right.addEventListener('click',function(){
hauntedClassroom.style.display="block";
ghostSchool.style.display="none";
hauntedSchool.style.display="none";
exit.style.display="none";
school.style.display="none";
text.innerHTML="You are trapped inside a school filled with school spirits and you walk inside the gym to try and find your way out. You then see all of the school spirits in some meeting so you proceed to talk to them. Press A to have a nice school spirit help you out the school, or hover over the pumpkin to have another spirit lead you down a different path.";
schoolLunchroom.style.display="none";
pumpkin.style.display="block";
left.style.display="none";
right.style.display="none";
niceSpirit.style.display="none";
evilSpirit.style.display="none";
});

//mouse enter event 2
pumpkin.addEventListener('mouseenter',function(){
hauntedClassroom.style.display="none";
text.innerHTML=" You never find your way out!";
niceSpirit.style.display="none";
evilSpirit.style.display="block";

text.innerHTML="You end up going with an evil spirit and you get tricked. You end up trapped in the school and become one of the spirits."
});

//keydown
document.addEventListener('keydown',function(event){
if(event.keyCode==65){
    niceSpirit.style.display="block";
    hauntedClassroom.style.display="none";
    text.innerHTML="You end up setting their spirit free and getting both of you all out of the school. Now you have to wait until another human comes out the school to be set free.";
    evilSpirit.style.display="none";
    pumpkin.style.display="none";
}
});