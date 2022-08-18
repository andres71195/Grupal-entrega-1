function showAlertSuccess() {
    document.getElementById("alert-success").classList.add("show");
}

function showAlertError() {
    document.getElementById("alert-danger").classList.add("show");
}

const nombre = document.getElementById("nombre");
const apellido = document.getElementById("apellido");
const email = document.getElementById("email");
const password1 = document.getElementById("password1");
const password2 = document.getElementById("password2");
const terminos = document.getElementById("terminos");

const registro = document.getElementById("regBtn");

registro.addEventListener('click', (e) => {
if (nombre.value === '' || apellido.value === '' || email.value === '' || password1.value === ''|| password2.value === '') 
{ e.preventDefault();
    showAlertError();
}
else {
    showAlertSuccess();
}

if (password1.length >= 6) {
    showAlertSuccess();
}
else {
    e.preventDefault();
    showAlertError();
}

if (password1.value !== password2.value) {
    e.preventDefault();
    showAlertError(); 
}

if (terminos.checked) {
    showAlertSuccess();
}

else {
    e.preventDefault();
    showAlertError();
}

})