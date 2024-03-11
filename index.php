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
</head>

<body>

    <nav id="navTop">
        <div>
        <img src="./Pictures/Logo-primeflix-plus.png" alt="Logo PrimeFlix +" />
        <span>Films</span>
        </div>
        <label for="recherche">Recherche: </label>
        <input class="recherche" type="texte" name="recherche" autocomplete="off" placeholder="Cherchez un film ou une série">
        <div id="navButton">
            <button id="menu">Menu</button>
            <button class="connection">Connection</button>
        </div>
    </nav>
    <nav id="navRight">
    <button class="connection">Connection</button>
        <input class="recherche" type="texte" name="recherche" autocomplete="off" placeholder="Cherchez un film ou une série">
        <button id="films">Films</button>
        <button>Séries</button>
    </nav>
    <header>
        <button>Détails</button>
        <p>Résumé</p>
    </header>
    <main>
        <h2>
            Les films et séries du moment
        </h2>
        <section class="duMoment">

        </section>

    </main>
    <footer>

    </footer>


    <script src="https://code.jquery.com/jquery-3.6.4.min.js"></script>
    <script src="./Javascript/navigation.js"></script>
</body>

</html>