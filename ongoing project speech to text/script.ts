
// make variables
import responsiveVoice from "./"
const textArea: HTMLTextAreaElement | null = document.getElementById('textArea') as HTMLTextAreaElement;
const btn: HTMLButtonElement | null = document.getElementsByTagName('button')[0] as HTMLButtonElement;
// check if you click on the button
if (btn) {
    btn.addEventListener('click', () => {
        // check if textarea is blank
        if (textArea && textArea.value === "") {
            // give alert
            alert("No text found. Please write something!");
        } else if (textArea) {
            // init responsiveVoice speak
            responsiveVoice.speak(
                // take the text from textarea
                textArea.value,

                // choose US English Female
                "US English Female",
                {
                    // give a voice
                    pitch: 1,
                    rate: 1,
                    volume: 100
                }
            );
        }
    });
}
