// Initialize an empty array to store tasks
let tasks = [];

// Function to add a task
function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();
    if (taskText) {
        tasks.push(taskText);
        taskInput.value = '';
        displayTasks();
    }
}

// Function to display tasks
function displayTasks() {
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = '';
    tasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
            <span  class="task-text">${task}</span>
            <button class="edit-btn"  onclick="editTask(${index})">Edit</button>
            <button class="remove-btn"  onclick="removeTask(${index})">Remove</button>`;
        taskList.appendChild(li);
    });
}

// Function to edit a task
function editTask(index) {
    const newText = prompt('Edit your list:', tasks[index]);
    if (newText !== null && newText.trim() !== '') {
        tasks[index] = newText;
        displayTasks();
    }
}

// Function to remove a task
function removeTask(index) {
    tasks.splice(index, 1);
    displayTasks();
}

// Initial display
displayTasks();
