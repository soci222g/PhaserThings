import { LEVEL_SIZE, ENEMY } from "../../core/constants.js  ";

export class Enemy extends Phaser.Physics.Arcade.Sprite{

  
    constructor(scene, x, y, texture){
        super(scene, x, y, texture);
        scene.add.existing(this);
        scene.physics.world.enable(this);

        this.body.setAllowGravity(true);
        this.body.setCollideWorldBounds(false);



        this.health = 1;

        this.direction = 1; //1 derecha  
        this.body.setVelocityX(ENEMY.SPEED_ENEMY * this.direction);

        
        
        this.setCollisons();


    }

    setHealth(value){
        this.health = value;    

    }
    setCollisons(){

        if(this.scene.walls){
            this.scene.physics.add.collider(this, this.scene.walls);

        }


        if(this.scene.hero){
            this.scene.physics.add.collider(

                this,
                this.scene.hero,
                this.scene.hero.hitHero,
                null,
                this.scene.hero
            )

        }


    }

    howPatrolWorks(){
        return (this.body.blocked.right || this.body.blocked.left);
    }

    preUpdate(time, delta){
        super.preUpdate(time, delta);

        if(this.howPatrolWorks()){
            this.direction *= -1;
            this.body.setVelocityX(ENEMY.SPEED_ENEMY * this.direction);
            this.flipX = !this.flipX;
        }


    }
}