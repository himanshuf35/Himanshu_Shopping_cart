var Interval_Var;
var color_array = ["#4286f4", "#9e42f4", "#f46e42", "#36601c", "#555953"];

function start_random() {
    Interval_Var = setInterval(myTimer, 5000);
}

function myTimer() {
    var x = Math.floor((Math.random() * 10) + 1);
    var y = x % 5;
    document.getElementById("background_color").style.backgroundColor = color_array[y];
    document.getElementById("Color").value = color_array[y];

}

function stop_random() {
    clearInterval(Interval_Var);
}

function change_color() {
    var color_change = document.getElementById("Color").value;
    document.getElementById("background_color").style.backgroundColor = color_change;
}