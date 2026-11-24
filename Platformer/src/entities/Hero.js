import { LEVEL_SIZE, HERO } from "../core/constants.js";

export class Hero extends Phaser.Physics.Arcade.Sprite{

    constructor(scene, x, y, texture = 'hero'){
        super(scene, x, y, texture);
        scene.add.existing(this);
        scene.physics.world.enable(this)
   
        this.hp = HERO.MAX_LIVES;

        this.StartX = x;
        this.StartY = y;

        this.body.setAllowGravity(true);
        this.body.setCollideWorldBounds(false);
   

         this.setFrame(0);


         this.setCollisions();

        this.scene.cursor = this.scene.input.keyboard.createCursorKeys();
   
    }

    setCollisions(){
        if(this.scene.walls){
            this.scene.physics.add.collider(this, this.scene.walls);
        }



    }

    hitHero(enemy,hero){

        if(this.body.touching.down && enemy.body.touching.up){
            enemy.health -= 1;
            hero.setVelocityY(HERO.JUMP_FORCE);
            if(enemy.health <= 0)
                enemy.destroy();
        }
        else{
           this.body.reset(this.StartX, this.StartY);

        }

    }

    preUpdate(time, delta){
        super.preUpdate(time, delta);


         if(this.scene.cursor.right.isDown){
                    this.setVelocityX(HERO.SPEED);
                    this.flipX = false;
                    this.anims.play('hero_run', true);
        
                } 
                else if(this.scene.cursor.left.isDown){
                    this.setVelocityX(-HERO.SPEED);
                    this.flipX = true;
                    this.anims.play('hero_run', true);
                }
                else {
                    this.setVelocityX(0);
                    
                    this.anims.stop().setFrame(0); //set frame es para poner el frame que queramos.
                }
        
                if(this.scene.cursor.space.isDown && this.body.blocked.down && Phaser.Input.Keyboard.DownDuration(this.scene.cursor.space, 250)){
                    this.setVelocityY(HERO.JUMP_FORCE);
                }

            if(this.body.grounded){
                  this.anims.stop().setFrame(5);
            }
    }


    Update(){

    }

}