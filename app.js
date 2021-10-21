var btnTranslate = document.querySelector("#btn-translate")
var inputArea = document.querySelector("textarea")
var outputArea = document.querySelector("#output")

var serverUrl = "https://api.funtranslations.com/translate/mandalorian.json"

function getTranslatedText(text) {
    return `${serverUrl}?text=${text}`
}

function Eventhandler() {
    var inputData = inputArea.value

    fetch(getTranslatedText(inputData))
        .then(res => res.json())
        .then(json => {
            var translated = json.contents.translated
            outputArea.innerText = translated
            //console.log(json)
        })
        .catch(err => console.log(err))

}

btnTranslate.addEventListener("click", Eventhandler)