class MenuScene extends Phaser.Scene{
constructor(){
        //cridem el constructor porpi de la escena
        super({key:"MainMenu"});
    }

 preload()//cargar assets
 {
            this.cameras.main.setBackgroundColor('1FF2EE');

            this.load.spritesheet('LinkAnim','assets/sprites/link.png',{frameWidth:120, frameHeight: 130}); //cargar sprite sheet
            
            this.load.spritesheet('birdAnim','assets/sprites/birdAnim.png',{frameWidth:17, frameHeight: 12}); //cargar sprite sheet

 }

  create(){


            this.birdA = this.add.sprite(config.width/2,config.height/4,'birdAnim').setScale(3);

            this.Link = this.add.sprite(config.width/2,config.height/4 * 3,'LinkAnim').setScale(0.5);   //spreite sheed

            this.One = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ONE);
            this.Two = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.TWO);
  }
    update(){

        if(this.One.isDown){
          
            juego.scene.start('gameState');
            
        }

        if(this.Two.isDown){
           
            juego.scene.start('LinkScene');
        }

    }


}

