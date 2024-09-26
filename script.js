function solicitarDados(){
    // Solicitar o nome do usuário
    let nome = prompt("Qual é seu nome?");
    // Solicitar a idade do usuário
    let idade = prompt("Qual é sua idade?");

    // Exibe saudação
    alert("Olá, " + nome + "! Você tem " + idade + " anos.");

    // Mostra os dados no console
    console.log("Nome do usuário:", nome);
    console.log("Idade do usuário:", idade);
}