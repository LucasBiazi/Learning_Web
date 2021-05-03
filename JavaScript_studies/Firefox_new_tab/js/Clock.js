// Clock function
Start_clock = () => {
    const h = 12
    const m = 22
    const s = 33
    document.getElementById("hour").innerText = h + ":"
    document.getElementById("minute").innerText = m + ":"
    document.getElementById("second").innerText = s
}

// Main function
Trigger = () => {
    document.addEventListener("DOMContentLoaded", () => {
        console.log("Document loaded.")
        Start_clock();
    })
}

Trigger()