const inputBox = document.getElementById('input_box');
const listContainer = document.getElementById('list-container');
const button = document.getElementById('eButton');

button.addEventListener('click',()=>{
    const input = inputBox.value.trim();
    if(input===''){
        alert('Please enter a Task');
    }
    else{
    const newItem = document.createElement("li");

    newItem.innerHTML = input;
    listContainer.appendChild(newItem);
    inputBox.value = '';

    const span = document.createElement("span");
    span.innerHTML = "\u00d7";
    newItem.appendChild(span);

    saveData();
    } 
});

listContainer.addEventListener('click',(e)=>{
    if(e.target.tagName==='LI'){
        e.target.classList.toggle('checked');
        saveData();

    }
    else if(e.target.tagName === 'SPAN'){
        e.target.parentElement.remove();
        saveData();
    }
});

function saveData(){
    localStorage.setItem('data',listContainer.innerHTML);
}

function showTask(){
    listContainer.innerHTML = localStorage.getItem('data');
}

showTask();