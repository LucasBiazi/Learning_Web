// Clock function
clock = () => {
    document.getElementById("timer").innerText = new Date().toLocaleTimeString()
}

// Main Function
Trigger = () => {
    document.addEventListener("DOMContentLoaded", () => {
        clock();
        setInterval(clock, 1000);
    })
}
Trigger()