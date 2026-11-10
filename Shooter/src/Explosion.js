class Explosion extends Phaser.GameObjects.Sprite{
//this.add.sprite(this.Ship.x,this.Ship.body.top, 'BulletJP');


    constructor(_scene, _posX, _posY,_spriteTag='Explosion'){
       
        super(_scene,_posX,_posY,_spriteTag); 
        _scene.add.existing(this);

        this.loadAnimationShip(_spriteTag);

        this.ExplosionPull = this.scene.add.group();

        this.play('AnimExplosion');
        this.once('animationcomplete', () => this.destroy());
        //sound
    }

  loadAnimationShip(spriteName) {
    if (!this.scene.anims.exists('AnimExplosion')) {
      this.scene.anims.create({
        key: 'AnimExplosion',
        frames: this.scene.anims.generateFrameNumbers(spriteName, { start: 0, end: 4 }),
        frameRate: 15,
        repeat: 0
      });
    }
  }



}