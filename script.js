document.addEventListener("DOMContentLoaded", function () { //oldal betöltésekor működjön
    var gallery = document.querySelector(".sculpture-grid"); //gallery = a .sculpture grid class cuccai
    var filterButtons = document.querySelectorAll(".filters button"); // a filterbuttonok = a .filter calssban minden button
    
    var sculptures = [
        { name: "Vuk szobor", img: "kepek\\kristof\\vuk.jpg", category: "kristof" },
        { name: "Lecsó szobor", img: "kepek\\kristof\\eger.jpg", category: "kristof" },
        { name: "Theodor Herzl szobor", img: "kepek\\kristof\\herzl.jpg", category: "kristof" },
        { name: "Skála Kópé szobor", img: "kepek\\kristof\\IMG_20250214_105353.jpg", category: "kristof" },
        { name: "Főkukac szobor", img: "kepek\\krisztian\\fekvo.jpg", category: "krisztian" },
        { name: "Lecsó szobor", img: "kepek\\krisztian\\lecso.jpg", category: "krisztian" },
        { name: "Szomorú Tank Szobor", img: "kepek\\krisztian\\tank.jpg", category: "krisztian" },
        { name: "Vuk szobor", img: "kepek\\krisztian\\vuk.jpg", category: "krisztian" },
    ]; // szobrok

    function showGallery(filter) {
        gallery.innerHTML = ""; // a galériát lenullázza
        for (var i = 0; i < sculptures.length; i++) {  // adagolja aképeket addig amig el nem fogynak
            if (filter === "all" || sculptures[i].category === filter) { // ha a filter a "mindegyik" vagy (||) a categóriája a képnek egyenlő a filterrel (all, krisztian, kristof), akkor hajtsa végre az adott képekre
                var div = document.createElement("div"); //div csinálása
                div.className = "sculpture-item"; //div class
                div.innerHTML = "<img src='" + sculptures[i].img + "' alt='" + sculptures[i].name + "'><p>" + sculptures[i].name + "</p>"; //div-be html-en belül beleírja a dolgokat a sculptures szerint
                gallery.appendChild(div); //bővítés
            }
        }
    }

    for (var i = 0; i < filterButtons.length; i++) { //megszámolja hogy hány filter button van (3)
        filterButtons[i].addEventListener("click", function () { //amikor rányomunk hatsa végre
            var filter = this.getAttribute("data-filter"); //megnézi hogy melyik data-filter van beállítva, az lesz a "filter" 
            showGallery(filter); //megmutatja a filtert
        });
    }

    showGallery("all"); // Töltse be az összes képet alapból
});
