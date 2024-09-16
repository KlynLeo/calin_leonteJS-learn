const display = document.getElementById("display");

function appDisp(input)
{
    display.value += input;
}

function clearDisp()
{
    display.value = " ";
}

function calculate() {
    try {
        let result = eval(display.value);
        if (result === undefined || result === null) {
            display.value = "Error";
        } else {
            display.value = result;
        }
    }
     catch (error) {
        display.value = "Error";
    }
}

