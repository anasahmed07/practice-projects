// make variables
var textArea = document.getElementById('textArea');
var btn = document.getElementsByTagName('button')[0];
// check if you click on the button
if (btn) {
    btn.addEventListener('click', function () {
        // check if textarea is blank
        if (textArea && textArea.value === "") {
            // give alert
            alert("No text found. Please write something!");
        }
        else if (textArea) {
            // init responsiveVoice speak
            responsiveVoice.speak(
            // take the text from textarea
            textArea.value, 
            // choose US English Female
            "US English Female", {
                // give a voice
                pitch: 1,
                rate: 1,
                volume: 100
            });
        }
    });
}
import responsiveVoice from './index';