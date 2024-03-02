const text = document.getElementById("textToConvert");
const convertBtn = document.getElementById("convertBtn");

convertBtn.addEventListener('click', function () {
    const speechSynth = window.speechSynthesis;
    const enteredText = text.value;
    const error = document.querySelector('.error-para');
    
    if (!speechSynth.speaking && !enteredText.trim().length) {
        error.textContent = `Nothing to Convert! Enter text in the text area.`;
    }
    
    if (!speechSynth.speaking && enteredText.trim().length) {
        error.textContent = "";
        const newUtter = new SpeechSynthesisUtterance(enteredText);
        
        // Get a female voice
        const voices = speechSynth.getVoices();
        const femaleVoice = voices.find(voice => voice.name === 'Google UK English Female');
        if (femaleVoice) {
            newUtter.voice = femaleVoice;
        }
        
        speechSynth.speak(newUtter);
        convertBtn.textContent = "Sound is Playing...";
    }
    
    setTimeout(() => {
        convertBtn.textContent = "Play Converted Sound";
    }, 5000);
});

