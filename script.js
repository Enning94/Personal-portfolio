// alert("text");

// console.log("hello");
// const hamburger= document.getElementsByClassName(hamburger);
// const navUL= document.getElementsByClassName(navi-header);

// hamburger.addEventListener ('click', ()=>{
//     navULclassList.toggle('show');
// });
// navUL.addEventListener ('click', ()=>{
//     navULclassList.toggle('show');
// });
const hamburger = document.querySelector ('#Hamburger');
const naviHeader= document.querySelector('.naviHeader');

hamburger.addEventListener('click', ()=> {
    naviHeader.classList.toggle('open')
}

)