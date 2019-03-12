const projects = document.querySelector('.projects');
const contact = document.querySelector('.contact');


const supra = document.querySelector('.sound')

    supra.addEventListener('click', (event) => {
        
    const supraAudio = document.querySelector ('.supra')
    supraAudio.play()
    supraAudio.currentTime = 0

    });

    let showAboutMe = document.querySelector('.aboutme')
    function function1() {
       showAboutMe.classList.toggle('.aboutme')
    };
      

