const main = () =>
{
    console.log("starting main")

}

//Dom

//dom controls lots of methods

//dom is like a hiearchy 


//the query selector
//const para = document.querySelector();

//automatically grabs first p tag
const ptags = document.querySelector('p');
console.log(ptags);
ptags.innerText = "based";

//selecting element by class
const heading = document.querySelector('.TheHead');
heading.innerText = 'If you aim for the king make sure you do nto miss';

//selecting element by div with class
const secondText = document.querySelector('p.secondryText');
console.log(secondText);
secondText.innerText = 'some more Text';



//grab all of an element
const allParagraphs = document.querySelectorAll('p');
allParagraphs.forEach(p => {
    p.innerText = 'text';
});


main();