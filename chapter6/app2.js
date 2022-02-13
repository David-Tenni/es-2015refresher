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
//event bubblings
//if a element goes off the listener of all its parents are chekd

let clickedItem;
/*
listsItems.forEach(item => {
    item.addEventListener('click', e =>{
        //stop propagation stops event bubbling
        e.stopPropagation();
        e.target.remove();
        console.log('event in li');
    });
});
*/


ul.addEventListener('click', e =>{
    console.log('event in ul');
console.log(e.target);
//dom show tags as capitals
if(e.target.tagName == 'LI'){
    e.target.remove();
}

});