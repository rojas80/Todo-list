import sideBarContent from "./sideBarContent";
import tasks from "./tasks";

function creatHeader(){
    const header = document.createElement('header');
    header.classList.add('header');
    const title = document.createElement('h1');

    title.textContent = 'To Do List';
    header.appendChild(title);
    return header;
}
function createSideContainer(){
    const sideContainer= document.createElement('div');
    sideContainer.classList.add('sideContainer');
    sideContainer.appendChild(sideBarContent());

    return sideContainer;
}
function createMainContainer(){
    const mainContainer = document.createElement('div');
    mainContainer.classList.add('mainContainer');
    return mainContainer;
}
function createFooter(){
    const footer = document.createElement('footer');
    footer.classList.add('footer');
    footer.textContent='footer';
    return footer;
}
function loadPage(){
    const htmlBody = document.querySelector('body');
    htmlBody.appendChild(creatHeader());
    htmlBody.appendChild(createSideContainer());
    htmlBody.appendChild(createMainContainer());
    htmlBody.appendChild(createFooter());
    tasks();
    return htmlBody;
}
export default loadPage;