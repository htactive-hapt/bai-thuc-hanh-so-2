// class ToDo {
//     constructor(task) {
//         this.taskName = task;
//     }
// }

// myTask = new ToDo("my task");
// console.log(myTask.taskName);


function showField(valueTask) {
    document.getElementById(`add-${valueTask}`).style.display = "none";
    document.getElementById(`add-${valueTask}-field`).style.display = "block";
}

function hideField(valueTask) {
    document.getElementById(`add-${valueTask}`).style.display = "block";
    document.getElementById(`add-${valueTask}-field`).style.display = "none";
}

newTask = (taskValue) => {
    var inputTask = document.getElementById(`task${taskValue}`).value;
    if (inputTask === '') {
        alert("Could you please enter a task ?");
    } else {
        var li = document.createElement("li");
        var textNode = document.createTextNode(inputTask);
        li.appendChild(textNode);
        document.getElementById(`listTask${taskValue}`).appendChild(li);
    }
    document.getElementById(`task${taskValue}`).value = "";
    document.getElementById(`task${taskValue}`).focus();
    var itag = document.createElement("i");
    itag.className = "fa fa-pencil edit-icon";
    li.appendChild(itag);
}

var close = document.getElementsByClassName("edit-icon");
var i;
for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
    }
}