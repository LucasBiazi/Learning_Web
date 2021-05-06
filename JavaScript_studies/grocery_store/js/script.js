Clean_selections = () => {
    for (let i = 1; i < 8; i++) document.getElementById("Item" + i).checked = false
    document.getElementById("total").innerText = 0
}

Get_values = () => {
    const values = []
    for (let i = 1; i < 8; i++) values[i] = parseInt(document.getElementById("table").rows[i].cells[1].innerText.split(" ").pop())
    return values
}

Load_buttons = () => {
    //Load item's buttons
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
    //Load Clear button
    const clean_button = document.getElementById("Clean")
    clean_button.addEventListener("click", Clean_selections)
}

// Load Page buttons
document.addEventListener("DOMContentLoaded", () => { Clean_selections(), Load_buttons() })