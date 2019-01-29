function setup() {
    createCanvas(750, 750);
    createBoard(5);
}

function createBoard(size) {
    for (let i = 1; i < size + 1; i++) {
        line(width/5*i, 0, 0, width/5*i);
    }
    for (let i = 0; i < size + 1; i++) {
        line(0, height/5*i, width/5*(5-i), height);
    }
    for (let i = 1; i < size + 1; i++) {
        line(width/5*i, height, width, height/5*i);
    }
    for (let i = 1; i < size + 1; i++) {
        line(width, height/5*(5-i), width/5*i, 0);
    }
}

function createPlayersAndCamps() {
    
    player2img = loadImage("assets/player2.png");
    player1jumpedimg = loadImage("assets/player1jumped.png");
    player2jumpedimg = loadImage("assets/player2jumped.png");

}

function draw() {
    background(200);

    

}