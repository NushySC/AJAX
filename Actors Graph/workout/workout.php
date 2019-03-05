<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Actor-o-matic</title>

    <script src="workout.js"></script>
</head>
<body>

    <div id="page">
    
        <nav>
            <a href="#" data-id="22616">Bruce Willis</a>
            <a href="#" data-id="19302">Salma Hayek</a>
        </nav>

        <div class="main">
        
            <h1 class="name"></h1>

            <div class="movies-total">
                <h2>Movies total</h2>
                <div class="data"></div>
            </div>

            <div class="ratings">
                <h2>Movie ratings over time</h2>
                <div id="ratings-data" class="data"></div>
            </div>

            <div class="genres">
                <h2>Genres</h2>
                <div id="genres-data" class="data"></div>
            </div>

        </div>

    </div>

<script src="functions_for_both.js"></script>

    <script>

function chartScriptsReady() {

    // call your functions here
    
    // load_actor();
    // load_ratings();
    // load_genres();
        
    //load_complete_actor(); above in one line

    initialize_actors();
}

    </script>

    <script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
    <script>
        google.charts.load('current', {'packages':['corechart']});
        google.charts.setOnLoadCallback(() => { chartScriptsReady() });
    </script>
    
</body>
</html>