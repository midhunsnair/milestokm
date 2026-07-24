function convert() {

    let value = document.getElementById("value").value;
    let conversion = document.getElementById("conversion").value;
    let result;

    if (conversion === "mtok") {
        result = value * 1.60934;
        document.getElementById("result").innerHTML =
            value + " miles = " + result.toFixed(2) + " kilometers";
    } else {
        result = value / 1.60934;
        document.getElementById("result").innerHTML =
            value + " kilometers = " + result.toFixed(2) + " miles";
    }

}
