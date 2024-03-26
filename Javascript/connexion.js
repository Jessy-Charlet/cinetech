$(document).ready(function () {

    let nomV = 0;
    let emailV = 0;
    let passwordV = 0;
    let passwordCV = 0;

    /*** RegExp pour l'Email */
    function validateEmail(email) {
        let emailReg = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/i);
        return emailReg.test(email);
    }

    function inscription() {
        if (nomV + emailV + passwordV + passwordCV == 4) {
            $("#inscription").prop('disabled', false);
            $("#inscription").addClass("active");
        } else {
            $("#inscription").prop('disabled', true);
        }
    }

    /*** Validation du formulaire inscription nom */
    $("#nom").on('focus', function () {
        $('#nomError').slideDown();
    })
    $("#nom").on('blur', function () {
        $('#nomError').slideUp();
    })
    $("#nom").on('keyup', function () {
        let nomValue = $(this).val();
        if (nomValue.match(/[a-z]/i) && !nomValue.match(/[0-9-!@#$%^&*]/g)) {
            $("#nom").addClass("active");
            $(".nom").addClass("active");
            nomV = 1;
        } else {
            $('#nom').removeClass("active");
            $('.nom').removeClass("active");
            nomV = 0;
        }
        inscription();
    })


    /*** Valisation du formulaire inscription email et qu'elle n'existe pas déjà */
    $("#email").on('focus', function () {
        $('#emailError').slideDown();
    })
    $("#email").on('blur', function () {
        $('#emailError').slideUp();
    })
    $("#email").on('keyup', function () {
        let emailValue = $(this).val();
        if (validateEmail(emailValue)) {
            $('#email').addClass("active");
            $("#email2").addClass("active");
            emailV = 1;
        } else {
            $('#email2').removeClass("active");
            $('#email').removeClass("active");
            emailV = 0;
        }
        inscription();
    })

    /*** Valisation du formulaire inscription password confirmation */
    $("#confirmPassword").on('focus', function () {
        $('#confirmPasswordError').slideDown();
    })
    $("#confirmPassword").on('blur', function () {
        $('#confirmPasswordError').slideUp();
    })
    $("#confirmPassword").on('keyup', function () {
        let confirmPasswordValue = $(this).val();
        if (confirmPasswordValue == $("#password").val()) {
            $("#confirmPassword").addClass("active");
            $(".verifpassword").addClass("active");
            passwordCV = 1;
        } else {
            $('#confirmPassword').removeClass("active");
            $(".verifpassword").removeClass("active");
            passwordCV = 0;
        }
        inscription();
    })

    /*** Validation du formulaire inscription password */
    $("#password").on('focus', function () {
        $('#passwordError').slideDown();
    })
    $("#password").on('blur', function () {
        $('#passwordError').slideUp();
    })
    $("#password").on('keyup', function () {
        let passValue = $(this).val();
        let min = false;
        let maj = false;
        let chi = false;
        let sym = false;
        let tai = false;
        if (passValue.match(/[a-z]/g)) {
            $(".minuscule").addClass("active");
            min = true;
        } else {
            $('.minuscule').removeClass("active");
        }
        if (passValue.match(/[A-Z]/g)) {
            $(".majuscule").addClass("active");
            maj = true;
        } else {
            $('.majuscule').removeClass("active");
        }
        if (passValue.match(/[0-9]/g)) {
            $(".chiffre").addClass("active");
            chi = true;
        } else {
            $('.chiffre').removeClass("active");
        }
        if (passValue.match(/[!@#$%^&*]/g)) {
            $(".symbole").addClass("active");
            sym = true;
        } else {
            $('.symbole').removeClass("active");
        }
        if (passValue.length > 7) {
            $(".taille").addClass("active");
            tai = true;
        } else {
            $('.taille').removeClass("active");
        }
        if (passValue == $("#confirmPassword").value) {
            $("#confirmPassword").addClass("active");
        } else {
            $("#confirmPassword").removeClass("active");
        }
        if (min == true && maj == true && chi == true && sym == true && tai == true) {
            $("#password").addClass("active");
            passwordV = 1;
        } else {
            $("#password").removeClass("active");
            passwordV = 0;
        }
        inscription();
    })

    
    $('input').on('keyup', function () {
        $('#connexion').prop('disabled', true);
        let connectEmailValue = $('#connectEmail').val();
        let connectPasswordValue = $('#connectPassword').val();
        $("#connectEmail").removeClass("active");
        $(".connectEmail").html("<span></span> Ce compte n'existe pas.");
        $("#connectPassword").removeClass("active") 
        $(".connectPassword").html('<span></span> Erreur de mot de passe.');
        fetch('users.php')
            .then(response => response.json())
            .then(data => {
                data.forEach(user => {
                    if (user.email == connectEmailValue) {
                        $("#connectEmail").addClass("active");
                        $(".connectEmail").text('');
                        if (user.password == connectPasswordValue){
                            $("#connectPassword").addClass("active") 
                            $(".connectPassword").text('');
                            $('#connexion').prop('disabled', false);
                        }
                    }
                });
            })
            .catch(error => console.error('Erreur lors de la récupération des utilisateurs:', error));
        $('#connectPasswordError').slideDown();
        $('#connectEmailError').slideDown();
    });

})