<?php

if (isset($_POST["email"])) {
    $host = 'localhost';
    $user = 'root';
    $password = '';
    $database = 'cinetech';

    // Connexion à la base de données
    $conn = new mysqli($host, $user, $password, $database);

    if ($conn->connect_error) {
        die("Erreur de connexion à la base de données : " . $conn->connect_error);
    }

    // Récupération des utilisateurs
    $query = "SELECT * FROM users";
    $result = $conn->query($query);

    // Construction du tableau associatif des utilisateurs
    $users = array();
    while ($row = $result->fetch_assoc()) {
        if ($row["email"] == $_POST["email"])
        setcookie("user", $row["pseudo"]);
        setcookie("conect", "true");
        setcookie("id", $row["id"]);
        header('Location: ./index.php');
    }

    // Fermeture de la connexion à la base de données
    $conn->close();
}

include('./header.php');
?>

<main>
    <section class="duMoment">
        <h2>
            Les films du moment
        </h2>
        <ul id="movieList"></ul>

    </section>

</main>

<?php
include('./footer.php');
?>