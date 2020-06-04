// class ToDo {
//     constructor(task) {
//         this.taskName = task;
//     }
// }

// myTask = new ToDo("my task");
// console.log(myTask.taskName);


function displayDiv(hide, show) {
    document.getElementById(hide).style.display = "none";
    document.getElementById(show).style.display = "block";
}


// editTask = (listId, taskId) => {
//     var editTaskByModal = document.getElementById(`${listId}-${taskId}`).innerText;
//     var decs = "Hà dang ngoi choi cờ vua!";
//     document.getElementById(`${listId}-${taskId}`).setAttribute("data-toggle", "modal");
//     document.getElementById(`${listId}-${taskId}`).setAttribute("data-target", "#myModal");
//     document.getElementById("titleModal").innerHTML = editTaskByModal;
//     let p = document.createElement('p');
//     p.innerHTML = decs;
//     document.getElementById("decsModal").appendChild(p);
// }


// editTask = (listId, taskId) => {
//     var editTaskByModal = document.getElementById(`${listId}-${taskId}`).innerText;
//     document.getElementById(`${listId}-${taskId}`).setAttribute("data-toggle", "modal");
//     document.getElementById(`${listId}-${taskId}`).setAttribute("data-target", "#myModal");
//     document.getElementById("titleModal").innerHTML = editTaskByModal;
//     let p = document.createElement('p');
//     p.innerHTML = listId;
//     document.getElementById("decsModal").appendChild(p);
// }

// newTask = (taskValue) => {
//     var inputTask = document.getElementById(`${taskValue}-field`).value;
//     if (inputTask === '') {
//         alert("Could you please enter a task ?");
//     } else {
//         var newDivTask = document.createElement("div");
//         newDivTask.className = `card ${taskValue}-card`;
//         var spanTag = document.createElement("span");
//         spanTag.className = `glyphicon glyphicon-pencil edit-icon edit-${taskValue}`;
//         newDivTask.innerHTML = inputTask;
//         newDivTask.appendChild(spanTag);
//         document.getElementById(`card-${taskValue}`).appendChild(newDivTask);
//     }
//     document.getElementById(`${taskValue}-field`).value = "";
//     document.getElementById(`${taskValue}-field`).focus();
// }

newTask = (taskValue) => {
    var inputTask = document.getElementById(`${taskValue}-field`).value;
    if (inputTask === '') {
        alert("Could you please enter a task ?");
    } else {
        var newDivTask = document.createElement("div");
        newDivTask.className = `card ${taskValue}-card`;
        var
        // // Thêm tí cho vui
            newDivTask.id = 'todo-card';
        newDivTask.setAttribute('onclick', `editTask('todo', 'card')`);

        // span edit
        var spanTag = document.createElement("span");
        spanTag.className = `glyphicon glyphicon-pencil edit-icon edit-${taskValue}`;
        newDivTask.innerHTML = inputTask;
        newDivTask.appendChild(spanTag);
        document.getElementById(`card-${taskValue}`).appendChild(newDivTask);
    }
    document.getElementById(`${taskValue}-field`).value = "";
    document.getElementById(`${taskValue}-field`).focus();
}

showModal = (taskValue) => {
    return `
     <!-- Modal -->
    <div class="modal fade" id="myModal" role="dialog">
        <div class="modal-dialog">

            <!-- Modal content-->
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal">&times;</button>
                    <h4 class="modal-title">Modal Header</h4>
                </div>
                <div class="modal-body">
                <input type="text" value="${taskValue}">
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                </div>
            </div>

        </div>
    </div>
    `;
}

// silly
// for (var i = 0; i < editTaskByModal.length; i++) {
//     editTaskByModal[i].onclick = function() {
//         var div = this.parentElement;
//         div.style.display = "none";
//         console.log(valueTask);
//         showModal(editTaskByModal[i].value);
//     }
// }

// $(document).ready(function() {
//     $(".todo-card").click(function() {
//         showModal();
//     });
// });