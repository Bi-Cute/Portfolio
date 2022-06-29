filterSelection("all")
function filterSelection(select) {
    var x, i;
    x = document.getElementsByClassName("work__card");
    if (select == "all") select = "";
    for (i = 0; i < x.length; i++) {
        RemoveClass(x[i], "prtfolio_grid_box_show");
        if (x[i].className.indexOf(select) > -1) AddClass(x[i], "prtfolio_grid_box_show");
}}

function AddClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        if (arr1.indexOf(arr2[i]) == -1) {
        element.className += " " + arr2[i];
    }}
}

    function RemoveClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        while (arr1.indexOf(arr2[i]) > -1) {
        arr1.splice(arr1.indexOf(arr2[i]), 1);
        }}
    element.className = arr1.join(" ");
}

let buttonContainer = document.querySelector(".work__filters");
var buttons = buttonContainer.getElementsByClassName("work__item");
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active-work");
    current[0].className = current[0].className.replace(" active-work", "");
    this.className += " active-work";
    });
}