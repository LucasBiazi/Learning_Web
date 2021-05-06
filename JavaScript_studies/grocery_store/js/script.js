Clean_selections = () => {
    for (let i = 1; i < 8; i++) document.getElementById("Item" + i).checked = false
    document.getElementById("total").innerText = 0
}

Get_values = () => {
    const values = []
    for (let i = 1; i < 8; i++) values[i] = parseInt(document.getElementById("table").rows[i].cells[1].innerText.split(" ").pop())
    return values
}


Add_items = () => {
    for (let i = 1; i < 8; i++) {
        document.getElementById("Item" + i).addEventListener("click", () => {
            let total = parseInt(document.getElementById("total").innerText)
            if (document.getElementById("Item" + i).checked == true) {
                total += Get_values()[i]
                document.getElementById("total").innerText = total
            } else
                total -= Get_values()[i]
            document.getElementById("total").innerText = total
        })
    }

}

// Load Page buttons
document.addEventListener("DOMContentLoaded", () => {
    const clean_button = document.getElementById("Clean")
    clean_button.addEventListener("click", Clean_selections)
    Clean_selections()
    Add_items()
})