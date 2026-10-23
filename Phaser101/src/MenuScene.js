class MenuScene extends Phaser.Scene{
constructor(){
        //cridem el constructor porpi de la escena
        super({key:"MainMenu"});
    }

 preload()//cargar assets
 {
            this.cameras.main.setBackgroundColor('1FF2EE');


 }

  create(){

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

