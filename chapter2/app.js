const unchangeableNumber = 12;
// unchangeableNumber = 60;

//strings
let Adjective = "Based";
let Noun = "Player"
let ProperNoun = "Halo"
let Space= " ";
let Name = Adjective+Space+ProperNoun+Space+Noun;
let index = Name.indexOf('P');
console.log(4);

console.log("let and const are newer than var var is pretty much depreciated")
console.log(Adjective + " " + ProperNoun + "  " + Noun  )
console.log(Name.toUpperCase());
console.log(Name.toLowerCase());
console.log(index);

let stringMethodResutls = Name.slice(6,12);
console.log("slice starts at a location and ends at a location");
console.log(stringMethodResutls);

stringMethodResutls = Name.substr(6,12); 
console.log("substr starts at a location and goes for a number");
console.log("substr is also depreciated");
console.log(stringMethodResutls);

stringMethodResutls = Name.replace("l","ll"); 
console.log("string rplaces replaceds the first argument with the second");
console.log(stringMethodResutls);
// alert('unchabele' + unchangeableNumber);


//NUMBER STUFF

console.log("Numbers now");

let radius = 10;
const pi = 3.14;
let likes = 10;
console.log(likes);
likes++;
console.log(likes);
likes += 3;
console.log(likes);
likes -= 9;
console.log(likes);
likes *= 10;
console.log(likes);
console.log("concatanate");
console.log("this many likes: " +likes);



console.log('tempalte strings/ template literals');
console.log('it requires the use of back ticks');
console.log('its good because things liek spaces count');
let currentVariable = `${Adjective} ${ProperNoun} ${Noun}`;
console.log(currentVariable);
let htmlTemplate = `
<h1> ${Adjective} ${ProperNoun} ${Noun}</h1>
<p> Some text </p>
`
console.log(htmlTemplate)


//Arrays
console.log('everyones vfavourite object arrays!');

let lads = ['jef', 'brash', 'woral'];
console.log(lads);

console.log(lads[0]);
lads[2] = 'ken';
console.log(lads);

let ages = [22,25,60];
console.log(ages);

console.log(ages.length);

let arrayResults = lads.join('-');
console.log(arrayResults);
//get the reslt by array value name
arrayResults =lads.indexOf('jef');
console.log(arrayResults);

//add array elements to array
arrayResults =lads.concat(['jeffy','jiff'])
console.log(arrayResults);

//better for adding singular elements
let ladsPush = lads.push("jason");
console.log(ladsPush);

ladsPush = lads.pop();
console.log(ladsPush);
console.log(ladsPush);
console.log(lads);




//nulls
//nulls and undefineds are bad lol



//bools
let isLadThere = lads.includes('jef');
console.log(isLadThere);




// comparisons

//== is loose so can convert types and ===
let UserAge = 25;
console.log("== comparison of int vs string")

console.log(UserAge == '25')
console.log(UserAge == 25)
console.log("=== comparison of int vs string")
console.log(UserAge === '25')
console.log(UserAge === 25)



// type conversion

let score = '100';
console.log(score);
console.log(typeof score);


score =Number(score)
console.log(score);
console.log(typeof score);
//converting numbers to bools can loosely work like 100 would be true because its postiive but with === it wouldn't work 
//strings also cant be amde numberss just cahnges it to NaN not a nubmer


