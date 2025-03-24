document.addEventListener("DOMContentLoaded", () => {
    const movable = document.querySelector(".movable");

    if (!movable) {
        console.error("No element with class .movable found");
        return;
    }

    let toggled = false; // Track position state

    movable.addEventListener("mouseenter", () => {
        // Fade out before changing position
        movable.style.transition = "opacity 0.2s";
        movable.style.opacity = "0"; 

        setTimeout(() => {
            if (toggled) {
                // Move back to original position
                movable.style.gridRow = "2 / 3";
                movable.style.gridColumn = "span 2";
            } else {
                // Move to new position
                movable.style.gridRow = "2 / span 3";
                movable.style.gridColumn = "3 / span 3";
            }

            toggled = !toggled; // Toggle position state

            // Fade back in
            movable.style.transition = "opacity 0.2s";
            movable.style.opacity = "1"; 
        }, 200); // Wait for fade-out to complete before moving
    });
});
