// need to fetch word of the day on initialization
// on keyup of each character need to store the character in memory and display it on the screen if it is valid
// once enter key is pressed need to validate the input string only if there are five characters.
// once validation is done need to display the result on the screen and highlight the UI


const WOTDURL = "https://words.dev-apis.com/word-of-the-day"
let keyCount = 1
function isLetter(letter) {
    return /^[a-zA-Z]$/.test(letter);
}

let tempString=""
let string1 = ""
let string2 = ""
let string3 = ""
let string4 = ""
let string5 = ""
let string6 = ""

function init() {
    try {
        console.log("Initializing Wordle Clone");
        document
            .querySelector(".page")
            .addEventListener("keydown", function (event) {
                console.log("key down event =====>", event);
                // uses the isLetter function from above
                if (keyCount % 5 != 1 || keyCount == 1) {
                    console.log("should not allow to type next one without enter")
                    if (!isLetter(event.key)) {
                        event.preventDefault();
                    } else {
                        console.log("keyCount", keyCount)
                        let divName = '.grid-' + keyCount
                        document.querySelector(divName).innerText += event.key.toString().toUpperCase();
                        keyCount++;
                    }
                }
                if (event.key == "Enter") {
                    console.log("Validate input");

                }
                if (event.key == "Backspace") {

                }
            })
    } catch (error) {
        console.log("Error", error);
    }

    getWordOfTheDay()
}

let wotd = ""

async function getWordOfTheDay() {
    const promise = await fetch(WOTDURL);
    const processedResponse = await promise.json();
    console.log("processedResponse ====>", processedResponse)
    wotd = processedResponse.word
}

function keyPressEvent() {

}

init();