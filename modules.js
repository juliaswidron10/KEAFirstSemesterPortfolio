let basicUx = document.querySelector("#basicUx");
let basicWeb = document.querySelector("#basicWeb");
let introWeek = document.querySelector("#introWeek");
let basicAnimation = document.querySelector("#basicAnimation");
let basicContent = document.querySelector("#basicContent");

let pbasicUx = document.querySelector("#pbasicUX");
let pbasicWeb = document.querySelector("#pbasicWeb");
let pintroweek = document.querySelector("#pintroweek");
let pbasicAnimation = document.querySelector("#pbasicAnimation");
let pbasiccontent = document.querySelector("#pbasiccontent");


basicUx.addEventListener("click", changepux);
basicWeb.addEventListener("click", changeweb);
introWeek.addEventListener("click", changeintro);
basicAnimation.addEventListener("click", changeanimation);
basicContent.addEventListener("click", changecontent);


function changepux() {
    //    basicUx.removeEventListener("click", changepux);

    pbasicWeb.classList.remove("visible");
    pintroweek.classList.remove("visible");
    pbasicAnimation.classList.remove("visible");
    pbasiccontent.classList.remove("visible");

    pbasicUx.classList.add("visible");
    //    basicWeb.addEventListener("click", changeweb);
}

function changeweb() {
    //    basicUx.removeEventListener("click", changeweb);

    pintroweek.classList.remove("visible");
    pbasicAnimation.classList.remove("visible");
    pbasiccontent.classList.remove("visible");
    pbasicUx.classList.remove("visible");

    pbasicWeb.classList.add("visible");
    //    basicWeb.addEventListener("click", changeweb);
}


function changeintro() {
    //    basicUx.removeEventListener("click", changepux);

    pbasicWeb.classList.remove("visible");
    pbasicAnimation.classList.remove("visible");
    pbasiccontent.classList.remove("visible");
    pbasicUx.classList.remove("visible");

    pintroweek.classList.add("visible");
    //    basicWeb.addEventListener("click", changeweb);
}

function changeanimation() {
    //    basicUx.removeEventListener("click", changepux);

    pbasicWeb.classList.remove("visible");
    pintroweek.classList.remove("visible");
    pbasiccontent.classList.remove("visible");
    pbasicUx.classList.remove("visible");

    pbasicAnimation.classList.add("visible");
    //    basicWeb.addEventListener("click", changeweb);
}

function changecontent() {
    //    basicUx.removeEventListener("click", changepux);

    pbasicWeb.classList.remove("visible");
    pintroweek.classList.remove("visible");
    pbasicAnimation.classList.remove("visible");
    pbasicUx.classList.remove("visible");

    pbasiccontent.classList.add("visible");
    //    basicWeb.addEventListener("click", changeweb);
}
