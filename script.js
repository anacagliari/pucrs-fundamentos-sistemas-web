let usuarioService = new UsuarioService();
let agendamentoService = new AgendamentoService();
let usuarioLogado = undefined;
displayLogado();

function displayLogado() {
    if (usuarioLogado != undefined) {
        document.getElementById('div-login').style.display = "none";
        document.getElementById('div-logout').style.display = "block";
    } else {
        document.getElementById('div-login').style.display = "block";
        document.getElementById('div-logout').style.display = "none";
    }
}

function acessaMinhaConta() {
    setTimeout(carregaFormUsuario, 700);
}

function logout() {
    usuarioLogado = undefined;
    displayLogado();
}

function login() {
    let email = document.getElementById('email').value;
    let senha = document.getElementById('senha').value;
    usuarioLogado = usuarioService.buscaUsuario(email, senha);
    if (usuarioLogado === undefined) {
        alert("E-mail e Senha inválidos.");
    } else {
        window.location.hash = '#/area-usuario';
        setTimeout(carregaFormUsuario, 700);
    }
}

function cadastraUsuario() {
    let nome = document.getElementById('nome-completo').value;
    let email = document.getElementById('e-mail').value;
    let endereco = document.getElementById('endereco').value;
    let telefone = document.getElementById('telefone').value;
    let senha = document.getElementById('senha').value;
    let usuario = new Usuario(nome, email, endereco, telefone, senha);
    usuarioService.incluirUsuario(usuario);
    usuarioLogado = usuario;
    window.location.hash = '#/area-usuario';
    setTimeout(carregaFormUsuario, 700);
}

function carregaFormUsuario() {
    document.getElementById('nome-completo').value = usuarioLogado.nome;
    document.getElementById('e-mail').value = usuarioLogado.email;
    document.getElementById('endereco').value = usuarioLogado.endereco;
    document.getElementById('telefone').value = usuarioLogado.telefone;
    displayLogado();
    apresentaPets();
}

function autalizaCadastro(){
    let senhaAtual = document.getElementById('senha-atual').value;
    if (senhaAtual === usuarioLogado.senha) {
        usuarioLogado.nome = document.getElementById('nome-completo').value;
        usuarioLogado.endereco = document.getElementById('endereco').value;
        console.log(document.getElementById('telefone').value);
        usuarioLogado.telefone = document.getElementById('telefone').value;
        usuarioLogado.senha = document.getElementById('nova-senha').value;
        usuarioService.alterar(usuarioLogado);
        alert("Cadastro atualizado com sucesso.");
    } else {
        alert("Senha atual incorreta.");
    }
}

function apresentaPets() {
    // Referência ao corpo da tabela
    let tbody = document.querySelector("#tabela-pets tbody");

    tbody.innerHTML = '';
    // Itera sobre o array de pets e insere os valores na tabela
    usuarioLogado.pets.forEach(function(pet) {
        // Cria uma nova linha na tabela
        var novaLinha = document.createElement("tr");
   
        // Cria uma célula para o nome do pet
        var celulaNome = document.createElement("td");
        celulaNome.textContent = pet.nome; // Insere o nome do pet na célula
   
        // Cria uma célula para a idade do pet
        var celulaIdade = document.createElement("td");
        celulaIdade.textContent = pet.tipo; // Insere a idade do pet na célula
   
        // Cria uma célula para a espécie do pet
        var celulaEspecie = document.createElement("td");
        celulaEspecie.textContent = pet.raca; // Insere a espécie do pet na célula
   
        // Cria uma célula para a espécie do pet
        var celulaTemp = document.createElement("td");
        celulaTemp.textContent = pet.temperamento; // Insere a espécie do pet na célula
   
        // Adiciona as células à linha
        novaLinha.appendChild(celulaNome);
        novaLinha.appendChild(celulaIdade);
        novaLinha.appendChild(celulaEspecie);
        novaLinha.appendChild(celulaTemp);
   
        // Adiciona a linha ao corpo da tabela
        tbody.appendChild(novaLinha);
    });
}

function cadastraPet() {
    let nome = document.getElementById('pet-nome').value;
    let tipo = document.getElementById('tipo').value;
    let raca = document.getElementById('raca').value;
    let temperamento = document.getElementById('temperamento').value;
    let pet = new Pet(nome, tipo, raca, temperamento);
    usuarioLogado.adicionaPet(pet);
    usuarioService.alterar(usuarioLogado);
    alert("PET incluido com sucesso.");
    apresentaPets();
}

function carregaTelaServico() {
    setTimeout(carregaNomeUsuario, 100);
}

function carregaNomeUsuario() {
    if (usuarioLogado != undefined) {
        document.getElementById('usuario-logado').innerText = "Olá " + usuarioLogado.nome + "!";
    }
}

function agendarServico() {
    if (usuarioLogado == undefined) {
        alert("Para agendar os serviços é necessário estar logado.");
    } else {
        let banho = document.getElementById('banho').checked;
        let tosa = document.getElementById('tosa').checked;
        let busca = document.getElementById('busca').checked;
        let porte = document.getElementById('porte').value;
        let dataHora = document.getElementById('dataHora').value;
        let endereco = document.getElementById('endereco').value;
        let agendamento = new Agendamento(usuarioLogado, banho, tosa, busca, porte, dataHora, endereco);
        if (confirm(agendamento.resumo())) {
            agendamentoService.incluirAgendamento(agendamento);
            alert("Agendado com sucesso!");
        }
    }
}