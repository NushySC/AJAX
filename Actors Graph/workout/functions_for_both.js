const initialize_actors = () => {

    // initialize the navigation
    let links = document.querySelectorAll('nav a');
    links.forEach((link) => {

        link.addEventListener('click', (event) => {

            event.preventDefault(); // prevent the default behaviour of clicking a link

            let id = link.getAttribute('data-id'); // get the value of the data-id attribute of THIS link
            load_complete_actor(id); // use the id to load the appropriate actor

        })

    })
    
}

const load_complete_actor = (actor_id) => {

    // show the loader
    //document.querySelector('.loader').classList.remove('hidden');

    load_actor(actor_id);
    load_ratings(actor_id);
    load_genres(actor_id);


}

const load_actor = (actor_id) => {

    fetch(`https://classes.codingbootcamp.cz/assets/classes/workouts/actor-o-matic/actor/${actor_id}`, {
        method: 'GET'
    }) //change to backticks or concatenation!!

    .then(response => response.json()) // parses the JSON response
    .then(data => {
        

        //console.log(data);
        let h1 = document.querySelector('h1.name'); //get element
        h1.innerHTML = data.name; //change inner HTML


        document.querySelector('.movies-total .data').innerHTML = data.movies_total; //one liner same as above


});
}

function load_ratings(actor_id) {

    fetch(`https://classes.codingbootcamp.cz/assets/classes/workouts/actor-o-matic/actor/${actor_id}/ratings`, {
        method: 'GET'
    })
    .then(response => response.json()) // parses the JSON response
    .then(data => {

        lineChart('ratings-data', data);
});
}

function load_genres(actor_id) {
    fetch(`https://classes.codingbootcamp.cz/assets/classes/workouts/actor-o-matic/actor/${actor_id}/genres`, {
    method: 'GET'
})  

        .then(response => response.json()) //parses the JSON response
        .then(data => {
        pieChart('genres-data', data);
        });

}


//22616 Bruce
//