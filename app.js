const form = document.querySelector('.quiz-form');

form.addEventListener('submit', e => {
  e.preventDefault();
  e.stopPropagation();
  

  const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value, form.q5.value];
  const correctAnswers = ['A', 'B', 'A', 'A','B'];
  const result = document.querySelector('.result');
  let score = 0;
  
  userAnswers.forEach((answer, index) => {
    if(answer === correctAnswers[index]){
      score += 25;
    };
  });
  window.scrollTo(0, 0);                 
                                         
  result.style.display = 'block';      
  let output = 0;                         
  const timer = setInterval(() => {
    result.querySelector('span').textContent = `${output}%`;  
    if(output === score){                                    
      clearInterval(timer)
    } else{
      output ++;
    }
  }, 10)
});











