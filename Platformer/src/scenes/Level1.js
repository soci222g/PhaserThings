import { LEVEL_SIZE, HERO, SCALE } from "../core/constants.js";

import { Jumper } from "../entities/enemies/Jumper.js";
import { Slime } from "../entities/enemies/Slime.js";
import { Door }  from "../entities/Door.js";
import { Hero } from "../entities/Hero.js";

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
        this.load.spritesheet('jumper','jumper.png',{frameWidth: 32, frameHeight: 32});
        this.load.spritesheet('slime','slime.png',{frameWidth: 32, frameHeight: 32});



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

        this.entries = this.map.getObjectLayer('level1_entities');
        console.log(this.entries);
        this.entries.objects.forEach(function(entity){

            console.log(entity);
            switch(entity.type){
                case 'Jumper':
                        let _jumper = new Jumper(this, entity.x,entity.y, 'jumper');
                        _jumper.setHealth(entity.properties[0].value);

                    break;
                case 'Slime':
                    let _slime = new Slime(this, entity.x,entity.y);
                    _slime.setHealth(entity.properties[0].value);
                    break;
                case 'Door':
                    let _door = new Door(this,entity.x,entity.y).setOrigin(0.5,1);
                    _door.openDoor();    
                    if(!entity.properties[0].value){
                    this.hero = new Hero(this, entity.x,entity.y - 20, 'hero');  
                    
                
                }
                break;
                default:
                    console.log("entidad no reconocida");
                    break;
            }
        },this)




      // this.entry.body.setAllowGravity(false);
        //this.entry.body.setImmovable(true);
        this.physics.add.collider(this.hero, this.walls);



        this.cursor = this.input.keyboard.createCursorKeys();


        //camera Things
        this.cameras.main.setBounds(0, 0, LEVEL_SIZE.LEVEL1_WIDTH, LEVEL_SIZE.LEVEL1_HEIGHT);
        this.cameras.main.startFollow(this.hero);

        this.loadAnimations();







    }


    loadAnimations(){
        this.anims.create({
            key: 'hero_run',
            frames: this.anims.generateFrameNumbers('hero', {start: 2, end: 5}),
            frameRate: 8,
            repeat: -1
        });

         this.anims.create({
            key: 'run_jumper',
            frames: this.anims.generateFrameNumbers('jumper', {start: 0, end: 3}),
            frameRate: 10,
            repeat: -1
        });

         this.anims.create({
            key: 'run_slime',
            frames: this.anims.generateFrameNumbers('slime', {start: 0, end: 3}),
            frameRate: 8,
            repeat: -1
        });

         this.anims.create({
            key: 'entry_open',
            frames: this.anims.generateFrameNumbers('entry', {start: 1, end: 3}),
            frameRate: 8,
            repeat: -1
        });


    }


    update()
    { 
    }
}