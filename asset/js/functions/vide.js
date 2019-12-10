function valider() {

    let nom = document.getElementById('nom').value;
    let prenom = document.getElementById('prenom').value;
    let email = document.getElementById('email').value;
    let msg = "";

    if (nom === "") msg += 'Veuillez mettre votre nom\r\r';
    if (prenom === "") msg += 'Veuillez mettre votre prénom\r\r';
    if (email === "") msg += 'Veuillez mettre votre email';

    alert(msg);
}