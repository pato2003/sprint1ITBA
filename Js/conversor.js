document.addEventListener('DOMContentLoaded', (event) => {
    const form = document.getElementById('form_conv');
    const resultado_form = document.getElementById('resultado');

    form.addEventListener('submit', (e) => {
        e.preventDefault(); 

        const monto = document.getElementById('monto').value;

        const resul = monto / 973;

        const resultado = resul.toFixed(2);

        resultado_form.value = resultado;
    });
});
