
function sim(){
    alert("EBA, VOCÊ ACEITOU SE CASAR COMIGO,                  AGUARDE O PEDIDO PRESENCIAL...!");
}
function desvia(t){
    var btn = t;
    btn.style.position = 'absolute';
    btn.style.botoom = geraPosicao(10, 90);
    btn.style.left = geraPosicao(0, 90);
    console.log("opa. desviei")
}
function geraPosicao(min, max){
    return (Math.random() * (max - min) + min) + "%";
}