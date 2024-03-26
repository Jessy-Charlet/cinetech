<?php

/*** Connexion à la base de donnée */
$servername = 'localhost';
$username = 'root';
$password = '';
$bddname = 'cinetech';
if (isset($_POST["nom"])) {
    // On essaie de se connecter
    try {
        $pdo = new PDO("mysql:host=$servername;dbname=$bddname", $username, $password);
        // On définit le mode d'erreur de PDO sur Exception
        $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    }
    // On capture les exceptions si une exception est lancée et on affiche les informations relatives à celle-ci
    catch (PDOException $e) {
        echo "Erreur : " . $e->getMessage();
    }
    // On récupère les valeurs
    $pseudo = $_POST["nom"];
    $email = $_POST["email"];
    $password = $_POST["password"];

    // La requête SQL
    $sql = "INSERT INTO users (pseudo, email, password)
    VALUES (:pseudo, :email, :password)";
    $res = $pdo->prepare($sql);
    $exec = $res->execute(array("pseudo" => $pseudo, "email" => $email, "password" => $password));
    // On vérifie si la requête d'insertion a réussi
    if ($exec) {
        echo "Inscription réussi";
    } else {
        echo "Echec de l'insciption";
    }
    // On ferme la connexion
    $pdo = null;
}

include('./header.php');
?>
<section class="formulaire">
    <form id="connexionForm" action="index.php" method="post">
        <h1>Connexion</h1>
        <label for="email">Email:</label>
        <input type="email" id="connectEmail" name="email" placeholder="Email" required>
        <span id="emailError"></span>
        <div id="connectEmailError">
            <ul>
                <li class="connectEmail"></li>
            </ul>
        </div>

        <label for="password">Mot de passe:</label>
        <input type="password" id="connectPassword" name="password" placeholder="Mot de passe" required>
        <span id="passwordError"></span>
        <div id="connectPasswordError">
            <ul>
                <li class="connectPassword"></li>
            </ul>
        </div>

        <button type="submit" id="connexion">Connexion</button>
        <p>Si vous n'avez pas encore de compte : <a href="./inscription.php">Créer un compte</a></p>
    </form>
</section>
<?php
include('./footer.php');
?>