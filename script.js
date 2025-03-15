document.addEventListener("DOMContentLoaded", function () {
    var gallery = document.querySelector(".sculpture-grid");
    var filterButtons = document.querySelectorAll(".filters button");
    
    var sculptures = [
        { name: "Vuk szobor", img: "\\kepek\\kristof\\vuk.jpg", category: "kristof" },
        { name: "Lecsó szobor", img: "\\kepek\\kristof\\eger.jpg", category: "kristof" },
        { name: "Theodor Herzl szobor", img: "\\kepek\\kristof\\herzl.jpg", category: "kristof" },
        { name: "Skála Kópé szobor", img: "\\kepek\\kristof\\IMG_20250214_105353.jpg", category: "kristof" },
        { name: "Főkukac szobor", img: "\\kepek\\krisztian\\fekvo.jpg", category: "krisztian" },
        { name: "Lecsó szobor", img: "\\kepek\\krisztian\\lecso.jpg", category: "krisztian" },
        { name: "Szomorú Tank Szobor", img: "\\kepek\\krisztian\\tank.jpg", category: "krisztian" },
        { name: "Vuk szobor", img: "\\kepek\\krisztian\\vuk.jpg", category: "krisztian" },
    ];

    function showGallery(filter) {
        gallery.innerHTML = "";
        for (var i = 0; i < sculptures.length; i++) {
            if (filter === "all" || sculptures[i].category === filter) {
                var div = document.createElement("div");
                div.className = "sculpture-item";
                div.innerHTML = "<img src='" + sculptures[i].img + "' alt='" + sculptures[i].name + "'><p>" + sculptures[i].name + "</p>";
                gallery.appendChild(div);
            }
        }
    }

    for (var i = 0; i < filterButtons.length; i++) {
        filterButtons[i].addEventListener("click", function () {
            var filter = this.getAttribute("data-filter");
            showGallery(filter);
        });
    }

    showGallery("all");
});
