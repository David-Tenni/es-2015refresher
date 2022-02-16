const addForm = document.getElementById('add-form');
const searchBar = document.getElementById('search-bar');
const taskList = document.getElementById('task-list');

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

const FilterTasks = term => {

Array.from(taskList.children)
.filter((task) => !task.textContent.toLowerCase().includes(term))
.forEach((invalid) => invalid.classList.add('hidden') && invalid.classList.remove('d-flex')
);



Array.from(taskList.children)
.filter((task) => task.textContent.toLowerCase().includes(term))
.forEach((valid) => 
valid.classList.remove('hidden') && valid.classList.add("d-flex"));

};


searchBar.addEventListener('keyup', e =>{
    e.preventDefault();
    const searchTerm = searchBar.value.toLowerCase();
    FilterTasks(searchTerm);
});

