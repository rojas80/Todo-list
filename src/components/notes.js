
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
           //createNoteDomElement(note.title, note.text);
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

    const noteText = document.createElement('p');
    noteText.textContent = text;

    domNoteElement.appendChild(noteTitle);
    domNoteElement.appendChild(noteText);
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

    const notesText =  document.createElement('input');
    notesText.type = 'text';
    const addNoteBtn = document.createElement('button');
    addNoteBtn.textContent =  '+Add Note';
    const closeNoteFormBtn = document.createElement('button');
    closeNoteFormBtn.textContent = 'Close';

    addNoteBtn.addEventListener('click', function(event){
        event.preventDefault();
        createNoteDomElement(notesDescriptionInput.value, notesText.value);
        updateNoteJs(notesDescriptionInput.value, notesText.value);

        newNoteJS[notesDescriptionInput.value.replace(/\s/g,"").toLocaleLowerCase()] = {
            "title" : notesDescriptionInput.value,
            "text" : notesText.value
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
    loadNotesData();

}

export default notes;       