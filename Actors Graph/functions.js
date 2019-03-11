function load_actor() {

    fetch('https://classes.codingbootcamp.cz/assets/classes/workouts/actor-o-matic/actor/22616', {
    method: 'GET'
    })

    .then(response => response.json()) //parses the JSON response
    .then(data => {
        

        console.log(data);
        let h1 = document.querySelector('h1.name'); //get element
        h1.innerHTML = data.name; //change inner HTML


        document.querySelector('.movies-total .data'). innerHTML = data.movies_total; //one liner same as above

    // use data here
 
});
}

function load_ratings() {
    fetch('https://classes.codingbootcamp.cz/assets/classes/workouts/actor-o-matic/actor/22616/ratings', {
        method: 'GET'
})
    
        .then(response => response.json()) //parses the JSON response
        .then(data => {
        lineChart('ratings-data', data);
});
}

function load_genres() {
    fetch('https://classes.codingbootcamp.cz/assets/classes/workouts/actor-o-matic/actor/22616/genres', {
    method: 'GET'
})  

        .then(response => response.json()) //parses the JSON response
        .then(data => {
        pieChart('genres-data', data);
        });

}
