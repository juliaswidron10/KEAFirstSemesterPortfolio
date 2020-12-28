let min1 = document.querySelector("#min1");
let min2 = document.querySelector("#min2");
let min3 = document.querySelector("#min3");
let min4 = document.querySelector("#min4");
let bigpic = document.querySelector("#im");
let name = document.querySelector("#name");
let nametext = document.querySelector("#name_text");
let txtvisible = false;
let cndtxtvisible = false;
let skillstxtvisible = false;
let cnd = document.querySelector("#CnD");
let cndtxt = document.querySelector("#CnDtxt");
let skills = document.querySelector("#skills");
let skillstxt = document.querySelector("#skillstxt");


min2.addEventListener("click",switchphoto2);
min1.addEventListener("click",switchphoto1);
min3.addEventListener("click",switchphoto3);
min4.addEventListener("click",switchphoto4);
name.addEventListener("click",showText);
cnd.addEventListener("click",showTextcnd);
skills.addEventListener("click",showTextskills);
document.querySelector("#download").addEventListener("click",download);

function download(){
    window.open("pdf/History.pdf");
}

function switchphoto1(){
    bigpic.classList.remove("pic2");
    bigpic.classList.remove("pic3");
    bigpic.classList.remove("pic4");
    bigpic.classList.add("pic1");
}

function switchphoto2(){
    bigpic.classList.remove("pic1");
    bigpic.classList.remove("pic3");
    bigpic.classList.remove("pic4");
    bigpic.classList.add("pic2");
}
function switchphoto3(){
    bigpic.classList.remove("pic1");
    bigpic.classList.remove("pic2");
    bigpic.classList.remove("pic4");
    bigpic.classList.add("pic3");
}
function switchphoto4(){
    bigpic.classList.remove("pic1");
    bigpic.classList.remove("pic3");
    bigpic.classList.remove("pic2");
    bigpic.classList.add("pic4");
}


function showText(){
    if(txtvisible == false){
        nametext.classList.add("visible");
        txtvisible = true;
    }else{
        nametext.classList.remove("visible");
        txtvisible = false;
    }
}
function showTextcnd(){
    if(cndtxtvisible == false){
        cndtxt.classList.add("visible");
        cndtxtvisible = true;
    }else{
        cndtxt.classList.remove("visible");
        cndtxtvisible = false;
    }
}

function showTextskills(){
    if(skillstxtvisible == false){
        skillstxt.classList.add("visible");
        skillstxtvisible = true;
    }else{
        skillstxt.classList.remove("visible");
        skillstxtvisible = false;
    }
}