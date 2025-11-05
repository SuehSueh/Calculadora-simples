function insert(N)
{
var numero = document.getElementById('resultado').innerHTML;
document.getElementById('resultado').innerHTML = numero + N;
}
function clean()
{
    document.getElementById('resultado').innerHTML = "";
}