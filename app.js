var btnTranslate = document.querySelector("#btn-translate")
var inputArea = document.querySelector("textarea")

function Eventhandler() {
    var inputData = inputArea.value
    console.log(inputData)
}

btnTranslate.addEventListener("click", Eventhandler)