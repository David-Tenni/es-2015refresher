const addForm = document.getElementById('adderForm');
const taskList = document.getElementById('taskList');

console.log(addForm);

const AddTask = todo => {
          
    const newItem = 
    `<li class="list-group-item d-flex justify-content-between align-items-center">
    <span> ${todo} <span>
    <i class="far fa-trash-alt delete"></i>          
    `;
    taskList.innerHTML += newItem;
    
};


addForm.addEventListener('submit', e => {
    e.preventDefault();
    const task = addForm.add.value.trim();
    
    if(task){
        AddTask(task);
        addForm.reset();
    };
});


