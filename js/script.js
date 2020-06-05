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

// newTask = (taskValue) => {
//     let inputTask = document.getElementById(`${taskValue}-field`).value;
//     let id = generateRandomId(5);
//     if (inputTask === '') {
//         alert("Could you please enter a task ?");
//     } else {
//         var newDivTask = document.createElement("div");
//         newDivTask.className = `card ${taskValue}-card`;
//         newDivTask.id = id;
//         newDivTask.setAttribute("onClick", "showDetail(id)");
//         var spanTag = document.createElement("span");
//         spanTag.className = `glyphicon glyphicon-pencil edit-icon edit-${taskValue}`;
//         spanTag.setAttribute("onclick", `editTask(event, "${id}")`);
//         newDivTask.innerHTML = inputTask;

//         newDivTask.appendChild(spanTag);
//         document.getElementById(`card-${taskValue}`).appendChild(newDivTask);
//     }
//     document.getElementById(`${taskValue}-field`).value = "";
//     document.getElementById(`${taskValue}-field`).focus();
// }

// showDetail = (id) => {
//     var editTaskByModal = document.getElementById(`${id.toString()}`).innerText;
//     console.log(editTaskByModal);
//     console.log(id, 'showdetail');
//     var decs = "Hà dang ngoi choi cờ vua!";
//     document.getElementById(`${id}`).setAttribute("data-toggle", "modal");
//     document.getElementById(`${id}`).setAttribute("data-target", "#myModal");
//     document.getElementById("titleTask").value = editTaskByModal;
//     let p = document.createElement('p');
//     p.innerHTML = decs;
//     document.getElementById("decsModal").appendChild(p);
// }

generateRandomId = (length) => {
    let chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (!length) {
        length = Math.floor(Math.random() * chars.length);
    }
    let randomId = '';
    for (let i = 0; i < length; i++) {
        randomId += chars[Math.floor(Math.random() * chars.length)];
    }
    return randomId;
}

document.getElementById('todo-field').addEventListener('keypress', event => {
    if (event.key === 'Enter') {
        newTask('todo');
    }
});

document.getElementById('doing-field').addEventListener('keypress', event => {
    if (event.key === 'Enter') {
        newTask('doing');
    }
});

document.getElementById('verify-field').addEventListener('keypress', event => {
    if (event.key === 'Enter') {
        newTask('verify');
    }
});

document.getElementById('done-field').addEventListener('keypress', event => {
    if (event.key === 'Enter') {
        newTask('done');
    }
});


newTask = (taskValue) => {
    let inputTask = document.getElementById(`${taskValue}-field`).value;
    let id = generateRandomId(5);
    if (inputTask === '') {
        alert("Could you please enter a task ?");
    } else {
        var newDivTask = document.createElement("div");
        newDivTask.className = `card ${taskValue}-card`;
        newDivTask.id = id;
        newDivTask.setAttribute("onClick", "showDetail(id, taskValue)");
        var spanTag = document.createElement("span");
        spanTag.className = `glyphicon glyphicon-pencil edit-icon edit-${taskValue}`;
        spanTag.setAttribute("onclick", `editTask(event, "${id}")`);
        newDivTask.innerHTML = inputTask;

        newDivTask.appendChild(spanTag);
        document.getElementById(`card-${taskValue}`).appendChild(newDivTask);
    }
    document.getElementById(`${taskValue}-field`).value = "";
    document.getElementById(`${taskValue}-field`).focus();
}

showDetail = (id, taskValue) => {
    console.log(taskValue);
    let editTaskValue = document.getElementById(`${id.toString()}`).innerText;
    document.getElementById(`${id}`).setAttribute("data-toggle", "modal");
    document.getElementById(`${id}`).setAttribute("data-target", "#myModal");
    document.getElementById("titleTask").value = editTaskValue;
    document.getElementById("modal-title").value = taskValue;
    document.getElementById('save-edit-task-button').setAttribute("onClick", "saveEditTask(event, '" + id + "')");
}


saveEditTask = (event, id) => {
    let taskEdited = document.getElementById("titleTask").value;
    document.getElementById(id).innerHTML = taskEdited;

}

