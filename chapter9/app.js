//filter method
function filterTest (){

    const scores = [1,3,23,6,15,13,17,14];

    const under10 = scores.filter((score) => {
    return score < 10;
    });
    
    console.log(under10);
    
    
    const users = [
    
        {name: 'bob', cool: true},
        {name: 'h', cool: false},
        {name: 'bdob', cool: true},
        {name: 'bobojb', cool: false},
    ];
    
    //more concise approach
    const coolPeeps = users.filter(user => user.cool);
    console.log(coolPeeps);
};


function mapMethodTest(){
    const prices = [1,3,23,6,15,13,17,14]
   // const salePrices = prices.map((price) => {
   //     return price/2;
    //})    
    //more consise
    const salePrices = prices.map(price => price/2);
    console.log(salePrices);

    const banished = [
    {name: 'craig', value: 100},
    {name: 'eschurum', value: 90},
    {name: 'atriox', value: 200},
    {name: 'Pavium', value: 40},
    ];

    const banishedUpdate= banished.map(banish =>
    {
        if(banish.value > 50)
        {
            return {name: banish.name, value: banish.value*2};
        } {
            return banish;
        }
    });
    console.log(banishedUpdate);

};



//good for counting stuff
function reduceMethodTest()
{    
    const prices = [1,3,23,6,15,13,17,14];
    const results = prices.reduce((accumulator, current) => {
        if(current > 14){
            accumulator++;
        }
        return accumulator;
    }, //pass in the inital value of the accumlator asa second method
    0);
    console.log(results);

};

function reduceMethodTest2()
{    
    const banished = [
        {name: 'craig', wins: 100},
        {name: 'craig', wins: 100},
        {name: 'craig', wins: 100},
        {name: 'eschurum', wins: 90},
        {name: 'eschurum', wins: 90},
        {name: 'atriox', wins: 200},
        {name: 'atriox', wins: 220},
        {name: 'atriox', wins: 200},
        {name: 'Pavium', wins: 40},
        {name: 'Pavium', wins: 40},
        {name: 'Pavium', wins: 40},
        ];

    const atrioxResults = banished.reduce((accumulator, current) => {
        if(current.name === 'atriox'){
            accumulator += current.wins;
        }
        return accumulator;
    }, //pass in the inital value of the accumlator asa second method
    0);
    console.log(atrioxResults);

};

//find mEthod
function findMethodTest()
{    
    const prices = [1,3,23,6,15,13,17,14];
    //const results = prices.find((price) => {
    //    
    //    
    //    return price > 5;
   // });

    //more concise
    const results = prices.find(price => price > 5);
    console.log(results);

};

/*destructive method*/
function sortMethodTest(){
    const names = ['cutter', 'forge', 'atriox', 'keys', 'pavium', 'vordus'];
    const prices = [1,3,23,6,15,13,17,14];
    
    const banished = [
    {name: 'craig', value: 100},
    {name: 'eschurum', value: 90},
    {name: 'atriox', value: 200},
    {name: 'Pavium', value: 40},
    ];
    
    names.sort();
    console.log(names);
    
    //by default sorting numbers only sorts based on the first number
    prices.sort();
    console.log(prices);
    
    //reverse the order so if it was in alphabetical now its in dealphabetical but it will not autoomaticaly be alphabeticed if its random first it'll now justbe differently ordered random
    names.reverse();    
    console.log(names);
    
    console.log(banished);
    //sorting object requires a function as a arugment
    /*banished.sort((a,b) => {
        if (a.value > b.value){
            return -1;
        }
        else if (b.value > a.value){
            return 1;
        } else{
            return 0;
        }


    });
    */
    
    //much more condensed 
    //still works the same because the output will either be a negative number a positive or 0
    banished.sort((a,b) => b.value - a.value);
    console.log(banished);



}

filterTest();
mapMethodTest();
reduceMethodTest();
reduceMethodTest2();
findMethodTest();
sortMethodTest();