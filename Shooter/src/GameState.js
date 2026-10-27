class GameState extends Phaser.Scene{

constructor(){
        //cridem el constructor porpi de la escena
        super({key:"gameState"});
    }

    preload(){
        this.cameras.main.setBackgroundColor("113");
         
        this.load.setPath('assets/sprites');

        this.load.image('BackBG','background_Back.png');
        this.load.image('FlontBG','background_frontal.png');
        this.load.image('BulletJP', 'spr_bullet_0.png');


        this.load.spritesheet('ShipAnim','naveAnim.png',{frameWidth:16, frameHeight: 24}); //cargar sprite sheet


        /*this.load.image('BackBG','assets/sprites/background_Back.png');
        this.load.image('FlontBG','assets/sprites/background_frontal.png');*/
    }

    create(){

        
        this.BG_Front = this.add.tileSprite(0,0,config.width, config.height, 'FlontBG').setOrigin(0);
        this.BG_Back = this.add.tileSprite(0,0,config.width, config.height, 'BackBG').setOrigin(0);

                    //con el .phisycs anyades fiscas
        this.Ship = this.physics.add.sprite(config.width/2,config.height/2,'ShipAnim').setScale(1);

        this.Ship.body.setCollideWorldBounds(true);


        this.loadAnimationShip();

        this.cursor = this.input.keyboard.createCursorKeys();

        this.loadPulls();


        this.cursor.space.on(
            'down',
            function()
            {
                this.createBullet();
            },
            this //estp es para que dentro de la funcion el this sea el concepto de la escena i no de si mismo. 
        );
    }


     loadAnimationShip(){
        this.anims.create({   
            key:'idel',
            frames:this.anims.generateFrameNumbers('ShipAnim',{start:0,end:1}),
            frameRate: 5,
            repeat:-1,
        }); //carga animaciones de un elemento


        this.anims.create({   
            key:'left',
            frames:this.anims.generateFrameNumbers('ShipAnim',{start:2,end:3}),
            frameRate: 5,
            repeat:-1,
        });

        this.anims.create({   
            key:'right',
            frames:this.anims.generateFrameNumbers('ShipAnim',{start:4,end:5}),
            frameRate: 5,
            repeat:-1,
        });
    }


    loadPulls()
    {
        this.bulletPool = this.physics.add.group(); //un array de un mateix tipo, aixo permet coneccions de tots els tipus de grups entre ells
    }

    

    createBullet(){
          var bullet  = this.bulletPool.getFirst(false);//pilla el primer element del grup que estigui desactivada. 

          if(!bullet){ 
console.log("Shoot");

               //bullet =this.add.sprite(this.Ship.x,this.Ship.body.top, 'BulletJP');
                bullet = new bullet(this,this.Ship.x, this.Ship.y.top);
                this.bulletPool.add(bullet);
          }
          else{
                bullet.setActive(true);
                bullet.body.reset(this.Ship.x,this.Ship.body.top);
          }

          bullet.body.setVelocityY(gamePrefs.BULLET_SPEED);
    }

    update(){
        this.BG_Front.tilePositionY -= 1;
        this.BG_Back.tilePositionY -= 0.25

        if(this.cursor.right.isDown){
            //this.Ship.x += gamePrefs.SHEIP_SPEED; 
            
            this.Ship.body.velocity.x += gamePrefs.SHEIP_SPEED; //.velocity es una velocitat constant, la segona es una acceleracio
            this.Ship.anims.play('right',true);

        }
        else if(this.cursor.left.isDown){

                this.Ship.body.velocity.x -= gamePrefs.SHEIP_SPEED; 
                this.Ship.anims.play('left',true);
        }
        else{
            this.Ship.anims.play('idel',true);
        }

        if(this.cursor.space.up){
            this.createBullet();
        }

            
    }
}