const ul = document.querySelector('ul');
// ul.remove(); would remove ul 

const button =document.querySelector('button');

button.addEventListener('click', () =>{
const li = document.createElement('li');
li.textContent = ('new item');
//adds at bottom
ul.append(li);
//adds at top
//ul.prepend(li);

});

const listsItems = document.querySelectorAll('li');


let clickedItem;

listsItems.forEach(item => {
    item.addEventListener('click', e =>{
        clickedItem = e.target;
        clickedItem.remove();
        console.log(e);
    });
});