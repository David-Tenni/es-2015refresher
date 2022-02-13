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
//console.log(secondText);
secondText.innerText = 'some more Text';



//grab all of an element
//const allParagraphs = document.querySelectorAll('p');
//allParagraphs.forEach(p => {
//    p.innerText = 'text';
//});


//.grab element by id
const title =document.getElementById('title')
//console.log(title);

//get element by class name
//this returns a html collection so you cannot for all on it or other common methdos that objects can have
const elementBasedOnClassName = document.getElementsByClassName('paraTexts');
//console.log(elementBasedOnClassName);


//get element by tag name
const documentByTagName =document.getElementsByTagName('p');
//grabbing all the ps again
//console.log(documentByTagName);


const getFromTheDom = document.getElementById('manMe');
//console.log(getFromTheDom)
getFromTheDom.innerText = 'hanging this stuff';
getFromTheDom.innerHTML = '<h3> grow big and stronk </h3>';


const lads = ['Nero','Julius','Cato', 'Augstus']

let htmlSnippets ='';

//bad way
//lads.forEach(lad =>
    //{
    //    htmlSnippets +=  '<h2> name: '  + lad + "!"; 
  //  })
//getFromTheDom.innerHTML = htmlSnippets;

//better way
getFromTheDom.innerHTML = htmlSnippets;

lads.forEach(lad =>
    {
        getFromTheDom .innerHTML+=  ` <h2> name:${lad} !` ; 
});


//Updating attributes

const link = document.getElementById('fix');
//console.log(link);
link.getAttribute('href')
link.setAttribute('href','https://www.bing.com')
const link2 = document.getElementById('fix2');

//could use this kind of thing for debugging or soemthing
link2.innerText = link2.getAttribute('class');
//console.log(link2.getAttribute);


//changing css styles say setting colour
let stylishHeading = document.getElementById('stylish')
//console.log(stylishHeading); 
stylishHeading.style.color = 'crimson';
stylishHeading.style.fontSize = '42';
stylishHeading.style.accentColor = 'orange';
stylishHeading.style.backgroundColor = 'black';

//adding and removing classes
stylishHeading.classList.add('NotSoCool');
stylishHeading.classList.remove('veryCoolClass');

//getting all the things and changing class based on innertext

let allThePs = document.querySelectorAll('p');
//console.log(allThePs);
//convert html collection to array
//allThePs = Array.prototype.slice.call(allThePs);
allThePs.forEach( p =>
    {
        let paragraphText = p.textContent;
        if(paragraphText.includes('Cool')){
            p.classList.add('Cool');
        } else if (paragraphText.includes('Not')){
            p.classList.add('error');
        }
 });  

 //this took so long to get working because i was chaning the innertext on all ps further up moral of the story maybe doing a bunch of unrelatiod calls in one document is a bad idea

 //allows you to toggle a test on or off
 const titler = document.querySelector('.titular');
 titler.classList.toggle('test');


 //relationships between different elements in the dom
 //sibling relationship ones on same level from same aprent are siblings 
 //parent child is what it always is
 
//grab html collection of children
 const article = document.querySelector('article');
 //console.log(article.children);

//convert html collection to array
//this is not destructive and does nto alter original value

Array.from(article.children).forEach(childElement => {
    console.log('s');
childElement.classList.add('article-element');
})


//console.log(article);

//getting the parent of an element
const title3 =document.querySelector('h4');
console.log(title3);

console.log(title3.parentElement);
//chains work
console.log(title3.parentElement.parentElement);





main();