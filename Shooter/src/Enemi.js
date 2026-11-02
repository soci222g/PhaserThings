class Enemi extends Phaser.GameObjects.Sprite {
  constructor(_scene, _posX, _posY, _spriteName) {
    super(_scene, _posX, _posY, _spriteName);

    _scene.add.existing(this);
    _scene.physics.add.existing(this);

    this.body.setVelocityY(gamePrefs.ENEMY_SPEED);

    this.loadAnimationShip(_spriteName);
    this.play('idel_enemi');
    this.name = _spriteName;
  }

  loadAnimationShip(spriteName) {
    if (!this.scene.anims.exists('idel_enemi')) {
      this.scene.anims.create({
        key: 'idel_enemi',
        frames: this.scene.anims.generateFrameNumbers(spriteName, { start: 0, end: 1 }),
        frameRate: 5,
        repeat: -1
      });
    }
  }

  preUpdate(time, delta) {
    super.preUpdate(time, delta);
  }
}