
import jsonData from '../components/task.json';
console.log(typeof(jsonData));

let newTasks = [{
  "description": "Get Groceries",
  "notes": "Buy milk, eggs and avocado",
  "important": false
}];

console.log(newTasks);


fetch(jsonData).then(response => response.json()).then(data => {
      // Accessing properties
      data.tasks.forEach(task => {
        console.log('Description:', task.description);
        console.log('Notes:', task.notes);
      });
      console.log(typeof(data.tasks));

      data.tasks.push(...newTasks);
      console.log(data);
});


function createTaskDomElement(){
    const tasksContainer  = document.createElement('div');
    const tasksDescription = document.createElement('p');
    tasksDescription.textContent = newTasks.description;
    const tasksNotes  = document.createElement('p');
    tasksNotes.textContent = newTasks.notes;
    tasksContainer.appendChild(tasksDescription);
    tasksContainer.appendChild(tasksNotes);
    return tasksContainer;
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
    addTaskBtn.addEventListener('click', function(){
      const taskContainer =  document.querySelector('.taskContainer');
      taskContainer.appendChild(createTaskDomElement());
    });


    const closeTaskBtn = document.createElement('button');
    closeTaskBtn.classList.add('closeTaskBtn');
    closeTaskBtn.textContent = 'Close';

   closeTaskBtn.addEventListener('click',function(){
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
}

export default tasks;
