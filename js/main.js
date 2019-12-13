var config = {
    type: Phaser.CANVAS,
    parent:'base',
    width: 1920,
    height:1080,
    backgroundColor: 0x31b900,
    trasparent:false,
    physics: {
      default: 'arcade'
    },
    //render: {
      //  antialias: false
    //},

    scale:{
        mode: Phaser.Scale.FIT   ,
        autoCenter: Phaser.Scale.CENTER_BOTH

    },
    scene: [Boot,PreLoader,Game],


};

var game = new Phaser.Game(config);