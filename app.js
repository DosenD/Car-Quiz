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
  window.scrollTo(0, 0);                  // pise se bez window jer se on podrazumeva,zelimo da skrolujemo stranicu na vrh malo pre nego sto ubacimo text u span i otkrijemo ga, zato ga stavljamo pre toga 
                                          //result.querySelector('span').textContent = `${score}%`; - ne koristimo vise
  result.style.display = 'block';      //reaguje na submit posto je u njemu tj pod evenetLis
  let output = 0;                         //postavljamo pocetnu vrednost output-a(brojcane vrednosti)%
  const timer = setInterval(() => {
    result.querySelector('span').textContent = `${output}%`;  //selektujemo span i njegov sadrzaj postavljamo jednakim sa output
    if(output === score){                                     // ako output bude = scorom prekini interval ako nije jos jednak dodaj jedan dok ne bude svakih 10ms
      clearInterval(timer)
    } else{
      output ++;
    }
  }, 10)
});











