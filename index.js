const aboutMe = document.querySelector('.aboutme');
const projects = document.querySelector('.projects');
const contact = document.querySelector('.contact');


const supra = document.querySelector('.sound')

    supra.addEventListener('click', (event) => {
        
    const supraAudio = document.querySelector ('.supra')
    supraAudio.play()
    supraAudio.currentTime = 0

    });

   aboutMe.addEventListener('click', (event) => {

    const showAboutMe = document.querySelector('.aboutme');
    showAboutMe.open()
    showAboutMe.currentTime = 0

   });
