
const txtAnim = document.querySelector('h1');

new Typewriter(txtAnim, {

   deleteSpeed: 20
})

.changeDelay(20)
.typeString('Bonjour et bienvenue sur mon site')
.start()

const txtAnim2 = document.querySelector('h2');


new Typewriter(txtAnim2, {
   loop: true,
   deleteSpeed: 30
})



.changeDelay(20)
.typeString('Moi c\'est Valère,')
.pauseFor(1000)
.typeString('<strong> DÉveloppeur Front-end </strong> !')
.pauseFor(1500)
.deleteChars(13)
.typeString('<span style="color: #df4d23"> Html</span> !')
.pauseFor(1500)
.deleteChars(6)
.typeString('<span style="color: #254bdd"> CSS</span> !')
.pauseFor(1500)
.deleteChars(5)
.typeString('<span style="color: #f5d13a"> Javascript</span> !')
.pauseFor(1500)
.deleteChars(12)
.typeString('<span style="color: #7377ad"> PHP</span> !')
.pauseFor(1500)
.start()




const animatedTexts = document.querySelectorAll('.animated-text');


function animateText(animatedText) {
    const text = animatedText.textContent;
    console.log(text);
    const speed = 150;
    animatedText.innerHTML = '';
    for (let i = 0; i < text.length; i++) {
      if (text[i] == ' ') {
        animatedText.innerHTML += ' ';
      }
      animatedText.innerHTML += `<span>${text[i]}</span>`;
    }
    

    let idx = 0;
    function writeChar(){
        const span = animatedText.querySelectorAll('span')[idx];
        span.classList.add('fade');
        idx++;
        if ( idx == text.length){
            clearInterval(writeCharInterval);
        }
    }
 let writeCharInterval = setInterval(writeChar, speed);
}

animatedTexts.forEach(animateText);




