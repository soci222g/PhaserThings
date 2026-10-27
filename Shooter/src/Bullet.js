class bullet extends Phaser.GameObjects.sprite{
//this.add.sprite(this.Ship.x,this.Ship.body.top, 'BulletJP');


    constructor(_scene, _posX, _posY,_spriteTag='BulletJP'){
        super(_scene,_posX,_posY,_spriteTag); //super es el constructor de la clase sprite, _scene es el contexta.
        _scene.add.existing(this);

        //this.body.setVelocity(gamePrefs.BULLET_SPEED);

        //sound
    }

    preUpdate(){
        if(this.y <= 0){
            this.setActive(false);
        }
    }



}