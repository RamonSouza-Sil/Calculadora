function insert(numb){
    var numero = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = numero + numb;


}

function limpa(){
    document.getElementById('resultado').innerHTML = "";
}

function volta(){
    var resultado = document.getElementById('resultado').innerHTML;

    document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length - 1)
}

function calcular(){
    var resultado = document.getElementById('resultado').innerHTML;

    if (resultado) {
        document.getElementById('resultado').innerHTML = eval(resultado);
    } 

}