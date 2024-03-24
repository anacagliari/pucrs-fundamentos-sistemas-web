class AgendamentoService {

    #listaAgendamento;

    constructor() {
        this.#listaAgendamento = [];
    }

    get listaAgendamento() {
        return this.#listaAgendamento;
    }

    incluirAgendamento(agendamento) {
        this.#listaAgendamento.push(agendamento);
    }
}