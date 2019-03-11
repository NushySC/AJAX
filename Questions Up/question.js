class Question {
    constructor (text, state) {
        this.text = text;
        this.state = state;
    }

    render() {
        this.element = document.createElement('div');
        this.element.className = 'question';
        this.element.innerHTML = `
        <p class="text" id="text"></p>
        <p class="state" id="state"></p>`
        return this.element;
    }

    mount(parent) {
        parent.appendChild(this.render());
      }

    update() {
        let text = this.element.querySelector("#text");
        let state = this.element.querySelector('#state');

        text.textContent = this.text;
        state.textContent = this.state;
    }

}