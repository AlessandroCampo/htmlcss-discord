const list = document.getElementById("google_translate_element")


list.addEventListener("input", checkFlag)
function checkFlag() {
    console.log("ciao")
    console.log(event.target.value)
    let flag = document.getElementById("flag")
    let langRef = document.getElementById("lang-ref")
    flag.src = "img/" + event.target.value + ".png"
}




