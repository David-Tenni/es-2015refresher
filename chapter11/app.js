const now  = new Date();
const theBeforeTime = new Date('October 1 2019 8:52:51');
let timestampBox = document.getElementById('time-stamp');
let box = document.getElementById('time');
let dateFnsBox = document.getElementById('date-fns');
let covidBox = document.getElementById('covid-time');
//ok this gets pretty explanatory real fast
box.innerText = `time now ${now} current year ${now.getFullYear()}, month ${now.getMonth()}, date ${now.getDay()}`

const timeStamp = now.getTime();

// world started first of jan 1970 time stamps seem to be easier to use for comparison purposes get time can be used to do so
timestampBox.textContent = `Timestamps are the number of milliseconds sine teh first of jan 1970 when the simulation began so far it has been :${timeStamp} milliseconds`;

const ConvertMilisecondsToDays = miliseconds => {
    let days = (miliseconds/1000/60/60/24);
    return days;
}
const ConvertMillisecondsToHours = miliseconds => {
    let hours = (miliseconds/1000/60/60);
    return hours;
}
const ConvertHoursToMinutes = miliseconds => {
    let minutes = (miliseconds/1000/60);
    return minutes;
}
//time stamp comparisons




const tick = () =>{
    let currentTime  = new Date();
    const timeSince = currentTime - theBeforeTime.getTime();
    covidBox.textContent=`Covid has been going for ${ConvertMilisecondsToDays(timeSince)} days ago, ${ConvertMillisecondsToHours(timeSince)}, hours ago ${ConvertHoursToMinutes(timeSince)} minutes ago, and no those are not combined they should be but eh  `
    console.log('ss')
}



setInterval(tick, 1000);




