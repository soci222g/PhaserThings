var config ={
    type:Phaser.AUTO,
    width:500,
    height:750,
    scene:[gameState], 
    render: 
    {
        pixelArt: true
    }


};

var GamePref={
    HeroSpeed:3
}

var juego = new Phaser.Game(config);