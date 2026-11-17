import { LEVEL_SIZE, HERO, SCALE } from "../core/constants.js";

export class Level1 extends Phaser.Scene
{
    constructor()
    {
        super({key:'Level1'});
    }
    
    preload()
    { //Carga assets en memoria
        this.cameras.main.setBackgroundColor('#F00');
        
        this.load.setPath('assets/sprites/backgrounds');
        this.load.image('bg','bg_green_tile.png');


        this.load.setPath('assets/Sprite/Spritesheets');
        this.load.spritesheet('entry','entry.png',{frameWidth: 32, frameHeight: 40});
        this.load.spritesheet('hero','hero.png',{frameWidth: 32, frameHeight: 32});

        this.load.setPath('assets/tiled/tilesets');
        this.load.image('tileset_walls','tileset_walls.png');
        this.load.image('tileset_moss','tileset_moss.png');

        this.load.setPath('assets/tiled/maps');
        this.load.tilemapTiledJSON('level1', 'level1.json');

    }
    create()
    { //Pinta assets en pantalla
        //Pintamos el fondo
        this.add.tileSprite(0,0,LEVEL_SIZE.LEVEL1_WIDTH, LEVEL_SIZE.LEVEL1_HEIGHT,'bg').setOrigin(0); 

        //load de JSON
        this.map = this.make.tilemap({ key: 'level1' });
    

        const ts_walls = this.map.addTilesetImage('tileset_walls');
        const ts_moss = this.map.addTilesetImage('tileset_moss');

        this.walls = this.map.createLayer('level1_layer_walls', ts_walls);
        this.map.createLayer('level1_layer_moss_up', ts_moss);
        this.map.createLayer('level1_layer_moss_down', ts_moss);
        this.map.createLayer('level1_layer_moss_left', ts_moss);
        this.map.createLayer('level1_layer_moss_right', ts_moss);   


       // this.walls.setcollisionBetween(1,11,true,true,'level1_layer_walls');
        this.walls.setCollisionByExclusion([-1]); //json interpreta el 0 con un -1.


        //hero
        this.hero = this.physics.add.sprite(65, 100, 'hero');

        //entri door
        this.entry = this.add.sprite(65, 268, 'entry')
       // this.entry.body.setAllowGravity(false);
       // this.entry.body.setImmovable(true);
        this.physics.add.collider(this.hero, this.walls);



        this.cursor = this.input.keyboard.createCursorKeys();


        //camera Things
        this.cameras.main.setBounds(0, 0, LEVEL_SIZE.LEVEL1_WIDTH, LEVEL_SIZE.LEVEL1_HEIGHT);
        this.cameras.main.startFollow(this.hero);



    }


    update()
    { 
        if(this.cursor.right.isDown){
            this.hero.setVelocityX(HERO.SPEED);
            this.hero.flipX = false;

        } 
        else if(this.cursor.left.isDown){
            this.hero.setVelocityX(-HERO.SPEED);
            this.hero.flipX = true;
        }
        else 
            this.hero.setVelocityX(0);


        if(this.cursor.space.isDown && this.hero.body.blocked.down && Phaser.Input.Keyboard.DownDuration(this.cursor.space, 250)){
            this.hero.setVelocityY(HERO.JUMP_FORCE);
        }
    }
}