class FactoryEnemy {
  constructor(scene) {
    this.scene = scene;
    this.timeSpawn = 5000; //esta en ms
    this.currentTime = this.timeSpawn;

   this.EnemyPull = this.scene.physics.add.group();
   
   this.deltaTime = 0;
  }

  CreateEnemy(type, width) {
    var enemy  = this.EnemyPull.getFirst(false);
    const randomX = Phaser.Math.Between(width, config.width - width);
     if(!enemy){ 
                console.log("Shoot");

                enemy = new Enemi(this.scene, randomX, -60, type);
                this.EnemyPull.add(enemy);
      }
      else {
        enemy.setActive(true);
        enemy.body.reset(randomX,-60);
      }
  }




  update(time, delta){
    this.currentTime += delta;
    if(this.currentTime >= this.timeSpawn){
        this.currentTime = 0;
        this.timeSpawn = Phaser.Math.Between(2000,5000);
        this.CreateEnemy('enemi-Midium', 32);
                
    
    }

  }
}