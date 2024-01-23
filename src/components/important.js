function important(){
    const  mainContainer = document.querySelector('.mainContainer');
    mainContainer.textContent = '';
    const importantTitle = document.createElement('h2');
    importantTitle.textContent = 'Important';
    mainContainer.appendChild(importantTitle);
}
export default important;