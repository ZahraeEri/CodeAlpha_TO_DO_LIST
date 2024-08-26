document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('task-input');
    const addTaskButton = document.getElementById('add-task-button');
    const taskList = document.getElementById('task-list');

    addTaskButton.addEventListener('click', () => {
        const taskText = taskInput.value.trim();
        if (taskText !== '') {
            addTask(taskText);
            taskInput.value = '';
        }
    });

    taskList.addEventListener('click', (e) => {
        if (e.target.tagName === 'BUTTON') {
            deleteTask(e.target.parentElement);
        } else if (e.target.tagName === 'LI') {
            toggleTaskComplete(e.target);
        }
    });

    function addTask(taskText) {
        const li = document.createElement('li');
        li.textContent = taskText;
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        li.appendChild(deleteButton);
        taskList.appendChild(li);
    }

    function deleteTask(taskElement) {
        taskList.removeChild(taskElement);
    }

    function toggleTaskComplete(taskElement) {
        taskElement.classList.toggle('completed');
    }
});
