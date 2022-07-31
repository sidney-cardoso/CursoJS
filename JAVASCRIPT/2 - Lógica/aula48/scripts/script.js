const newTask = document.querySelector('.new-task')
const addTask = document.querySelector('.add-task')
const tasks = document.querySelector('.tasks')

const createListElement = () => {
    const li = document.createElement('li')
    return li
}

newTask.addEventListener('keypress', event => {
    if (event.keyCode === 13) {
        if (!newTask.value) return
        addTaskToList(newTask.value)
    }
})
const cleanInput = () => {
    newTask.value = ''
    newTask.focus()
}

const createDeleteButton = li => {
    li.innerHTML += ' '
    const button = document.createElement('button')
    button.setAttribute('id', 'delete-task')
    button.setAttribute('title', 'Apagar tarefa')
    li.appendChild(button)
}

const addTaskToList = task => {
    const li = createListElement()
    li.innerHTML = task
    tasks.appendChild(li)

    cleanInput()
    createDeleteButton(li)
    saveTasks()
}

addTask.addEventListener('click', () => {
    if (!newTask.value) return
    addTaskToList(newTask.value)
})

document.addEventListener('click', event => {
    const element = event.target
    if (element.id === 'delete-task') {
        element.parentElement.remove()
        saveTasks()
    }
})

const saveTasks = () => {
    const tasks = document.querySelectorAll('li')
    const tasksArray = []
    for (let task of tasks) {
        let taskText = task.innerText
        taskText = taskText.replace('Apagar tarefa', '').trim()
        tasksArray.push(taskText)
    }
    const tasksJSON = JSON.stringify(tasksArray)
    localStorage.setItem('tasks', tasksJSON)
}

const loadTasks = () => {
    const tasksJSON = localStorage.getItem('tasks')
    if (!tasksJSON) return
    const tasksArray = JSON.parse(tasksJSON)
    for (let task of tasksArray) {
        addTaskToList(task)
    }
}
loadTasks()
