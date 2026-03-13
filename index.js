const textBox = document.getElementById("textBox");
const toFh = document.getElementById("toFh");
const toC  = document.getElementById("toC");
const result = document.getElementById("result");
let temp;


function convert(){

    if(toFh.checked){
        temp = Number(textBox.value);
        temp = temp * 9 / 5 + 32;
        result.textContent = temp.toFixed(1) + "℉";
    }
    else if(toC.checked){
        temp = Number(textBox.value);
        temp = (temp - 32) * (5/9);
        result.textContent = temp.toFixed(1) + "℃";
    }
    else{
        result.textContent = "Select a unit";
    }
}