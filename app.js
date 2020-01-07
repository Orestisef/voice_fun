const talk = document.querySelector('.btn');
const content = document.querySelector('.content');

//
const greetings = [
  'im good. All is right.',
  'all is good homeboi',
  'leave me alone'
];

const weather = [
  'Weather is just fine',
  'i dont care. I care only about this job'
];

const swear_word = [
  'Leave me alone. What are you want for me?',
  'i dont care for you. Just tell what you want.'
];

const hello = [
  'Hi. How are you today?'
];

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.onstart = function() {
  console.log('voice activated');
}

recognition.onresult = function(event) {
  const currentText = event.resultIndex;

  const transcript = event.results[currentText][0].transcript;
  content.textContent = transcript;

  readOutLoud(transcript);
}

talk.addEventListener('click', () => {
  recognition.start();
});

function readOutLoud(message) {
  const speech = new SpeechSynthesisUtterance();

  speech.text = 'What are you talking about? Nobody cares about that. Leave me alone';

  if ( message.includes('weather') ){
    const finalText = weather[Math.floor(Math.random()*weather.length)];

    speech.text = finalText;
  } else if (message.includes('fuck')) {
    const finalText = swear_word[Math.floor(Math.random()*swear_word.length)];

    speech.text = finalText;
  } else if (message.includes('how are you')) {
    const finalText = greetings[Math.floor(Math.random()*greetings.length)];

    speech.text = finalText;
  } else if (message.includes('Hello')) {
    const finalText = hello[Math.floor(Math.random()*hello.length)];

    speech.text = finalText;
  }




  speech.volume = 1;
  speech.rate = 1;
  speech.pitch = 1;

  window.speechSynthesis.speak(speech);
}
