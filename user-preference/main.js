
let fontSize = document.querySelector("#font-size");
let bgColor = document.querySelector("#bg-color");
let resetButton = document.querySelector("#reset-button");
let mainBody = document.querySelector(".body");


function setValues(fSize,bgc){
    fontSize.value = fSize;
    bgColor.value = bgc;
    mainBody.style.fontSize = fSize;
    mainBody.style.backgroundColor = bgc;
}


// initialSetup 
function initialSetup() {
    const sFontSize = localStorage.getItem("fontSize");
    const sBgColor = localStorage.getItem("bgColor");

    if (fontSize && bgColor) {
        setValues(sFontSize,sBgColor);
    }

    if (!sFontSize && !sBgColor) {
        setValues("16px","Gold");
    }

    if (!sFontSize && sBgColor) {
        setValues("16px",sBgColor);
    }

    if (sFontSize && !sBgColor) {
        setValues(sFontSize,"Gold");
    }

}

const changeFontSize = (event) => {
    selectedFontSize = event.target.value;
    mainBody.style.fontSize = selectedFontSize;
    localStorage.setItem("fontSize", selectedFontSize);
}
const changeBgColor = (event) => {
    selectedBgColor = event.target.value;
    mainBody.style.backgroundColor = selectedBgColor;
    localStorage.setItem("bgColor", selectedBgColor);
}
const resetAll = (event) => {
    localStorage.removeItem("fontSize");
    localStorage.removeItem("bgColor");
    fontSize.value = "16px";
    bgColor.value = "Gold";
    mainBody.style.fontSize = "16px";
    mainBody.style.backgroundColor = "Gold";
}



// addEventListener 

fontSize.addEventListener("change", changeFontSize);
bgColor.addEventListener("change", changeBgColor);
resetButton.addEventListener("click", resetAll);

initialSetup();