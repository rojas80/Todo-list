
function createNoteDomElement(){
    const mainContainer = document.querySelector('.mainContainer');
    const domNoteElement = document.createElement('div');

    const noteTitle = document.createElement('p');
    const noteText = document.createElement('p');

    domNoteElement.appendChild(noteTitle);
    domNoteElement.appendChild(noteText);
    mainContainer.appendChild(domNoteElement);
}

function createNotesForm(){
    const notesForm = document.createElement('form');
    notesForm.classList.add("notesForm-pop");

    const noteDescription = document.createElement('label');
    noteDescription.textContent = 'Description';

    const notesDescriptionInput = document.createElement('input');
    notesDescriptionInput.type = 'text';
    const notesText =  document.createElement('input');
    const addNoteBtn = document.createElement('button');
    addNoteBtn.textContent =  '+Add Note';
    const closeNoteFormBtn = document.createElement('button');
    closeNoteFormBtn.textContent = 'Close';

    addNoteBtn.addEventListener('click', function(event){
        event.preventDefault();
        const notesContainer = document.querySelector('.taskContainer');
        notesContainer.appendChild(createNoteDomElement());
        document.querySelector('.notesForm-pop').style.display = 'none'
    });

    closeNoteFormBtn.addEventListener('click', function(event){
        event.preventDefault();
        document.querySelector('.notesForm-pop').style.display = 'none'
    });

    notesForm.appendChild(noteDescription);
    notesForm.appendChild(notesDescriptionInput);
    notesForm.appendChild(document.createElement('br'))
    notesForm.appendChild(notesText);
    notesForm.appendChild(document.createElement('br'))
    notesForm.appendChild(addNoteBtn);
    notesForm.appendChild(closeNoteFormBtn);
    return notesForm;
}
function createNotesBtn(){
    const mainContainer = document.createElement('div');

    const creatNotesTaskBtn = document.createElement('button');
    creatNotesTaskBtn.classList.add('creatNotesFormBtn');
    creatNotesTaskBtn.textContent ='+ Add Note';

    creatNotesTaskBtn.addEventListener('click', function(){
        console.log("add notes button");
        document.querySelector('.notesForm-pop').style.display = 'block';
    
    })
    mainContainer.appendChild(creatNotesTaskBtn);
    mainContainer.appendChild(createNotesForm());

    return mainContainer;

}
function notes(){
    const  mainContainer = document.querySelector('.mainContainer');
    mainContainer.textContent = '';
    const notesTitle = document.createElement('h2');
    notesTitle.textContent = 'Notes';

    const notesContainer = document.createElement('div');
    notesContainer.classList.add('notesContainer');

    mainContainer.appendChild(notesTitle);
    mainContainer.appendChild(createNotesBtn());
    mainContainer.appendChild(notesContainer);
}

export default notes;