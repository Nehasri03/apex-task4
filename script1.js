document.addEventListener("DOMContentLoaded", loadTasks);  

function loadTasks() {  
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];  
    const taskList = document.getElementById('taskList');  
    
    tasks.forEach(task => {  
        const li = document.createElement('li');  
        li.textContent = task;  
        li.addEventListener('click', function() {  
            this.remove();  
            saveTasks();  
        });  
        taskList.appendChild(li);  
    });  
}  

function addTask() {  
    const taskInput = document.getElementById('taskInput');  
    const task = taskInput.value.trim();  
    
    if (task) {  
        const tasks = JSON.parse(localStorage.getItem('tasks')) || [];  
        tasks.push(task);  
        localStorage.setItem('tasks', JSON.stringify(tasks));  
        taskInput.value = '';  
        loadTasks();  
    }  
}  

function saveTasks() {  
    const taskList = document.getElementById('taskList');  
    const tasks = Array.from(taskList.children).map(li => li.textContent);  
    localStorage.setItem('tasks', JSON.stringify(tasks));  
}







document.getElementById('addTaskButton').addEventListener('click', function() {  
    const taskInput = document.getElementById('taskInput');  
    const taskText = taskInput.value.trim();  

    if (taskText !== "") {  
        const li = document.createElement('li');  
        li.textContent = taskText;  

        const removeButton = document.createElement('button');  
        removeButton.textContent = 'Remove';  
        removeButton.onclick = function() {  
            li.remove();  
        };  

        li.appendChild(removeButton);  
        document.getElementById('taskList').appendChild(li);  
        taskInput.value = ""; // Clear the input field  
    } else {  
        alert("Please enter a task.");  
    }  
});