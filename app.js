var listOfActivities = [];

var input = document.getElementById("input");

var tdlist = document.getElementById("todolist");

var btn = document.getElementById("button");
btn.onclick = click;

function click() {
    listOfActivities.push(input.value);
    console.log(listOfActivities);
    input.value = "";
    showList();
}

function showList() {
    tdlist.innerHTML =  " ";

    listOfActivities.forEach(function (n, i){
        tdlist.innerHTML +=
        "<li>" +
        n + 
        "<a onclick='editItem(" +
        i +
        ")'>Edit</a>" +
        "<a onclick='deleteItem(" +
        i +
        ")'>&times  | </a></li>";

    });
}


function deleteItem(i) {
    listOfActivities.splice(i, 1);
    showList();
}


function  editItem(i) {
    var newValue = prompt("Please insert your new value");
    listOfActivities.splice(i, 1, newValue);
    showList();
}