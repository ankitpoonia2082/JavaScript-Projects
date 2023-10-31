// To-Do App JavaScript

// Getting  Element by Id 
const inputarea = document.getElementById("search");
const dolist = document.getElementById("list-container");

function addtask(){
    if(inputarea.value === ""){
        alert("You must write someting to make To-Do!")
    }
    else{
        let li = document.createElement('li');
        li.innerHTML = inputarea.value;
        dolist.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
        todo_data();
    }
    inputarea.value = "";
    todo_data()
}

// Deleting / Compleating to-do

dolist.addEventListener('click',function(e){
    if(e.target.tagName === 'LI'){
        e.target.classList.toggle('checked');
        todo_data();
    }
    else if(e.target.tagName === 'SPAN'){
        e.target.parentElement.remove();
        todo_data();
    }

    })

// Saving to-do to local/browser Storage

function todo_data(){
    localStorage.setItem("data",dolist.innerHTML);
}

// To show data after refresh or reload 

function showtodo(){
    dolist.innerHTML = localStorage.getItem("data");
}
showtodo()