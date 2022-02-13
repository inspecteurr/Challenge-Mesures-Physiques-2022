const loader= document.querySelector('.loader');

window.addEventListener('load', () =>{
        loader.classList.add('delete');
})

// *******************************************************************************************************************
const cursor1= document.getElementById('cursor1');

const cursor2 = document.getElementById('cursor2');

const cursor3 = document.getElementById('cursor3');

const nav = document.querySelector('nav');

const page1 = document.getElementById('page1');
const page2 = document.getElementById('page2');
const page3 = document.getElementById('page3');
const page4 = document.getElementById('page4');
const page5 = document.getElementById('page5');
const page6 = document.getElementById('page6');
const page7 = document.getElementById('footer');
const body = document.querySelector("body");
const puyDeDome = document.getElementById('puy_de_dome');
const title = document.getElementById('title');


body.addEventListener('mousemove', e => {

        cursor1.setAttribute('style', 'top:'+(e.pageY)+"px; left:"+(e.pageX)+"px;")
        cursor1.style.zIndex = '2';

        cursor2.setAttribute('style', 'top:'+(e.pageY)+"px; left:"+(e.pageX)+"px;")
        cursor2.style.zIndex = '2';
        
})

page1.addEventListener('mousemove', e => {

        cursor1.setAttribute('style', 'top:'+(e.pageY)+"px; left:"+(e.pageX)+"px;")
        cursor1.style.zIndex = '2';

        cursor2.setAttribute('style', 'top:'+(e.pageY)+"px; left:"+(e.pageX)+"px;")
        cursor2.style.zIndex = '2';
        
})


// *******************************************************************************************************************

const humberger = document.getElementById('humberger');
const nav_tel = document.querySelector('.nav_tel');

const trait1 = document.querySelector('.one');
const trait2 = document.querySelector('.two');
const trait3 = document.querySelector('.three');

humberger.addEventListener('click', NavTelOpen);
// humberger.addEventListener('mouseleave', NavTelClose);

function NavTelOpen(){
        humberger.classList.add('.active1');
        trait2.classList.add('.active2');
        trait3.classList.add('.active3');
}
function NavTelClose(){
        trait1.classList.remove('.active1');
        trait2.classList.remove('.active2');
        trait3.classList.remove('.active3');
}