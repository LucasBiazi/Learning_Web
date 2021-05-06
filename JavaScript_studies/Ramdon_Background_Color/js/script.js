Change_bg = () => {
    document.getElementById("change").addEventListener("click", () => {
        let ramdon1 = Math.floor(Math.random() * (255 - 0 + 1) + 0)
        let ramdon2 = Math.floor(Math.random() * (255 - 0 + 1) + 0)
        let ramdon3 = Math.floor(Math.random() * (255 - 0 + 1) + 0)
        document.getElementById("body").style = "background-color: rgb( " + ramdon1 + ", " + ramdon2 + ", " + ramdon3 + ")";
        console.log("Color scheme: rgb( " + ramdon1 + ", " + ramdon2 + ", " + ramdon3 + ")")
    })
}
document.addEventListener("DOMContentLoaded", () => {
    Change_bg()
})

