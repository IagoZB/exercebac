const numeroSorteado = Math.floor(Math.random() * 100) + 1;
let tentativas = 0;

function verificar() {
    const num = parseInt(document.getElementById("num").value);
    const mensagem = document.getElementById("mensagem");
    const tentativasSpam = document.getElementById("tentativas");

    tentativas++;

    if (num === numeroSorteado) {
        mensagem.textContent = "Parabéns! Você acertou em " + tentativas + " tentativas!";
        mensagem.style.color = "green";
    }else if (num < numeroSorteado) {
        mensagem.textContent = "Tente um número maior!";
        mensagem.style.color = "red";
    } else if (num > numeroSorteado) {
        mensagem.textContent = "Tente um número menor!";
        mensagem.style.color = "red";
    }

    tentativasSpam.textContent = tentativas;
}