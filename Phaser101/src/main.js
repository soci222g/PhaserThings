var config ={
    type:Phaser.AUTO,
    width:640,
    height:640,
    scene:[LinkScene], 
    render: 
    {
        pixelArt: true
    }


};

var GamePref={
    HeroSpeed:3
}

var juego = new Phaser.Game(config);