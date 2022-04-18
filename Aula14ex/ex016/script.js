function calcular() {
    var txtinicio = window.document.querySelector('input#txtinicio');
    var txtfim = window.document.querySelector('input#txtfim');
    var txtpasso = window.document.querySelector('input#txtpasso');
    var res = window.document.querySelector('div#res');
    var vel = Number(txtinicio.value);
    res.innerHTML += `<p>Olá, tudo bem?${vel}</p>`;
}