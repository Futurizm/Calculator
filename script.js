

const display = document.getElementById('calculator__display');


function clearText() {
    display.value = "";
}

function addText(input) {
    display.value += input;
}

function calcText() {
    try {
        display.value = eval(display.value);    
    }
    catch(error) {
        if(error.message) {
            alert("Error occured");
            display.value = "";
        }
    }
}