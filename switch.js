const refs = {
    toggle: document.querySelector(".toggle"),
    body: document.querySelector("body"),
}

refs.toggle.addEventListener("change", () => {refs.body.style.backgroundColor = "#000000"; });




// if (refs.toggle.hasAttribute("checked")) {
//     refs.body.style.backgroundColor = "#ff0000";
// }



