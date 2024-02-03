import sideBarContent from "./sideBarContent";
import tasks from "./tasks";
import logoImg from '../icons/GitHub_Logo.png';

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
    const gitHubLink = document.createElement('a');
    gitHubLink.href = "https://github.com/rojas80/Todo-list";
    const gitHubImg = document.createElement('img');
    gitHubImg.classList.add('githublogo');
    gitHubImg.src = logoImg;
    gitHubLink.appendChild(gitHubImg);
    footer.appendChild(gitHubLink);
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