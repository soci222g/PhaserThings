export class Door extends Phaser.Physics.Arcade.Sprite{

constructor(scene, x, y, texture = 'entry'){
        super(scene, x, y, texture);
    scene.add.existing(this);
    this.setFrame(0); //close door
    }


    openDoor(){
        //load enim
        this.anims.play('entry_open', true);
    }
}
