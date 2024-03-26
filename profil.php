<?php

if (!isset($_COOKIE["conect"]) or $_COOKIE["conect"] != "true") {
    header('Location: ./index.php');
}
$host = 'localhost';
$user = 'root';
$password = '';
$database = 'cinetech';

$api_key = '0741d6262e8cbab94f52d8fc840b57f6';


require_once 'vendor/autoload.php';

use GuzzleHttp\Client;
// Créer un client Guzzle HTTP
$client = new Client();

include('./header.php');
?>

<main class="profil">
    <button id="deco">Déconnection</button>
    <section>
        <h2>Mes favoris</h2>
        <div>
            <?php

            // Connexion à la base de données
            $conn = new mysqli($host, $user, $password, $database);

            if ($conn->connect_error) {
                die("Erreur de connexion à la base de données : " . $conn->connect_error);
            }

            // Récupération des utilisateurs
            $query = 'SELECT * FROM TMDB WHERE idUser = "' . $_COOKIE['id'] . '"';
            $result = $conn->query($query);

            // Construction du tableau associatif des utilisateurs
            $users = array();

            while ($row = $result->fetch_assoc()) {
                $idMovie = $row["idTMDB"];
                $url = "https://api.themoviedb.org/3/movie/$idMovie?api_key=$api_key";
                try {
                    // Effectuer une requête GET à l'API TMDb
                    $response = $client->request('GET', $url);

                    // Vérifier si la requête a réussi (code 200)
                    if ($response->getStatusCode() == 200) {
                        // Récupérer les données de la réponse et les décoder en tant que tableau associatif
                        $data = json_decode($response->getBody(), true);

                        // Afficher les détails du film
                        $affiche = "https://image.tmdb.org/t/p/w500" . $data['poster_path'];
                        $titre = $data['title'];
                        $lien = $data['id'];
                        echo "<a href='./details.php?id=$lien' ><img src='$affiche' alt='$titre'/></a>";
                    } else {
                        echo "Erreur lors de la récupération des données du film.";
                    }
                } catch (Exception $e) {
                    echo "Erreur : " . $e->getMessage();
                }
            }

            // Fermeture de la connexion à la base de données
            $conn->close();
            ?>
        </div>
    </section>
</main>

<?php
include('./footer.php');
?>