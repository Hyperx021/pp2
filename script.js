const toggleTheme = document.getElementById('toggleTheme');
const body = document.body;

let isDarkMode = false;

toggleTheme.addEventListener('click', () => {
    isDarkMode = !isDarkMode;
    body.classList.toggle('dark-theme');
    body.classList.toggle('light-theme');
});

//enviar/enviado 

const form = document.getElementById('myForm');
const button = document.getElementById('btnEnviar');

form.addEventListener('submit', (event) => {
    event.preventDefault(); // Impede o envio padrão do formulário

    // Aqui você pode adicionar o código para enviar os dados do formulário, por exemplo, usando fetch ou XMLHttpRequest

    // Após enviar os dados, altere o texto do botão
    button.value = 'ENVIADO';
    button.disabled = true; // Desabilita o botão após o envio

    // Adicione um temporizador para redefinir o botão (opcional)
    setTimeout(() => {
        button.value = 'ENVIAR';
        button.disabled = false;
    }, 3000); // Aguarda 3 segundos
});