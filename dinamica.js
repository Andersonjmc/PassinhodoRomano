var code = document.getElementById('cod');
var decode = document.getElementById('deco');
var botao = document.getElementById('botao');

// Função que muda o conteúdo do botão

function mudaBotao () {
    if (decode.checked) {
        botao.innerHTML = "Decodificar!";
        console.log(botao);
    } 
    else if (code.checked) {
        botao.innerHTML = "Codificar!";
    }
}


// Mostrando o incremento se "César" for selecionado
var cesar = document.getElementById('cesar');
var base64 = document.getElementById('base64');
var incremento = document.getElementById('incremento');

function mostraInc() { 
    incremento.style.display = "block"; 
}

function escondeInc() {
    incremento.style.display = "none";
}

cesar.addEventListener('change', mostraInc);
base64.addEventListener('change', escondeInc)

var resultado = document.querySelector('.caixaVazia2');
var inc = parseInt(document.getElementById('increment').value);
console.log(inc);
console.log(typeof inc);

botao.addEventListener('click', function(event) {
    event.preventDefault();
    checaOpcao();
});

function codeCesar(msg) {
    msg = msg.split("");
    console.log(msg);
    inc = parseInt(document.getElementById('increment').value);
    let indexAtual = msg.map((x) => x.charCodeAt());
    console.log(indexAtual);
    let indexNovo = indexAtual.map((x) => x+inc);
    console.log(indexNovo);
    let msgNova = indexNovo.map((x) => String.fromCharCode(x)).join("");
    console.log(msgNova);
    return msgNova;
}

function decodeCesar(msg) {
    msg = msg.split("");
    inc = parseInt(document.getElementById('increment').value);
    let indexAtual = msg.map((x) => x.charCodeAt())
    let indexNovo = indexAtual.map((x) => x-inc);
    let msgNova = indexNovo.map((x) => String.fromCharCode(x)).join("");
    console.log(msgNova);
    return msgNova;
}

function checaOpcao () {
    var msg = document.getElementById('caixaVazia1').value;
    console.log(msg);

    if (code.checked) {
        if (cesar.checked) {
            console.log("Codificar César")
            resultado.value = codeCesar(msg);
        } else {
            console.log("Codificar base64")
            resultado.innerText = btoa(msg);
        } 
    } else if (decode.checked) {
        if (cesar.checked) {
            console.log("Decodificar César")
            resultado.innerText = decodeCesar(msg);
        } else {
            console.log("Decodificar base64")
            resultado.innerText = atob(msg);
        } 
    } else {
        resultado.innerText = "Escolha um procedimento válido.";
    }
}
