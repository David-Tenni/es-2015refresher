const addForm = document.getElementById('adderForm');
const taskList = document.getElementById('taskList');

console.log(addForm);

//add the task
const AddTask = todo => {
          
    const newItem = 
    `
    <li class="list-group-item d-flex justify-content-between align-items-center">
            <span>${todo}</span>
            <i class="far fa-trash-alt delete"></i>
          </li>
    `;
    taskList.innerHTML += newItem;
    
};


//event listener which checks to add new task
addForm.addEventListener('submit', e => {
    e.preventDefault();
    const task = addForm.add.value.trim();
    
    if(task){
        AddTask(task);
        addForm.reset();
    };
});

//delete a task
taskList.addEventListener('click', e => {
    if(e.target.classList.contains('delete')){
        e.target.parentElement.remove();
    }
});

