const projects = document.querySelector('.projects');
const contact = document.querySelector('.contact');


const supra = document.querySelector('.sound')

    supra.addEventListener('click', (event) => {
        
    const supraAudio = document.querySelector ('.supra')
    supraAudio.play()
    supraAudio.currentTime = 0

    });

    function aboutMe(show) {
        var press = document.getElementById('.aboutme');
        if(press.style.display == 'block')
           press.style.display = 'none';
        else
           press.style.display = 'block';
     }

