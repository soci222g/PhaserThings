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
        arcade:{
            gravity:{y:1},
            debug:true
        }
    }
    
}

var gamePrefs = {
    SHEIP_SPEED: 2,
    BULLET_SPEED : -100,
    BULLET_DAMAGE: 25,
    MAX_VIDAS: 5,
    ENEMY_SPEED: 100,
    ENEMY_BULLET_SPEED:80,
    ENEMY_HEALTH: 100,
}


var juego = new Phaser.Game(config)