import tasks from "./tasks";
import notes from "./notes";
import important from "./important";

function createListItem(btnName){
    const listItem  =  document.createElement('button');
    listItem.id = btnName.toLowerCase();
    listItem.classList.add('navBtn');
    listItem.textContent = btnName;
    return listItem;
}

function sideBarContent(){
    const navBar = document.createElement('div');
    navBar.classList.add('navBar');
    const tasksBtn = createListItem('Tasks');
    const importantBtn = createListItem('Important');
    const notesBtn = createListItem('Notes');
    navBar.appendChild(tasksBtn);
    navBar.appendChild(importantBtn);
    navBar.appendChild(notesBtn);


    tasksBtn.addEventListener('click',function(){
        tasks();
    });
    
    importantBtn.addEventListener('click',function(){
        console.log('important');
        important();
    });
    notesBtn.addEventListener('click',function(){
        console.log('note');
        notes();
    });

    return navBar;
}

export default sideBarContent;