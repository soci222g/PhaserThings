var config = {
    type:Phaser.AUTO,
    width:128,
    height:258,
    scene:[GameState], 
    render:{
        pixelArt:true
    },
    physics: {
        default:'arcade',
   
    }
    
}

var gamePrefs = {
    SHEIP_SPEED: 2,
    BULLET_SPEED : -100,
    MAX_VIDAS: 5,
    ENEMY_SPEED: 20,
    ENEMY_BULLET_SPEED:80
}


var juego = new Phaser.Game(config)