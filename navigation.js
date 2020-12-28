let burger = document.querySelector("#burgermob");
let menu = document.querySelector("#menu_open");
let menuopen = false;
//let top = document.querySelector("#top");

burger.addEventListener("click",openMenu);
function openMenu(){
    if (menuopen == false){
        menu.classList.add("menvisible");
        menuopen = true;
//        top.classList.add("toptrans");
    } else{
        menu.classList.remove("menvisible");
        menuopen = false;
    }
}
