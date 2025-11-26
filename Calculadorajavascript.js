
/*inserir número*/
function insert(N) {
    var numero = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = numero + N;
}


/* apagar tudo*/
function clean() {
    document.getElementById('resultado').innerHTML = "";
}


/*Apagar 1 digito*/
function back() {
    var resultado = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length - 1);
}
/*array do historico*/
let historico = [];

/*execução de calculo*/
function calcular() {
    var valor = document.getElementById('resultado').innerHTML;
    if (valor) {
        try {
            let resultado = eval(valor);
            document.getElementById('resultado').innerHTML = resultado;
            adicionarHistorico(valor + " = " + resultado);
            
        } catch {
            document.getElementById('resultado').innerHTML = "Erro";
        }
    }
}

/* SALVAR NO HISTÓRICO */
function adicionarHistorico(item) {
    historico.unshift(item);
    if (historico.length > 12) historico.pop();
    atualizarHistorico();
}

function atualizarHistorico() {
    let lista = document.getElementById('historico');
    lista.innerHTML = "";

    historico.forEach(item => {
        let li = document.createElement("li");
        li.textContent = item;
        lista.appendChild(li);
    });
}

/* CONTROLE DO SLIDE */
const container = document.getElementById("historicoContainer");
const seta = document.getElementById("toggleSeta");
let aberto = false;

seta.addEventListener("click", () => {
    aberto = !aberto;

    if (aberto) {
        container.classList.add("mostrar");
        seta.classList.add("ativa");
    } else {
        container.classList.remove("mostrar");
        seta.classList.remove("ativa");
    }
});
