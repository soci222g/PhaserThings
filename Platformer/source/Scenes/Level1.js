export class Level1 extends Phaser.Scene{

    constructor(){
            super({key: 'level1'});
    }

    preload(){
        this.cameras.main.setBackGround('#666');
        this.load.setPath('assets/Sprite/BackGrounds');
        this.load.image('bg', 'bg_green_tile.png');
    }

    create(){}

    update(){}
}