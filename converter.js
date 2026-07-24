function convert() {
    let miles = document.getElementById("miles").value;

    let kilometers = miles * 1.60934;

    document.getElementById("result").innerHTML =
        miles + " miles = " + kilometers.toFixed(2) + " km";
}