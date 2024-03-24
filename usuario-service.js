class UsuarioService {

    #listaUsuarios;

    constructor() {
        this.#listaUsuarios = [];
        this.#carregarUsuarios();
    }

    get listaUsuarios() {
        return this.#listaUsuarios;
    }

    #carregarUsuarios() {
        this.#listaUsuarios.push(new Usuario("Ana", "ana@email.com", "Av Ipiranga, 2023", "51 99999 9999", "1234"));
    }

    incluirUsuario(usuario) {
        this.#listaUsuarios.push(usuario);
    }

    buscaUsuario(email, senha) {
        for (let i = 0; i < this.#listaUsuarios.length; i++) {
            if (this.#listaUsuarios[i].email == email && this.#listaUsuarios[i].senha == senha) {
                return this.#listaUsuarios[i];
            }
        }
        return undefined;
    }

    alterar(usuario) {
        console.log(usuario);
        for (let i = 0; i < this.#listaUsuarios.length; i++) {
            if (this.#listaUsuarios[i].email == usuario.email) {
                this.#listaUsuarios[i] = usuario;
            }
        }
    }

}