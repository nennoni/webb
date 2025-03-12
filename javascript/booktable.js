
document.querySelectorAll(".date").forEach(date => {
    date.addEventListener("click", function() {
		
        if (this.classList.contains("clicked")) {
            this.classList.remove("clicked");
        } else {
            document.querySelectorAll(".date").forEach(d => d.classList.remove("clicked"));
            this.classList.add("clicked");
        }

        const hours = document.querySelectorAll(".hour");

        if (document.querySelector(".date.clicked") && !this.classList.contains("sunday")) {
            hours.forEach(hour => {
                hour.classList.remove("hidden");
            });
        } else {
            hours.forEach(hour => {
                hour.classList.add("hidden");
            });
        }
    });
});

document.querySelectorAll(".hour").forEach(hour => {
    hour.addEventListener("click", function() {

        if (this.classList.contains("clicked")) {
            this.classList.remove("clicked");
        } else {
            document.querySelectorAll(".hour").forEach(h => h.classList.remove("clicked"));
            this.classList.add("clicked");
        }
    });
});
