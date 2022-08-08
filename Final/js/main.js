var mode = document.getElementById("mode");
mode.addEventListener('click', function(){
    document.body.classList.toggle("light-theme");
})

// audio
window.addEventListener("load", ()=>{
    const sounds = document.querySelectorAll("sound");
    const board =document.querySelectorAll(".board div")

    board.forEach((box, index) =>{
        box.addEventListener("click", function(){
            sounds[index].curentTime=0;
            sounds[index].play();
        });
    });
});