let vote = 0;

document.addEventListener('DOMContentLoaded', () => {
    let questionup = document.querySelector('#questionup');
    questionup.addEventListener('click', () => { 
        vote++;

      document.querySelector('#labelup').innerHTML = vote;
    });
   
    let questiondown = document.querySelector('#questiondown');
    questiondown.addEventListener('click', () => {
      if(vote > 0) {
        vote--;
      }
      document.querySelector('#labeldown').innerHTML = vote;
    });
  });