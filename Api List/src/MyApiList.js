export default class MyApiList {
    constructor(url, container_id) {
    this.url = url;
    this.container_id = container_id;
    }

    load() {
        fetch(this.url, {
        method: 'GET'})
        .then(response => response.json())
        .then(data => {this.display(data)});
        //.then((data) => {this.display(data)})
        // .then(function(response) {
        //     return response.json();
        // }).then(function(j) {
        //     console.log(j); 
        
     }

    display(data){
        this.element = document.getElementById('my_container');
        data.forEach(item => {
            this.listEl = document.createElement('li');
            this.listEl.innerHTML = item;
            this.element.appendChild(this.listEl)
            
        });
            
        };
    };


    //I works but fix MyApiList.js:25 Uncaught TypeError: Cannot read property 'forEach' of undefined

