


function createNotesBtn(){
    const notesTaskBtn = document.createElement('button');
    notesTaskBtn.classList.add('addBtn');
    notesTaskBtn.textContent ='+ Add Note';
    return notesTaskBtn;

}
function notes(){
    const  mainContainer = document.querySelector('.mainContainer');
    mainContainer.textContent = '';
    const notesTitle = document.createElement('h2');
    notesTitle.textContent = 'Notes';
    mainContainer.appendChild(notesTitle);
    mainContainer.appendChild(createNotesBtn());
}

export default notes;