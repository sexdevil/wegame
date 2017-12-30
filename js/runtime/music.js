let instance

/**
 * 统一的音效管理器
 */
export default class Music {
  constructor() {
    if ( instance )
      return instance

    instance = this

    this.bgmAudio = new Audio()
    this.bgmAudio.loop = true
    this.bgmAudio.src  = 'audio/soviet_march.mp3'

    this.shootAudio     = new Audio()
    this.shootAudio.src = 'audio/bullet.mp3'

    this.boomAudio     = new Audio()
    this.boomAudio.src = 'audio/banshee/boom.mp3'

    this.playerAudio = new Audio();

    this.playBgm()
  }

  playBgm() {
    this.bgmAudio.play()
  }

  playShoot() {
    this.shootAudio.currentTime = 0
    this.shootAudio.play()
  }

  playExplosion() {
    this.boomAudio.currentTime = 0
    this.playRandom(['audio/banshee/Banshee_Attack00.m4a','audio/banshee/Banshee_Attack01.m4a','audio/banshee/Banshee_Attack02.m4a','audio/banshee/Banshee_Attack03.m4a']);
    this.boomAudio.play();
  }

  playRandom(list) {
     let index = parseInt((Math.random()-0.001)*list.length)
     this.playerAudio.currentTime = 0;
     this.playerAudio.src = list[index];
     this.playerAudio.play();
  }
}
