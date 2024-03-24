class Pet {
    #nome;
    #tipo;
    #raca;
    #temperamento;

    constructor (nome, tipo, raca, temperamento) {
        this.#nome = nome;
        this.#tipo = tipo;
        this.#raca = raca;
        this.#temperamento = temperamento;
    }

    get nome() {
        return this.#nome;
    }

    get tipo() {
        return this.#tipo;
    }

    get raca() {
        return this.#raca;
    }

    get temperamento() {
        return this.#temperamento;
    }
}