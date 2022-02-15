//this is a bad qway to do this kind of thing because you can view the awnsers in the console but this is just practice so whatever

const correctAnswers =['B','C','D','B','A'];



const form = document.getElementById('quizform');
let scorebox = document.querySelector('.scorebox');

let score =0;
form.addEventListener('submit', (e) => {
    e.preventDefault();

 
    const userAnswers =[form.q1.value,form.q2.value,form.q3.value,form.q14value,form.q5.value,];

    //CHheck awnsers
    userAnswers.forEach((answer, index) =>{
       if(answer === correctAnswers[index]){
        score+=20;
       }
    });
    scrollTo(0,0);
    scorebox.textContent = `${score}%`;
    
});