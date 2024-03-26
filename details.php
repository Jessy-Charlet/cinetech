<?php
// Connexion à la base de données
$dsn = 'mysql:host=localhost;dbname=cinetech;charset=utf8mb4';
$username = 'root';
$password = '';
try {
    $pdo = new PDO($dsn, $username, $password);
    // Définir le mode d'erreur PDO à exception
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    echo 'Connexion échouée : ' . $e->getMessage();
    exit();
}

if (isset($_POST["sup"])) {
    $idUser = $_COOKIE['id'];
    $idTMDB = $_POST['sup'];
    // Préparation de la requête SQL
    $sql = "DELETE FROM TMDB WHERE idUser = :idUser AND idTMDB = :idTMDB";
    $stmt = $pdo->prepare($sql);
    // Liaison des paramètres
    $stmt->bindParam(':idUser', $idUser, PDO::PARAM_INT);
    $stmt->bindParam(':idTMDB', $idTMDB, PDO::PARAM_INT);

    // Exécution de la requête préparée
    try {
        $stmt->execute();
    } catch (PDOException $e) {
        echo $e->getMessage();
    }

}
if (isset($_POST["add"])) {
    $idUser = intval($_COOKIE['id']);
    $idTMDB = intval($_POST['add']);
    // Préparation de la requête SQL
    $sql = "INSERT INTO TMDB (idUser, idTMDB) VALUES (:idUser, :idTMDB)";
    $stmt = $pdo->prepare($sql);
    // Liaison des paramètres
    $stmt->bindParam(':idUser', $idUser, PDO::PARAM_INT);
    $stmt->bindParam(':idTMDB', $idTMDB, PDO::PARAM_INT);

    // Exécution de la requête préparée
    try {
        $stmt->execute();
    } catch (PDOException $e) {
        echo $e->getMessage();
    }
}

include('./header.php');
?>
<header id="backdrop">
    <div class="full">
        <img id="affiche" src="" alt="" />
        <div id="block">
            <h1>Titre</h1>
            <h2>Titre original</h2>
            <div id="note">Note</div>
            <div id="tagLine">Tagline</div>
            <div id="date">Date</div>
            <?php
            if (isset($_COOKIE["conect"]) and $_COOKIE["conect"] == "true") {
                $idUser = $_COOKIE['id'];
                // Préparation de la requête SQL
                $sql = "SELECT * FROM TMDB WHERE idUser = :idUser";
                $stmt = $pdo->prepare($sql);
                // Liaison des paramètres
                $stmt->bindParam(':idUser', $idUser, PDO::PARAM_INT);
                try {
                    $stmt->execute();
                } catch (PDOException $e) {
                    echo $e->getMessage();
                }
                while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
                    if ($row["idTMDB"] == $_GET["id"]) {
                        $fav = true;
                        break;
                    } else {
                        $fav = false;
                    }
                }
                if (isset($fav) && $fav == true) {
                    // Boutton de suppression
                    echo "<div class='favoris'><form id='supFavoris' action='./details.php?id=" . $_GET['id'] . "' method='post'>
                    <button type='submit' name='sup' value='" . $_GET['id'] . "'><img src='./Pictures/coeur.png' alt='Favoris'/></button>
                    </from></div>";
                } else {
                    // Boutton d'ajout 
                    echo "<div class='favoris'><form id='addFavoris' action='./details.php?id=" . $_GET['id'] . "' method='post'>
                    <button type='submit' name='add' value='" . $_GET['id'] . "'><img src='./Pictures/coeur-vide.png' alt='Non favoris'/></button>
                    </from></div>";
                }
            } else {
                // bouton de connexion
                echo "<div class='favoris'><img src='./Pictures/coeur-vide.png' alt='Non favoris'/><a href='./connexion.php'>Se connecter</a></div>";
            }
            ?>
            <div id="budget">Budget / Revenues</div>
            <ul id="compagnies">
            </ul>
        </div>
    </div>
</header>
<section class="synopsis">
    <h3>Synopsis</h3>
    <p id="synopsis">Pas de synopsis pour le moment...</p>
</section>
<section id="acteurs">
    Liste des acteurs...
</section>
<section id="filmsSimilaires">
    <h2>Les films similaires</h2>
    <ul id="movieListS"></ul>
</section>
<main>

</main>

<?php
include('./footer.php');
?>