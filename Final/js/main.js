window.addEventListener("load", ()=>{
    // dark light mode
    const mode = document.getElementById("mode");
    mode.addEventListener('click', function(){
        document.body.classList.toggle("light-theme");
    })

    // audio
    const vol__bar = document.querySelectorAll(".vol__bar"); 
    const play = document.querySelectorAll(".play div");
    const sounds = document.querySelectorAll(".sound"); 
    const item__up = document.querySelectorAll(".item__up"); 

    play.forEach((play__item, index) => {
        play__item.addEventListener("click", () => {
            vol__bar[index].classList.toggle("vol__open");
            if(play__item.dataset.playing==="false"){
                play__item.dataset.playing="true";
                sounds[index].play();
            }
            else{
                play__item.dataset.playing="false";
                sounds[index].pause();
            }
        });
     });
});














