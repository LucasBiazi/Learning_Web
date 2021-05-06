Clean_Selections = () => {
    for (let i = 1; i < 8; i++) { document.getElementById("Item" + i).checked = false }
}

// Load Page buttons
document.addEventListener("DOMContentLoaded", () => {
    const clean_button = document.getElementById("Clean")
    clean_button.addEventListener("click", Clean_Selections)
})