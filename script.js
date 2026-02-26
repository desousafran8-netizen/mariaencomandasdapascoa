function mostrarSabores() {
    let tipo = document.getElementById("tipo").value;
    let saboresDiv = document.getElementById("saboresDiv");

    if (tipo === "Recheado") {
        saboresDiv.style.display = "block";
    } else {
        saboresDiv.style.display = "none";
    }
}

function enviarPedido() {
    let nome = document.getElementById("nome").value;
    let tipo = document.getElementById("tipo").value;
    let sabor = document.getElementById("sabor").value;
    let cidade = document.getElementById("cidade").value;
    let endereco = document.getElementById("endereco").value;
    let pagamento = document.getElementById("pagamento").value;

    let preco = (tipo === "Recheado") ? "R$20" : "R$15";

    if (tipo !== "Recheado") {
        sabor = "Sem recheio";
    }

    let mensagem = `*Pedido de Páscoa*%0A Compra
Nome do Cliente: ${nome}%0A
Tipo de Ovo: ${tipo}%0A
Sabor: ${sabor}%0A
Valor R$: ${preco}%0A
Cidade: ${cidade}%0A
Endereço: ${endereco}%0A
Forma de Pagamento: ${pagamento}
........Obrigado Pela Preferência......
Já lhe respondo.`;

    // Troque pelo seu número com DDD (ex: 5599999999999)
    let telefone = "5599985216209";

    let url = `https://wa.me/${telefone}?text=${mensagem}`;
    window.open(url, "_blank");
}