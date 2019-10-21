var config = {
    type: Phaser.CANVAS,
    parent:'base',
    width: 1920,
    height:1080,
    backgroundColor: 0x929737,
    trasparent:false,
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