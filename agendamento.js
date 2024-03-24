class Agendamento {
    #usuario;
    #banho;
    #tosa;
    #busca;
    #porte;
    #dataHora;
    #endereco;

    constructor (usuario, banho, tosa, busca, porte, dataHora, endereco) {
        this.#usuario = usuario;
        this.#banho = banho;
        this.#tosa = tosa;
        this.#busca = busca;
        this.#porte = porte;
        this.#dataHora = dataHora;
        this.#endereco = endereco;
    }

    get usuario() {
        return this.#usuario;
    }

    get banho() {
        return this.#banho;
    }

    get tosa() {
        return this.#tosa;
    }

    get busca() {
        return this.#busca;
    }

    get porte() {
        return this.#porte;
    }

    get dataHora() {
        return this.#dataHora;
    }

    get endereco() {
        return this.#endereco;
    }

    set usuario(novoUsuario) {
        this.#usuario = novoUsuario;
    }

    set banho(novoBanho) {
        this.#banho = novoBanho;
    }

    set tosa(novaTosa) {
        this.#tosa = novaTosa;
    }

    set busca(novaBusca) {
        this.#busca = novaBusca;
    }

    set porte(novoPorte) {
        this.#porte = novoPorte;
    }

    set dataHora(novaDataHora) {
        this.#dataHora = novaDataHora;
    }

    set endereco(novoEndereco) {
        this.#endereco = novoEndereco;
    }

    resumo() {
        let mensagem = "";
        let valor = 0;
        if (this.#banho) {
            mensagem += "• BANHO ";
            valor += 80;
        }
        if (this.#tosa) {
            mensagem += "• TOSA ";
            valor += 80;
        }
        if (this.#busca) {
            mensagem += "• TELE BUSCA ";
            valor += 30;
        }
        mensagem += "\n";
        mensagem += "PORTE: " + this.#porte + "\n";
        mensagem += "DATA E HORA: " + this.#dataHora + "\n";
        mensagem += "ENDEREÇO: " + this.#endereco + "\n";
        mensagem += "VALOR: R$ " + valor + "\n";
        mensagem += "(Pagamento em formato presencial na PET Shop ou na Tele Busca.)";

        return mensagem;
    }
}