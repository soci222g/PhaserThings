class gameState extends Phaser.Scene{
    

    constructor(){
        //cridem el constructor porpi de la escena
        super({key:"gameState"});
    }
    preload()//cargar assets
    {
        this.cameras.main.setBackgroundColor('AAA');
        this.load.image('bg','assets/sprites/BG.jpg');
        this.load.image('bird','assets/sprites/bird.png');
        this.load.spritesheet('birdAnim','assets/sprites/birdAnim.png',{frameWidth:17, frameHeight: 12}); //cargar sprite sheet

    }; 
    create(){//pinta assets
       // this.add.image(config.width/2,config.height/2,'bg').setScale(3); //movem el pivote de la imatge a la cantonada superior esquera per pintar tot
       // this.add.image(0,0,'bg').setOrigin(0,0); // canbia el origen de la imatge a la cantonada superior esquera

       // this.add.sprite(0,0,'bg').setOrigin(0,0); //igual que image pero ahora se comporta pot sprite
       
        this.BG = this.add.tileSprite(0,0,config.width, config.height, 'bg').setOrigin(0);
       
       //image es una imagen estatica, sprite es un elemeto modeable que el juegor interactua (player, balas, monedas)

        // this.bird = this.add.sprite(config.width/2,config.height/2,'bird').setScale(1); //un unico sprite

            this.birdA = this.add.sprite(config.width/2,config.height/2,'birdAnim').setScale(3);   //spreite sheed


            this.loadAnimationBird();
            this.birdA.anims.play('fly'); //activa animacion especifica de elemento existente


            //esto es sin faser
             /*
            this.key_right = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
            this.key_left = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
            this.key_up = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);
            this.key_down = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN);    
            */

            this.cursor = this.input.keyboard.createCursorKeys();
     }; 

    loadAnimationBird(){
        this.anims.create({

            key:'fly',
            frames:this.anims.generateFrameNumbers('birdAnim',{start:0,end:2}), //determina que cantidad de frames es cada cosa (en este caso el volar es de 0 a 2)
            frameRate: 5,
            repeat:-1,
            yoyo:  true
        }); //carga animaciones de un elemento

    };
    update(){
        this.BG.tilePositionX += 2;
       // this.bird.angle += 1;

       if(this.cursor.right.isDown){
        this.birdA.x += GamePref.HeroSpeed; 
       }
       if(this.cursor.left.isDown){
        this.birdA.x -= GamePref.HeroSpeed;
       }

        if(this.cursor.up.isDown){
            this.birdA.y -= GamePref.HeroSpeed;
        }
        if(this.cursor.down.isDown){
            this.birdA.y += GamePref.HeroSpeed;
        }


    }; // updatea los assets
}

