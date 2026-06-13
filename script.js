let display = document.getElementById("display");

function appendValue(value)
{
    display.value += value;
}

function clearDisplay()
{
    display.value = "";
}

function deleteLast()
{
    display.value = display.value.slice(0,-1);
}

function calculate()
{
    try
    {
        display.value = eval(display.value);
    }

    catch(error)
    {
        display.value = "Error";
    }
}

function powerValue()
{
    display.value = Math.pow(display.value,2);
}

function sinValue()
{
    display.value = Math.sin(display.value);
}

function cosValue()
{
    display.value = Math.cos(display.value);
}

function logValue()
{
    display.value = Math.log10(display.value);
}