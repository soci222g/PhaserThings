class FactoryEnemy {
  constructor(scene) {
    this.scene = scene;
    this.timeSpawn = 5000; //esta en ms
    this.currentTime = this.timeSpawn;

    this.deltaTime = 0;
  }

  CreateEnemy(type, width) {
    const randomX = Phaser.Math.Between(width, config.width - width);
    return new Enemi(this.scene, randomX, -60, type);
  }


  update(time, delta){
    this.currentTime += delta;
    if(this.currentTime >= this.timeSpawn){
        this.currentTime = Phaser.Math.Between(2000, 5000);
        this.CreateEnemy('enemi-Midium', 32)
    }

  }
}