// hide modal after save event
$('#save-edit-task-button').click(function() {
    $('#myModal').modal('hide');
});

editTask = (event, id) => {
    confirm(`Good evening id ${id}. I have been standing here since the afternoon!!!`);
    event.stopPropagation();
    let task = document.getElementById(`${id}`);
    task.setAttribute("contenteditable", "true");
    task.focus();
    console.log(task);
}



// add new list 

/* <div style="display: none;" class="add-card add-list" id="add-list-input">
<input type="text" class="add-list" id="add-list" placeholder="Enter the list title">
<button class="add-card" onclick="newList()" value="Add new list">Add List</button>
<button class="add-card" onclick="displayDiv('add-list-input', 'add-list')" value="X">X</button> */


// Hàm tạo mới tag để append vô cho dễ với kẻ trong ni dùng nhiều nì
generateNewTag = (tag, className, idName) => {
    let newTag = document.createElement(tag);
    newTag.className = className;
    newTag.id = idName;
    return newTag;
}

addNewList = () => {
    let inputField = document.getElementById(`add-list-field`).value;
    let inputList = inputField.charAt(0).toUpperCase() + inputField.slice(1);; // đã lấy được tên list và uppercase capitalize first letter
    let listExistent = document.querySelectorAll("");
    if (inputList === '') {
        alert("Please type your list task !");
    } else { // kiểm tra xong rồi chừ để add vô
        console.log('chờ mình xí nhé');
        // tạo div title nè
        let divListTitle = generateNewTag("div", `${inputList}-list`, 'list-title');
        divListTitle.innerHTML = inputList;
        console.log(divListTitle);

        // tạo card list div để chứa khi có task mới của list nè
        let cardList = generateNewTag("div", `${inputList}-list`, 'list-title');
        console.log(cardList);

        let boardList = generateNewTag('div', 'board-list', 'board-list');
        console.log(boardList);

        // tạo div button show field 
        document.getElementsByClassName("board-lists").appendChild();
        var big = generateNewTag('div', 'board-list', 'board-lists');
        // appendChildTag('div', `${inputField}-list`, 'board-list');
        console.log(big);
        // var newDivTask = document.createElement("div");
        // newDivTask.className = `board-list`;
        // console.log(newDivTask);


        // newDivTask.appendChild(generateNewList(inputList));
        // document.getElementById(`board-lists`).appendChild(newDivTask);;
    }
}

generateNewList = (list) => {
    return `
    <div class="board-list">
        <div id="${list}-list" class="list-title">
            Todo
        </div>
        <div id="card-${list}">
            <div class="card" onclick="showDetail('1')" id="1">
                Dont touch me
                <span onclick="editTask(event,1)" class="glyphicon glyphicon-pencil edit-icon"></span>
            </div>
        </div>
        <div onclick="displayDiv('add-card-${list}', 'input-card-${list}')" class="add-card" id="add-card-${list}">
            + Add another card
        </div>

        <div style="display: none;" class="add-card" id="input-card-${list}">
            <input type="text" class="add-card" id="${list}-field" placeholder="Enter the title for this card">
            <button class="add-card" id="add-${list}" onclick="newTask('${list}')" value="Add card">Add
                    Card</button>
            <button class="add-card" onclick="displayDiv('input-card-${list}', 'add-card-${list}')" value="X">X</button>
        </div>
    </div>`;
}

// soooooooooooooooooooo silly 

// showModal = (taskValue) => {
//     return `
//      <!-- Modal -->
//     <div class="modal fade" id="myModal" role="dialog">
//         <div class="modal-dialog">

//             <!-- Modal content-->
//             <div class="modal-content">
//                 <div class="modal-header">
//                     <button type="button" class="close" data-dismiss="modal">&times;</button>
//                     <h4 class="modal-title">Modal Header</h4>
//                 </div>
//                 <div class="modal-body">
//                 <input type="text" value="${taskValue}">
//                 </div>
//                 <div class="modal-footer">
//                     <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
//                 </div>
//             </div>

//         </div>
//     </div>
//     `;
// }

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