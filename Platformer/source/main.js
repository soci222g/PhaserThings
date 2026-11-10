 /// <reference path="./types/phaser.d.ts" />

 import {buildConfig} from './core/config.js';




 const game = new Phaser.Game(
    buildConfig({
        scenes: [
            //boot
            //menu

            Level1
            //hud //lanzar el paralelo de la escena de UI
        ],
    })
 );