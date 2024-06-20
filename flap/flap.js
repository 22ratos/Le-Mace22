let move_speed = 3, gravity = 0.5;
//seleciona a velocidade e o peso 

let bird = document.querySelector('.bird');
//usa do modo query para selecionar e agregar a imagem a palavra bird

let img = document.getElementById('bird-1');
//faz o mesmo só que usando o get para agregar a imagem a palavra bird1

let bird_props = bird.getBoundingClientRect();

let background = document.querySelector('.magi').getBoundingClientRect();
let score_val = document.querySelector('.score_val');
let message = document.querySelector('.message');
let score_tittle = document.querySelector('.score_tittle');

let game_state = 'Start';
img.style.display = 'none';
message.classList.add('messageStyle');

document.addEventListener('keydown', (e) => {
    if(e.key == 'Enter' && game_state != 'Play'){
        document.querySelectorAll('.pipe-sprite').forEach((e) => {
            e.remove();
        } );
        img.style.display = 'block';
        bird.style.top
    }
}
)