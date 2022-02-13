const button =document.querySelector('button');

button.addEventListener('click', () =>{
console.log('click');
});

const listsItems = document.querySelectorAll('li');


let clickedItem;

listsItems.forEach(item => {
    item.addEventListener('click', e =>{
        clickedItem = e.target;
        console.log(e);
    });
});