
import { GAME_SIZE, PHYSICS,RENDER } from "./constatn.js";


export function buildConfig({scene=[]} = {}){
    return {

        type: Phaser.AUTO,
        width: GAME_SIZE.WIDTH,
        height: GAME_SIZE.HEIGHT,
        scenes: scene,
        render: {RENDER},
        physics:{
            default: PHYSICS.TYPE,
            arcade:{
                gravity:
                 { 
                    y: PHYSICS.GRAVITY},
                    debug:PHYSICS.DEBUG,
                }
            
            }

    };
}