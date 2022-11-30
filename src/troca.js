function showGame() {
    var conteiner = document.getElementById("conteinermenu");
    var game = document.getElementById("conteinergame")

    if (conteiner.style.display != "none") {
        conteiner.style.display = "none";
    }

    game.style.display = "block";


}