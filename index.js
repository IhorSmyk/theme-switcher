

let inputRef = document.querySelector("#dark-mode");


// console.log(inputRef.getComputedStyle());


console.log(window.getComputedStyle(inputRef, ":before").colorInterpolation);
