let todoIndex = 1;

function addTodo(){

    // reads the content of the input box
    const element = document.getElementById("toDoInput");
    const data = element.value;
    if(element.value === ""){
        return;
    }
    element.value = "";

    // creates a new todo on HTML DOM

    //1. creates a new div element in js(as a variable)
    const newDiv = document.createElement("div");
    newDiv.setAttribute("id", "todo" + todoIndex);
    
    const newSpan = document.createElement("span");
    newSpan.innerHTML = data;
    
    newDiv.appendChild(newSpan);

    const newButton = document.createElement("button");
    newButton.innerHTML = "Task Completed";
    newButton.setAttribute("onclick", "deleteToDo("+ todoIndex +")")

    newDiv.appendChild(newButton);

    //2. insert that div element to a parent div
    document.getElementById("todoitems").appendChild(newDiv);
    todoIndex = todoIndex + 1;
}

function deleteToDo(index){
    const divElement = document.getElementById("todo"+ index);
    divElement.parentElement.removeChild(divElement);

    todoIndex = todoIndex - 1;
}