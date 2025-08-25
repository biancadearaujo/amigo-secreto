let amigos = [];

function adicionarAmigo(){
    let campo = document.getElementById("amigo");

    if(campo.value === ""){
        alert('Por favor, insira um nome.');
    }
    amigos.push(campo.value);
    atualizar();
    limparCampo();
}

function limparCampo(){
    let campo = document.getElementById("amigo");
    campo.value = '';
}

function atualizar(){
    const lista =  document.getElementById('listaAmigos');
    lista.innerHTML = "";

    for (let i = 0; i < amigos.length; i++) {
        const itemLista = document.createElement('li');
        itemLista.textContent = amigos[i];
         lista.appendChild(itemLista);
    }
}

function sortearAmigo(){
    if(amigos.length === 0){
        alert('Digite um amigo para poder sortear');
    }
    const indiceAleatorio = Math.floor(Math.random()*amigos.length);
    const amigoSorteado = amigos[indiceAleatorio];

    const sorteadoResultado =  document.getElementById('resultado');
    sorteadoResultado.innerHTML = `<p>O amigo sorteado foi: <strong>${amigoSorteado}</strong></p>`;

}

function reiniciar() {
    amigos = [];
    document.getElementById('listaAmigos').innerHTML = '';
    document.getElementById('resultado').innerHTML = '';
}