let name = document.querySelector("#name");
let nametext = document.querySelector("#name_text");
let txtvisible = false;
let cndtxtvisible = false;
let skillstxtvisible = false;
let cnd = document.querySelector("#CnD");
let cndtxt = document.querySelector("#CnDtxt");
let skills = document.querySelector("#skills");
let skillstxt = document.querySelector("#skillstxt");



name.addEventListener("click", showText);
cnd.addEventListener("click", showTextcnd);
skills.addEventListener("click", showTextskills);

document.querySelector("#download").addEventListener("click", download);

function download() {
    window.open("pdf/Data.pdf");
}





function showText() {
    if (txtvisible == false) {
        nametext.classList.add("visible");
        txtvisible = true;
    } else {
        nametext.classList.remove("visible");
        txtvisible = false;
    }
}

function showTextcnd() {
    if (cndtxtvisible == false) {
        cndtxt.classList.add("visible");
        cndtxtvisible = true;
    } else {
        cndtxt.classList.remove("visible");
        cndtxtvisible = false;
    }
}

function showTextskills() {
    if (skillstxtvisible == false) {
        skillstxt.classList.add("visible");
        skillstxtvisible = true;
    } else {
        skillstxt.classList.remove("visible");
        skillstxtvisible = false;
    }
}
