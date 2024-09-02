document.addEventListener('DOMContentLoaded', (event) => {
    const form = document.getElementById('form_prest');
    const resultado_form = document.getElementById('resultado');
    const acumulado_form = document.getElementById('acumulado');

    form.addEventListener('submit', (e) => {
        e.preventDefault(); 

        const monto = document.getElementById('monto').value;
        const periodo = document.getElementById('periodo').value;
        const tasa = 0.02;

        const numerador = tasa * monto;
        const denominador = 1- ( (1+tasa)**(-periodo) );

        const resul = numerador / denominador;
        const resultado = resul.toFixed(2);

        const acum = resultado * periodo;
        const acumulado = acum.toFixed(2);

        resultado_form.value = resultado;
        acumulado_form.value = acumulado;
    });
});
