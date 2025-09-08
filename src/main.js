import Phaser from 'phaser';
import { Boot } from './scenes/Boot.js';
import { Game } from './scenes/Game.js';
import { GameOver } from './scenes/GameOver.js';
import { Preloader } from './scenes/Preloader.js';
import { Start } from './scenes/Start.js';

const config = {
    type: Phaser.AUTO,
    title: 'Shmup',
    description: '',
    parent: 'game-container',
    // width: 1280,
    // height: 720,
    scale: {
        mode: Phaser.Scale.RESIZE,
        width: '100%',
        height: '100%'
    },
    backgroundColor: '#000000',
    pixelArt: false,
    physics: {
        default: 'arcade',
        arcade: {
            debug: false,
            gravity: { y: 0 }
        }
    },
    scene: [
        Boot,
        Preloader,
        Start,
        Game,
        GameOver
    ],
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH
    },
    parent: 'game-container'
}

new Phaser.Game(config);
