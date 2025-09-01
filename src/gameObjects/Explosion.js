import ASSETS from '../assets.js';
import ANIMATION from '../animation.js';

export default class Explosion extends Phaser.GameObjects.Sprite {
    
  constructor(scene, x, y) {
    
    super(scene, x, y, ASSETS.spritesheet.tiles.key, 4);
    scene.add.existing(this);

    this.setDepth(10);
    this.displayWidth = 100;
    this.displayHeight = 100;
    this.anims.play(ANIMATION.explosion.key);

    // play the explosion SFX once
    this.scene.sound.play(ASSETS.audio.boom.key, {
      volume: 0.6,     // tweak as you like
      detune: Phaser.Math.Between(-50, 50) // tiny pitch variance feels more “alive”
    });

    // destroy sprite after the animation completes
    this.on(Phaser.Animations.Events.ANIMATION_COMPLETE, () => {
      this.destroy();
    });
  }
}
