const dino = document.querySelector('.dino');
const pipe = document.querySelector('.pipe');

const jump = () => {
    dino.classList.add('jump');

    setTimeout(() => {
       dino.classList.remove('jump');
    }, 500);
}

const loop = setInterval(() => {

    const pipePosition = pipe.offsetLeft;
    const dinoPosition = +window.getComputedStyle(dino).bottom.replace('px','');

    console.log(dinoPosition);
    
    if (pipePosition <= 120 && pipePosition > 0 && dinoPosition < 65) {

        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        dino.style.animation = 'none';
        dino.style.bottom = `${dinoPosition}px`;

        dino.src = './imagens/game-over.gif';
        dino.style.width = '75px'
        dino.style.marginLeft = '50px'
        clearInterval(loop);
    }

}, 10)

document.addEventListener('keydown', jump);