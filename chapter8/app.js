//this is a bad qway to do this kind of thing because you can view the awnsers in the console but this is just practice so whatever

const correctAnswers =['B','C','D','B','A'];


const form = document.getElementById('quizform');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    let score =0;
    const userAnswers =[form.q1.value,form.q2.value,form.q3.value,form.q14value,form.q5.value,];

    //CHheck awnsers
    userAnswers.forEach((answer, index) =>{
       if(answer === correctAnswers[index]){
        score+=25;
       }
    });
    console.log(score);
})