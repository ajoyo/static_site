var naveg = document.getElementsByClassName("naveg");
var nav_button= document.getElementsByClassName("naveg_button");
var hide= document.getElementsByClassName("hidden");
var html= document.getElementsByTagName("html");
function showMenu(){
    hide[0].style.display="block";
    hide[1].style.float="none";
    nav_button[0].style.display="none";
    hide[1].style.display="block";
} 
function hideMenu(){
    nav_button[0].style.display="inline";
    hide[0].style.display="none";
    hide[1].style.display="none";
} 
html[0].onresize=function(){
    if(html[0].clientWidth<570){
        nav_button[0].style.display="inline";
        hide[0].style.display="none";
        hide[1].style.display="none";
    } else{
        nav_button[0].style.display="none";
    }
}
nav_button[0].addEventListener('click', showMenu, false);
hide[0].addEventListener('click', hideMenu, false);