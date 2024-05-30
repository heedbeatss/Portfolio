document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
    const nome = document.getElementById('nome');
    const email = document.getElementById('email');
    const assunto = document.getElementById('assunto');
    const mensagem = document.getElementById('mensagem');
    const submitBtn = document.getElementById('submitBtn');

    const nomeError = document.getElementById('nomeError');
    const emailError = document.getElementById('emailError');
    const assuntoError = document.getElementById('assuntoError');
    const mensagemError = document.getElementById('mensagemError');

    const validateNome = () => {
        const nomeValue = nome.value.trim();
        
        if (nomeValue === '') {
            nomeError.textContent = 'O campo Nome não deve ficar em branco.';
            return false;
        } else if (nomeValue.length < 3) {
            nomeError.textContent = 'O campo Nome deve conter pelo menos 3 caracteres.';
            return false;
        } else if (nomeValue.length > 50) {
            nomeError.textContent = 'O campo Nome deve conter no máximo 50 caracteres.';
            return false;
        } else {
            nomeError.textContent = '';
            return true;
        }
    };

    const validateEmail = () => {
        const emailValue = email.value.trim();
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (emailValue === '') {
            emailError.textContent = 'O campo Email não deve ficar em branco.';
            return false;
        } else if (!emailPattern.test(emailValue)) {
            emailError.textContent = 'Por favor, insira um endereço de e-mail válido.';
            return false;
        } else {
            emailError.textContent = '';
            return true;
        }
    };

    const validateAssunto = () => {
        if (assunto.value.trim() === '') {
            assuntoError.textContent = 'O campo Assunto não deve ficar em branco.';
            return false;
        } else if (assunto.value.length > 50) {
            assuntoError.textContent = 'O campo Assunto deve conter no máximo 50 caracteres.';
            return false;
        } else {
            assuntoError.textContent = '';
            return true;
        }
    };

    const validateMensagem = () => {
        if (mensagem.value.trim() === '') {
            mensagemError.textContent = 'O campo Mensagem não deve ficar em branco.';
            return false;
        } else if (mensagem.value.length > 300) {
            mensagemError.textContent = 'O campo Mensagem deve conter no máximo 300 caracteres.';
            return false;
        } else {
            mensagemError.textContent = '';
            return true;
        }
    };

    const validateForm = () => {
        const isNomeValid = validateNome();
        const isEmailValid = validateEmail();
        const isAssuntoValid = validateAssunto();
        const isMensagemValid = validateMensagem();

        submitBtn.disabled = !(isNomeValid && isEmailValid && isAssuntoValid && isMensagemValid);

        return isNomeValid && isEmailValid && isAssuntoValid && isMensagemValid;
    };

    form.addEventListener('input', validateForm);

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Evitar envio do formulário para validação

        if (validateForm()) {
            alert('Formulário enviado com sucesso!');
            form.submit(); // Se o formulário for válido, submeter após o alerta
        } else {
            alert('Por favor, preencha todos os campos corretamente antes de enviar.');
        }
    });

    // Inicialmente desativar o botão de envio
    submitBtn.disabled = true;
});
