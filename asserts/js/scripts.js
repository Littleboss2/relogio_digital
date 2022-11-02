const horas = document.getElementById('horas');
const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');

const relogio = setInterval(function time() {
    let dateToday = new Date();
    let hr = dateToday.getHours();
    let mi = dateToday.getMinutes();
    let se = dateToday.getSeconds();

    if (hr < 10) hr = '0' + hr;

    if (mi < 10) mi = '0' + mi;

    if (se < 10) se = '0' + se;

    horas.textContent = hr;
    minutos.textContent = mi;
    segundos.textContent = se;
})

// Mes e dias do Ano
const dias = document.getElementById('dias');
const mes = document.getElementById('meses');
const ano = document.getElementById('anos');

const date = setInterval(function data() {
    let now = new Date();
    let di = now.getUTCDate();
    let me = now.getMonth();
    let an = now.getFullYear();

    if (me >= 0 ) me = 1 + me;

    dias.textContent = di;
    mes.textContent = me;
    ano.textContent = an;
})
