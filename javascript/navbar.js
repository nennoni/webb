
// ändrar färg på länk 
function changeColor(element) {
    let link = element.querySelector("a");
    if (link) {
        link.style.color = "#D3BE4A";
    }
}
// ändrar tillbaka färg 
function resetColor(element) {
    let link = element.querySelector("a");
    if (link) {
        link.style.color = "#FFFBE7";
    }
}

// ändrar färg på andra länkar då musen hoverar över en länk
$(document).ready(function() {
    $(".navlinks li").hover(
        function() {
            $(".navlinks li").not(this).fadeTo(10, 0.5);
        },
        function() {
            $(".navlinks li").fadeTo(10, 1);
        }
    );
});

// ändrar färg på navbar vid scrollning
window.addEventListener("scroll", function() {
    let navbar = document.querySelector(".navbar"); 
    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});

