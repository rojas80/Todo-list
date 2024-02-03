
import noteJsonData from './notes.json'
let newNoteJS = {};

function loadNotesData(){
    fetch(noteJsonData).then(response => response.json()).then(data =>{
        for(const noteKeys in data){
            const note = data[noteKeys];
            newNoteJS[noteKeys] = {
                "title" : note.title,
                "text": note.text
            }
        }
    });


    const retrieveJsonString = localStorage.getItem("notes");
    const retrieveJsonObject = JSON.parse(retrieveJsonString);
    
    for(const key in retrieveJsonObject){
        createNoteDomElement(retrieveJsonObject[key].title, retrieveJsonObject[key].text);

        console.log(retrieveJsonObject[key].title);
        console.log(retrieveJsonObject[key].text);
    }
    console.log(retrieveJsonObject);

}

function createNoteDomElement(title, text){
    const mainContainer = document.querySelector('.mainContainer');
    const noteContainer = document.querySelector('.notesContainer');

    const domNoteElement = document.createElement('div');
    domNoteElement.classList.add('note');

    const noteTitle = document.createElement('p');
    noteTitle.textContent = title;
    noteTitle.style.fontWeight = 'bold';
    noteTitle.style.fontSize = 'large';

    const noteText = document.createElement('p');
    noteText.textContent = text;

    const deleteNote = document.createElement('div');
    deleteNote.classList.add('deleteNote');
    deleteNote.textContent = '';
    
    deleteNote.addEventListener('click', () =>{
        let parentDiv = deleteNote.parentNode;
        parentDiv.parentNode.removeChild(parentDiv);
        let tasks = JSON.parse(localStorage.getItem('notes'));
        let tempKeyLowerCase = deleteNote.id;
        tempKeyLowerCase = tempKeyLowerCase.replace(/\s/g,"").toLowerCase();
        delete tasks[tempKeyLowerCase];
        localStorage.setItem('notes', JSON.stringify(tasks));
    });

    domNoteElement.appendChild(noteTitle);
    domNoteElement.appendChild(noteText);
    domNoteElement.appendChild(deleteNote);
    noteContainer.appendChild(domNoteElement);
    mainContainer.appendChild(noteContainer);
}

function createNotesForm(){
    const notesForm = document.createElement('form');
    notesForm.classList.add("notesForm-pop");

    const noteDescription = document.createElement('label');
    noteDescription.textContent = 'Description';

    const notesDescriptionInput = document.createElement('input');
    notesDescriptionInput.type = 'text';

    const noteTitle = document.createElement('label');
    noteTitle.textContent = 'Note'

    const notesTextInput =  document.createElement('input');
    notesTextInput.type = 'text';

    const addNoteBtn = document.createElement('button');
    addNoteBtn.textContent =  '+Add Note';
    const closeNoteFormBtn = document.createElement('button');
    closeNoteFormBtn.textContent = 'Close';

    addNoteBtn.addEventListener('click', function(event){
        event.preventDefault();
        createNoteDomElement(notesDescriptionInput.value, notesTextInput.value);

        newNoteJS[notesDescriptionInput.value.replace(/\s/g,"").toLocaleLowerCase()] = {
            "title" : notesDescriptionInput.value,
            "text" : notesTextInput.value
        }
        const jsonString = JSON.stringify(newNoteJS);
        localStorage.setItem('notes', jsonString);

        document.querySelector('.notesForm-pop').style.display = 'none'
    });

    closeNoteFormBtn.addEventListener('click', function(event){
        event.preventDefault();
        document.querySelector('.notesForm-pop').style.display = 'none'
    });

    notesForm.appendChild(noteDescription);
    notesForm.appendChild(notesDescriptionInput);
    notesForm.appendChild(document.createElement('br'))
    notesForm.appendChild(noteTitle);
    notesForm.appendChild(notesTextInput);
    notesForm.appendChild(document.createElement('br'))
    notesForm.appendChild(addNoteBtn);
    notesForm.appendChild(closeNoteFormBtn);
    return notesForm;
}
function createNotesBtn(){
    const notesBtnContainer = document.createElement('div');
    notesBtnContainer.classList.add('notesBtnContainer');

    const creatNotesTaskBtn = document.createElement('button');
    creatNotesTaskBtn.classList.add('creatNotesFormBtn');
    creatNotesTaskBtn.textContent ='+ Add Note';

    creatNotesTaskBtn.addEventListener('click', function(){
        console.log("add notes button");
        document.querySelector('.notesForm-pop').style.display = 'block';
    
    })
    notesBtnContainer.appendChild(creatNotesTaskBtn);
    notesBtnContainer.appendChild(createNotesForm());

    return notesBtnContainer;

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
    loadNotesData();

}

export default notes;       