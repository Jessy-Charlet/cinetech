<?php
include('./header.php');
?>
<section class="formulaire">
    <form id="inscriptionForm" action="connexion.php" method="post">
        <h1>Inscription</h1>
        <label for="nom">Pseudo:</label>
        <input type="text" id="nom" name="nom" placeholder="Pseudo" required>
        <div id="nomError">
            <ul>
                <li class="nom"><span></span> Indiquez votre pseudo</li>
            </ul>
        </div>

        <label for="email">Email:</label>
        <input type="email" id="email" name="email" placeholder="Email" required>
        <div id="emailError">
            <ul>
                <li id="email2"><span></span> Doit être un email valide</li>
            </ul>
        </div>
        <label for="password">Mot de passe:</label>
        <input type="password" id="password" name="password" placeholder="Mot de passe" required>
        <div id="passwordError">
            <ul>
                <li class="minuscule"><span></span> Au moins une minuscule</li>
                <li class="majuscule"><span></span> Au moins une majuscule</li>
                <li class="chiffre"><span></span> Au moins un chiffre</li>
                <li class="symbole"><span></span> Au moins un caractère spécial</br>(!@#$%^&*)</li>
                <li class="taille"><span></span> Au moins 8 caractères</li>
            </ul>
        </div>

        <label for="confirmPassword">Confirmer le mot de passe:</label>
        <input type="password" id="confirmPassword" name="confirmPassword" placeholder="Confirmation de mot de passe" required>
        <div id="confirmPasswordError">
            <ul>
                <li class="verifpassword"><span></span> Doit être égale au mot de passe</li>
            </ul>
        </div>

        <button type="submit" id="inscription">Inscription</button>
    </form>
</section>
<?php
include('./footer.php');
?>