document.querySelectorAll(".date").forEach(date => {
    date.addEventListener("click", function() {
        // console.log("Date clicked:", this);

        if (this.classList.contains("clicked")) {
            this.classList.remove("clicked");
        } else {
            document.querySelectorAll(".date").forEach(d => d.classList.remove("clicked"));
            this.classList.add("clicked");
        }

        const hours = document.querySelectorAll(".hour");
        hours.forEach(hour => {
            if (document.querySelector(".clicked")) {
                hour.classList.remove("hidden");
                // console.log("Making hour visible:", hour);
            } else {
                hour.classList.add("hidden");
                // console.log("Hiding hour:", hour);
            }
        });
    });
});

document.querySelectorAll(".hour").forEach(hour => {
    hour.addEventListener("click", function() {
        // console.log("Hour clicked:", this);

        if (this.classList.contains("selected")) {
            this.classList.remove("selected");
        } else {
            document.querySelectorAll(".hour").forEach(h => h.classList.remove("selected"));
            this.classList.add("selected");
        }
    });
});
