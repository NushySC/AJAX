const processData = (json) => {
    const questionsElm = document.querySelector('.text');
    json.map(questions => {
        const h3 = document.createElement('h3');
        h3.textContent = questions.body;
        return h3;
    }).forEach(item => questionsElm.appendChild(item));
}


    fetch('http://bootcamp.podlomar.org/api/questions')
    .then(response => response.json())
    .then(processData);

    

///do the thing for the questions