<?php
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
    $users[] = $row;
}

// Fermeture de la connexion à la base de données
$conn->close();

// Affichage des utilisateurs au format JSON
header('Content-Type: application/json');
echo json_encode($users);
?>