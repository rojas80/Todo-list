
import jsonData from '../components/task.json';

let newTaks = {
}

function loadJsonData(){
  fetch(jsonData).then(response => response.json()).then(data => {
    // Accessing properties
    for (const taskKey in data){
      const task = data[taskKey];
      createTaskDomElement(task.description,task.notes);
    } 
});
}

function updateJsonData(description,notes){
  let tempDescription = description;
  tempDescription = tempDescription.replace(/\s/g,"").toLowerCase();

}

function createTaskDomElement(description,notes){

    const mainContainer = document.querySelector('.mainContainer');
    const domTasksElement  = document.createElement('div');
    domTasksElement.classList.add('domTaskElement');
    domTasksElement.style.display = 'flex';
    const tasksDescription = document.createElement('p');
    tasksDescription.textContent = description;
   
    const tasksNotes  = document.createElement('p');
    tasksNotes.textContent = notes
    const deleteElement = document.createElement('div');
    deleteElement.classList.add('deleteElement');
    deleteElement.textContent = 'X';

    domTasksElement.appendChild(tasksDescription);
    domTasksElement.appendChild(tasksNotes);
    domTasksElement.appendChild(deleteElement);
    mainContainer.appendChild(domTasksElement);
}


function createTaskForm(){
    const taskForm = document.createElement('form');
    taskForm.classList.add('taskForm-popup');

    const taskDescription = document.createElement('label');
    taskDescription.textContent =  'Description';

    const taskInput = document.createElement('input');
    taskInput.type = 'text';

    const taskNote = document.createElement('label');
    taskNote.textContent = 'Note';

    const taskNoteInput = document.createElement('input');
    taskNoteInput.type = 'text';

    const addTaskBtn  = document.createElement('button');
    addTaskBtn.classList.add('addTaskBtn');
    addTaskBtn.textContent  = 'Add Tasks';

    //creating new DOM element for tasks buttons
    addTaskBtn.addEventListener('click', function(event){
      event.preventDefault();
      const taskContainer =  document.querySelector('.mainContainer');
      createTaskDomElement(taskInput.value,taskNoteInput.value);
      updateJsonData(taskInput.value,taskNoteInput.value);
      document.querySelector('.taskForm-popup').style.display = 'none';
    });


    const closeTaskBtn = document.createElement('button');
    closeTaskBtn.classList.add('closeTaskBtn');
    closeTaskBtn.textContent = 'Close';

   closeTaskBtn.addEventListener('click',function(event){
        event.preventDefault();
        document.querySelector('.taskForm-popup').style.display = 'none';
   });


    taskForm.appendChild(taskDescription);
    taskForm.appendChild(taskInput);
    taskForm.appendChild(document.createElement('br'));
    taskForm.appendChild(taskNote);
    taskForm.appendChild(taskNoteInput);
    taskForm.appendChild(document.createElement('br'));
    taskForm.appendChild(addTaskBtn);
    taskForm.appendChild(closeTaskBtn);
    return taskForm;
}

function createTaskFormBtn(){
    const taskContainer = document.createElement('div');
    taskContainer.classList.add('taskContainer');
    const createTaskFormBtn = document.createElement('button');
    createTaskFormBtn.classList.add('createTaskFormBtn');
    createTaskFormBtn.textContent = '+ Create Task';

    createTaskFormBtn.addEventListener('click', function(){
        document.querySelector('.taskForm-popup').style.display = 'block';
    });

    taskContainer.appendChild(createTaskFormBtn);
    taskContainer.appendChild(createTaskForm());
    return taskContainer;
}

function tasks(){
    const  mainContainer = document.querySelector('.mainContainer');
    mainContainer.textContent = '';
    const tasksTitle = document.createElement('h2');
    tasksTitle.textContent = 'Tasks';

    mainContainer.appendChild(tasksTitle);
    mainContainer.appendChild(createTaskFormBtn());
    loadJsonData();
}

export default tasks;
