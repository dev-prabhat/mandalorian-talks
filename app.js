const btnTranslate = document.querySelector("#btn-translate")
const inputArea = document.querySelector("textarea")
const outputArea = document.querySelector("#output")

const serverUrl = "https://api.funtranslations.com/translate/mandalorian.json"

const getTranslatedText = (text) => {
    return `${serverUrl}?text=${text}`
}

const Eventhandler = () => {
    const inputData = inputArea.value

    fetch(getTranslatedText(inputData))
        .then(res => res.json())
        .then(json => {
            var translated = json.contents.translated
            outputArea.innerText = translated
            console.log(json.contents.translated)
        })
        .catch(err => console.log(err))

}

btnTranslate.addEventListener("click", Eventhandler)