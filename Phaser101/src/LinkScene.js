class LinkScene extends Phaser.Scene{
    

    constructor(){
        //cridem el constructor porpi de la escena
        super({key:"LinkScene"});
    }
    preload()//cargar assets
    {
        this.cameras.main.setBackgroundColor('AAA');
        this.load.image('grass','assets/sprites/grass.png');
        this.load.spritesheet('LinkAnim','assets/sprites/link.png',{frameWidth:120, frameHeight: 130}); //cargar sprite sheet

    }; 
    create(){

       
             this.BG = this.add.tileSprite(0,0,config.width, config.height, 'grass').setOrigin(0);
       



            this.Link = this.add.sprite(config.width/2,config.height/2,'LinkAnim').setScale(0.5);   //spreite sheed


            this.loadAnimationLink();


           

            this.cursor = this.input.keyboard.createCursorKeys();
     }; 

    loadAnimationLink(){
        this.anims.create({
                      

            key:'left',
            frames:this.anims.generateFrameNumbers('LinkAnim',{start:10,end:19}),
            frameRate: 5,
            repeat:-1,
        }); //carga animaciones de un elemento

         this.anims.create({

            
            key:'right',
            frames:this.anims.generateFrameNumbers('LinkAnim',{start:30,end:39}), 
            frameRate: 5,
            repeat:-1,

         })
        this.anims.create({ 
            key:'up',
            frames:this.anims.generateFrameNumbers('LinkAnim',{start:20,end:29}), 
            frameRate: 5,
            repeat:-1,
        })
        this.anims.create({    
             key:'down',
            frames:this.anims.generateFrameNumbers('LinkAnim',{start:0,end:9}), 
            frameRate: 5,
            repeat:-1,
        })

        this.anims.create({
            key: 'idle',
            frames:this.anims.generateFrameNumbers('LinkAnim',{start:0,end:0}),
        })
    };


    update(){
       // this.bird.angle += 1;

       if(this.cursor.right.isDown){
        this.Link.x += GamePref.HeroSpeed; 
            this.Link.anims.play('right',true);
        }
        if(this.cursor.left.isDown){
            this.Link.x -= GamePref.HeroSpeed;
            this.Link.anims.play('left',true);        
        }
        if(this.cursor.up.isDown){
            this.Link.y -= GamePref.HeroSpeed;
                this.Link.anims.play('up',true);
        }
        if(this.cursor.down.isDown){
            this.Link.y += GamePref.HeroSpeed;
            this.Link.anims.play('down',true);
            
        }


    }; 
}

