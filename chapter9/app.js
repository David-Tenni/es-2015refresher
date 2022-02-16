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


filterTest();
mapMethodTest();
reduceMethodTest();
reduceMethodTest2();