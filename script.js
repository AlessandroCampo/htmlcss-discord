const list = document.getElementById("google_translate_element")


list.addEventListener("input", checkFlag)
function checkFlag() {
    console.log("ciao")
    let flag = document.getElementById("flag")
    flag.src = "img/" + list.name + ".png"
}




