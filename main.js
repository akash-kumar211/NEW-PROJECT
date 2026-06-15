const btn = document.querySelector(".hangBugger");
const menu = document.querySelector(".linksContainer");

btn.addEventListener('click', (event) => {
    event.stopPropagation();

    if (menu.style.left === "-100%") {
    menu.style.left = "0";
} else {
    menu.style.left = "-100%";
}
});

document.body.addEventListener('click', (event) => {
    event.stopPropagation();
     if(menu.style.left === "0px"){
        menu.style.left = "-100%"
    }
})