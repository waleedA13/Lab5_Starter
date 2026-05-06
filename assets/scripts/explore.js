// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const synth = window.speechSynthesis;
  const voiceSelect = document.getElementById('voice-select');
  const textArea = document.getElementById('text-to-speak');
  const talkButton = document.querySelector('#explore button');
  const faceImage = document.querySelector('#explore img');

  function populateVoices() {
    const voices = synth.getVoices();
    voices.forEach((voice) => {
      const option = document.createElement('option');
      option.textContent = `${voice.name} (${voice.lang})`;
      option.value = voice.name;
      voiceSelect.appendChild(option);
    });
  }

  populateVoices();
  if (synth.onvoiceschanged !== undefined) {
    synth.onvoiceschanged = populateVoices;
  }

  talkButton.addEventListener('click', () => {
    const utterance = new SpeechSynthesisUtterance(textArea.value);
    const voices = synth.getVoices();
    const selectedVoice = voices.find((v) => v.name === voiceSelect.value);
    if (selectedVoice) {
      utterance.voice = selectedVoice;
    }

    utterance.addEventListener('start', () => {
      faceImage.src = 'assets/images/smiling-open.png';
      faceImage.alt = 'Smiling face with open mouth';
    });

    utterance.addEventListener('end', () => {
      faceImage.src = 'assets/images/smiling.png';
      faceImage.alt = 'Smiling face';
    });

    synth.speak(utterance);
  });
}