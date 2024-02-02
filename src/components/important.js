
function createDomElement(importantTasks){
    
    for(let key in importantTasks){
        console.log(typeof (importantTasks[key]['important']));
        console.log(importantTasks[key]['important'] == true);
        if(importantTasks[key]['important'] == true){
            const mainContainer = document.querySelector('.mainContainer');
            const domTasksElement  = document.createElement('div');
            domTasksElement.classList.add('domTaskElement');
            domTasksElement.style.display = 'flex';
            const tasksDescription = document.createElement('p');
            tasksDescription.textContent = importantTasks[key]['description'];
   
            const tasksNotes  = document.createElement('p');
            tasksNotes.textContent = importantTasks[key]['notes'];
            const deleteElement = document.createElement('div');
            deleteElement.classList.add('deleteElement');
            deleteElement.textContent = '';

            domTasksElement.appendChild(tasksDescription);
            domTasksElement.appendChild(tasksNotes);
            domTasksElement.appendChild(deleteElement);
            mainContainer.appendChild(domTasksElement);
        }
    }
}


function important(){
    const  mainContainer = document.querySelector('.mainContainer');
    mainContainer.textContent = '';
    const importantTitle = document.createElement('h2');
    importantTitle.textContent = 'Important';
    mainContainer.appendChild(importantTitle);
    let importantTasks  = JSON.parse(localStorage.getItem("tasks"));
    createDomElement(importantTasks);
}
export default important;