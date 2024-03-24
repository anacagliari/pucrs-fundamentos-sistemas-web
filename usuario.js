class Usuario {
    
    #nome;
    #email;
    #endereco;
    #telefone;
    #senha;
    #pets;

    constructor(nome, email, endereco, telefone, senha){
        this.#nome = nome;
        this.#email = email;
        this.#endereco = endereco;
        this.#telefone = telefone;
        this.#senha = senha;
        this.#pets = [];
    }

    get nome() {
        return this.#nome;
    }

    get email() {
        return this.#email;
    }

    get endereco() {
        return this.#endereco;
    }

    get telefone() {
        return this.#telefone;
    }

    get senha() {
        return this.#senha;
    }

    get pets() {
        return this.#pets;
    }

    set nome(nome) {
        this.#nome = nome;
    }

    set endereco(endereco) {
        this.#endereco = endereco;
    }

    set telefone(telefone) {
        this.#telefone = telefone;
    }

    set senha(senha) {
        this.#senha = senha;
    }

    adicionaPet(pet) {
        this.#pets.push(pet);
    }

}