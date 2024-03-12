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
</head>

<body>

    <nav id="navTop">
        <div class="logo">
            <img src="./Pictures/Logo-primeflix-plus.png" alt="Logo PrimeFlix +" />
            <span>Films</span>
        </div>
        <label for="recherche">Recherche: </label>
        <input class="recherche" type="texte" name="recherche" autocomplete="off" placeholder="Cherchez un film ou une série">
        <button class="connection">Connection</button>
        <button id="menu">
            <div></div>
            <div></div>
            <div></div>
        </button>
    </nav>
    <nav id="navRight">
        <input class="recherche" type="texte" name="recherche" autocomplete="off" placeholder="Cherchez un film ou une série">
        <button id="films">Films</button>
        <button id="series">Séries</button>
        <button class="connection">Connection</button>
    </nav>
    <header id="filmAuCine">
        <button>Détails</button>
        <p>Résumé</p>
    </header>
    <main>
        <section class="duMoment">
            <h2>
                Les films du moment
            </h2>
            <ul id="movieList"></ul>

        </section>

    </main>
    <footer>

    </footer>


    <script src="https://code.jquery.com/jquery-3.6.4.min.js"></script>
    <script src="./Javascript/navigation.js"></script>
    <script src="./Javascript/requetes.js"></script>
</body>

</html>