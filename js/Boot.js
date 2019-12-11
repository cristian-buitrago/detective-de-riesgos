class Boot extends Phaser.Scene{

    constructor(){
        super("BootGame");
    }
    preload(){
    	console.log(this.sys.game.device.os);
    	if(this.sys.game.device.os.desktop == true){
    		console.log("aja si");

    	}

    }



    create(){
        this.add.text(20,20,"Boot Game...");
        this.scene.start("PreloaderGame");

    }
}