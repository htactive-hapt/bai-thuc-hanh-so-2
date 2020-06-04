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


generateRandomId = (length) => {
    let chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    if (!length) {
        length = Math.floor(Math.random() * chars.length);
    }
    let randomId = '';
    for (let i = 0; i < length; i++) {
        randomId += chars[Math.floor(Math.random() * chars.length)];
    }
    return randomId;
}

newTask = (taskValue) => {
    let inputTask = document.getElementById(`${taskValue}-field`).value;
    let id = generateRandomId(5);
    if (inputTask === '') {
        alert("Could you please enter a task ?");
    } else {
        var newDivTask = document.createElement("div");
        newDivTask.className = `card ${taskValue}-card`;
        newDivTask.id = id;
        newDivTask.setAttribute("onClick", "editTask(id)");
        var spanTag = document.createElement("span");
        spanTag.className = `glyphicon glyphicon-pencil edit-icon edit-${taskValue}`;
        newDivTask.innerHTML = inputTask;
        newDivTask.appendChild(spanTag);
        document.getElementById(`card-${taskValue}`).appendChild(newDivTask);
    }
    document.getElementById(`${taskValue}-field`).value = "";
    document.getElementById(`${taskValue}-field`).focus();
}

editTask = (id) => {
    var editTaskByModal = document.getElementById(`${id}`).innerText;
    var decs = "Hà dang ngoi choi cờ vua!";
    document.getElementById(`${id}`).setAttribute("data-toggle", "modal");
    document.getElementById(`${id}`).setAttribute("data-target", "#myModal");
    document.getElementById("titleModal").innerHTML = editTaskByModal;
    let p = document.createElement('p');
    p.innerHTML = decs;
    document.getElementById("decsModal").appendChild(p);
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