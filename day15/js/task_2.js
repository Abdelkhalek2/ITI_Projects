`use strict`;

let taskInput = document.querySelector("#task-input");
let addBtn = document.querySelector("#add-btn");
let taskList = document.querySelector("#task-list");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

let displayTasks = () => {
    console.log("Displaying tasks:", tasks);
    taskList.innerHTML = "";
    tasks.forEach((task, index) => {
        taskList.innerHTML += `
            <li class="list-group-item d-flex justify-content-between align-items-center">
                <span class="text-dark fw-bold">${task}</span>
                <div>
                    <i class="fa fa-edit me-3" style="cursor: pointer;" onclick="promptEditTask(${index})"></i>
                    <i class="fa fa-trash text-danger" style="cursor: pointer;" onclick="deleteTask(${index})"></i>  
                </div>
            </li>
        `;
    });
};

displayTasks();

addBtn.addEventListener("click", () => {
    let task = taskInput.value.trim();
    if (task) {
        tasks.push(task);
        localStorage.setItem("tasks", JSON.stringify(tasks));
        displayTasks();
        taskInput.value = "";
    }
});

const deleteTask = (index) => {
    tasks.splice(index, 1);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    displayTasks();
}

const editTask = (index, newTask) => {
    tasks[index] = newTask;
    localStorage.setItem("tasks", JSON.stringify(tasks));
    displayTasks();
}

const promptEditTask = (index) => {
    let newTask = prompt("Edit your task:", tasks[index]);
    if (newTask !== null && newTask.trim() !== "") {
        editTask(index, newTask);
    }
}