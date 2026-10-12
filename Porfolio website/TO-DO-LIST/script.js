function addTask() {

    let input = document.getElementById("taskInput");
    
    let task = input.value;
    
    if(task === "") {
    
    alert("Please enter a grocery item 🛒");
    
    return;
    
    }
    
    let li = document.createElement("li");
    
    li.innerHTML = `
    <span>${task}</span>
    
    <span class="delete">Delete</span>
    `;
    
    document
    .getElementById("taskList")
    .appendChild(li);
    
    
    /* Delete Button */
    
    li.querySelector(".delete").onclick = function() {
    
    li.remove();
    
    };
    
    
    /* Clear Input */
    
    input.value = "";
    
    }