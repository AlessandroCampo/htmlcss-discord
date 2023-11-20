const list = document.getElementById("google_translate_element")


list.addEventListener("input", checkFlag)
function checkFlag() {
    console.log("ciaoI")
    let flag = document.getElementById("flag")
    flag.src = "img/" + list.content + ".png"
}




