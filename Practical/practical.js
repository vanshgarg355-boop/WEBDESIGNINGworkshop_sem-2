function calculetetemp() {
    let n = parseFloat(document.getElementById("userinput").value);

    let kelvin = n + 273;

    document.getElementById("result").innerHTML =
        "Temperature in kelvin is " + kelvin;
}