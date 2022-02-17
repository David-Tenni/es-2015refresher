const now  = new Date();
let timestampBox = document.getElementById('time-stamp');
let box = document.getElementById('time');
//ok this gets pretty explanatory real fast
box.innerText = `time now ${now} current year ${now.getFullYear()}, month ${now.getMonth()}, date ${now.getDay()}`

const timeStamp = now.getTime();

//
timestampBox.textContent = `Timestamps are the number of milliseconds sine teh first of jan 1970 when the simulation began so far it has been :${timeStamp} milliseconds`;
