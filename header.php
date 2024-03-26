<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PrimeFlix +</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+Display:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="./CSS/style.css">
    <link rel="stylesheet" href="./CSS/modules.css">
    <link rel="stylesheet" href="./CSS/details.css">
    <link rel="stylesheet" href="./CSS/connexion.css">
</head>

<body>

    <nav id="navTop">
        <div class="logo">
            <a href="./index.php"><img id="logo" src="./Pictures/Logo-primeflix-plus.png" alt="Logo PrimeFlix +" /></a>
            <span>Films</span>
        </div>
        <label for="recherche">Recherche: </label>
        <div>
            <input id="recherche" class="recherche" type="texte" name="recherche" autocomplete="off" placeholder="Cherchez un film ou une série">
            <div id="croix">❌</div>
        </div>
        <?php
        if (isset($_COOKIE["conect"]) and $_COOKIE["conect"] == "true") {
                echo "<a class='connexion' href='./profil.php'>" . $_COOKIE['user'] . "<img src='./Pictures/user.png'/></a>";
        } else {
            echo "<a class='connexion' href='./connexion.php'>connexion</a>";
        }
        ?>
        <button id="menu">
            <div></div>
            <div></div>
            <div></div>
        </button>
    </nav>
    <ul id="autocompleteResults">Aucun résultat...</ul>
    <nav id="navRight">
        <div>
            <input id="rechercheM" class="recherche" type="texte" name="rechercheM" autocomplete="off" placeholder="Cherchez un film ou une série">
            <div id="croixM">❌</div>
        </div>
        <ul id="autocompleteResultsM">Aucun résultat...</ul>
        <button id="films">Films</button>
        <button id="series">Séries</button>
        <?php
        if (isset($_COOKIE["conect"]) and $_COOKIE["conect"] == "true") {
            echo "<a class='connexion' href='./profil.php'>" . $_COOKIE['user'] . "<img src='./Pictures/user.png'/></a>";
        } else {
            echo "<a class='connexion' href='./connexion.php'>connexion</a>";
        }
        ?>
    </nav>