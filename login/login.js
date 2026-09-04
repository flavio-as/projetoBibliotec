const campoSenha = document.getElementById("senha");

const btnMostraSenha = document.querySelector("#mostrar-senha");

btnMostraSenha.addEventListener("click", function () {
    // if (campoSenha.type == "password") {
    //     campoSenha.type = "text";
    // }
    // else {
    //     campoSenha.type = "password";
    // }

    campoSenha.type = campoSenha.type == "password" ? "text" : "password"
});