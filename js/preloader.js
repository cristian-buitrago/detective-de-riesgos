class PreLoader extends Phaser.Scene{
    
    constructor(){
        super("PreloaderGame");

    }
    preload(){
        //PRELOADER BAR
        var progressBar = this.add.graphics();
            var progressBox = this.add.graphics();
            progressBox.fillStyle(0x222222, 0.8);
            progressBox.fillRect(800, 515, 320, 50);
            
            var width = 1920;
            var height = 1080;
            var loadingText = this.make.text({
                x: width / 2,
                y: height / 2 - 50,
                text: 'Loading...',
                style: {
                    font: '20px monospace',
                    fill: '#ffffff'
                }
            });
            loadingText.setOrigin(0.5, 0.5);
            
            var percentText = this.make.text({
                x: width / 2,
                y: height / 2 - 5,
                text: '0%',
                style: {
                    font: '18px monospace',
                    fill: '#ffffff'
                }
            });
            percentText.setOrigin(0.5, 0.5);
            
            var assetText = this.make.text({
                x: width / 2,
                y: height / 2 + 50,
                text: '',
                style: {
                    font: '18px monospace',
                    fill: '#ffffff'
                }
            });
 
            assetText.setOrigin(0.5, 0.5);
            
            this.load.on('progress', function (value) {
                percentText.setText(parseInt(value * 100) + '%');
                progressBar.clear();
                progressBar.fillStyle(0xffffff, 1);
                progressBar.fillRect(810, 525, 300 * value, 30);
            });
            
            this.load.on('fileprogress', function (file) {
                assetText.setText('Loading asset: ' + file.key);
            });
 
            this.load.on('complete', function () {
                progressBar.destroy();
                progressBox.destroy();
                loadingText.destroy();
                percentText.destroy();
                assetText.destroy();
            });






        ///////////////////////////////////////////
        var i = 0;

        this.widthArrayB = [718,985,1093,1212,2222,1034,1138,594,288,1520,1903,545,1314,248,316];
        this.heightarrayB = [1092,704,628,1193,1620,769,865,451,314,1172,1213,557,763,601,858];
        this.widthArrayR = [180,175,173,203,192,158,158,128,129,196,17,89,260,107,87,17,96,127,378,26,14,19,79,17,210,80,159,78,139,166,195,195,195,195,195,195,195,195,195,195,195,195,195,195,195,195];
        this.heightarrayR = [119,115,118,172,162,130,130,158,85,234,45,63,164,135,86,45,70,62,137,51,51,115,119,45,227,80,116,123,131,211,195,195,195,195,195,195,195,195,195,195,195,195,195,195,195,195];        
        this.widthArrayF = [614,352];
        this.heightarrayF = [1153,129];
        this.widthArrayT = [665,352,310];
        this.heightarrayT = [1153,129,310];
        this.widthArrayP = [665,1951,344,377];
        this.heightarrayP = [1153,163,130,150];
        this.widthArrayA =  [391,322,466,428,403,377,432,496,495,485,462,416,450,474,482];
        this.heightarrayA = [149,67,150,150,143,150,112,141,142,150,169,143,144,112,180];
        this.widthArrayC = [404,488,466,428,403,377,432,496,495,485,450,450,474,482];
        this.heightarrayC = [83,388,150,149,144,150,112,141,142,150,144,144,112,181];
        this.widthArrayD = [468,475,462,474,472,478,447,482,478,482,472,486,490,474,482];
        this.heightarrayD = [263,409,187,295,225,187,301,371,341,455,339,415,447,378,301];


        for(i = 0;i<361;i++){
        this.load.image('mapa'+i,'imagenes/mapa1_'+(i+1)+'.png');
        }

        for(i = 0;i<14;i++){
        //img\Buldings
        console.log('edificio'+i);
        console.log('img/edificios/Recurso'+(i)+'.svg');
        this.load.svg('edificio'+i,'img/edificios/Recurso'+(i)+'.svg',{width: this.widthArrayB[i], height: this.heightarrayB[i]});
        }    

        for(i = 0;i<31;i++){
            //img/elementos mapa        
           this.load.svg('Recurso'+(i+1),'img/elementos y personajes/Recurso'+(i+1)+'.svg',{width: this.widthArrayR[i], height: this.heightarrayR[i]});
        }
        for(i = 0;i<2;i++){
            //img/inicio     
           this.load.svg('inicio'+(i+1),'img/fondo/inicio'+(i+1)+'.svg',{width: this.widthArrayF[i], height: this.heightarrayF[i]});
        }
        for(i = 0;i<3;i++){
            //img/instrucciones     
           this.load.svg('instrucciones'+(i+1),'img/instrucciones/instrucciones'+(i+1)+'.svg',{width: this.widthArrayT[i], height: this.heightarrayT[i]});
        }
        for(i = 0;i<4;i++){
            //img/preguntas    
           this.load.svg('parte'+(i+1),'img/preguntas/parte'+(i+1)+'.svg',{width: this.widthArrayP[i], height: this.heightarrayP[i]});
        }
        for(i = 0;i<16;i++){
            this.load.image('escena'+(i+1),'img/escenas/escena'+(i+1)+'.png');
        }
        for(i = 0;i<15;i++){
            //img/preguntas    
           this.load.svg('pregunta'+(i+1),'img/preguntas_inicio/p'+(i+1)+'.svg',{width: this.widthArrayA[i], height: this.heightarrayA[i]});
        }
        
        
        /*for(i = 0;i<14;i++){
            //img/respuestas    
           this.load.svg('respuesta'+(i+1),'img/respuestas/r'+(i+1)+'.svg',{width: this.widthArrayC[i], height: this.heightarrayC[i]});
        }*/

        this.load.svg('respuesta1a','img/respuestas/1a.svg',{width: 395, height: 78});
        this.load.svg('respuesta1b','img/respuestas/1b.svg',{width: 363, height: 50});
        this.load.svg('respuesta1c','img/respuestas/1c.svg',{width: 392, height: 77});

        this.load.svg('respuesta2a','img/respuestas/2a.svg',{width: 392, height: 78});
        this.load.svg('respuesta2b','img/respuestas/2b.svg',{width: 382, height: 77});
        this.load.svg('respuesta2c','img/respuestas/2c.svg',{width: 396, height: 78});

        this.load.svg('respuesta3a','img/respuestas/3a.svg',{width: 396, height: 78});
        this.load.svg('respuesta3b','img/respuestas/3b.svg',{width: 399, height: 78});
        this.load.svg('respuesta3c','img/respuestas/3c.svg',{width: 396, height: 78});

        this.load.svg('respuesta4a','img/respuestas/4a.svg',{width: 375, height: 50});
        this.load.svg('respuesta4b','img/respuestas/4b.svg',{width: 386, height: 78});
        this.load.svg('respuesta4c','img/respuestas/4c.svg',{width: 365, height: 74});

        this.load.svg('respuesta5a','img/respuestas/5a.svg',{width: 375, height: 78});
        this.load.svg('respuesta5b','img/respuestas/5b.svg',{width: 399, height: 78});
        this.load.svg('respuesta5c','img/respuestas/5c.svg',{width: 384, height: 74});

        this.load.svg('respuesta6a','img/respuestas/6a.svg',{width: 395, height: 78});
        this.load.svg('respuesta6b','img/respuestas/6b.svg',{width: 400, height: 77});
        this.load.svg('respuesta6c','img/respuestas/6c.svg',{width: 400, height: 78});

        this.load.svg('respuesta7a','img/respuestas/7a.svg',{width: 373, height: 78});
        this.load.svg('respuesta7b','img/respuestas/7b.svg',{width: 361, height: 50});
        this.load.svg('respuesta7c','img/respuestas/7c.svg',{width: 389, height: 79});

        this.load.svg('respuesta8a','img/respuestas/8a.svg',{width: 372, height: 78});
        this.load.svg('respuesta8b','img/respuestas/8b.svg',{width: 366, height: 78});
        this.load.svg('respuesta8c','img/respuestas/8c.svg',{width: 375, height: 79});

        this.load.svg('respuesta9a','img/respuestas/9a.svg',{width: 401, height: 78});
        this.load.svg('respuesta9b','img/respuestas/9b.svg',{width: 368, height: 50});
        this.load.svg('respuesta9c','img/respuestas/9c.svg',{width: 393, height: 77});

        this.load.svg('respuesta10a','img/respuestas/10a.svg',{width: 380, height: 78});
        this.load.svg('respuesta10b','img/respuestas/10b.svg',{width: 403, height: 78});
        this.load.svg('respuesta10c','img/respuestas/10c.svg',{width: 380, height: 74});

        this.load.svg('respuesta11a','img/respuestas/11a.svg',{width: 390, height: 78});
        this.load.svg('respuesta11b','img/respuestas/11b.svg',{width: 401, height: 78});
        this.load.svg('respuesta11c','img/respuestas/11c.svg',{width: 393, height: 79});

        this.load.svg('respuesta12a','img/respuestas/12a.svg',{width: 398, height: 78});
        this.load.svg('respuesta12b','img/respuestas/12b.svg',{width: 384, height: 50});
        this.load.svg('respuesta12c','img/respuestas/12c.svg',{width: 398, height: 77});

        this.load.svg('respuesta13a','img/respuestas/13a.svg',{width: 399, height: 78});
        this.load.svg('respuesta13b','img/respuestas/13b.svg',{width: 297, height: 50});
        this.load.svg('respuesta13c','img/respuestas/13c.svg',{width: 386, height: 49});

        this.load.svg('respuesta14a','img/respuestas/14a.svg',{width: 395, height: 74});
        this.load.svg('respuesta14b','img/respuestas/14b.svg',{width: 401, height: 74});
        this.load.svg('respuesta14c','img/respuestas/14c.svg',{width: 401, height: 77});

        this.load.svg('respuesta15a','img/respuestas/15a.svg',{width: 397, height: 78});
        this.load.svg('respuesta15b','img/respuestas/15b.svg',{width: 374, height: 74});
        this.load.svg('respuesta15c','img/respuestas/15c.svg',{width: 375, height: 73});



        for(i = 0;i<15;i++){
            //img/respuestas    
           this.load.svg('Recomendacion'+(i+1),'img/Recomendaciones/r'+(i+1)+'.svg',{width: this.widthArrayD[i], height: this.heightarrayD[i]});
        }

        this.load.svg('respuesfinBuenoFondo','img/respuesta/recomendacion1.svg',{width: 664, height: 1153});
        this.load.svg('respuesfinMaloFondo','img/respuesta/recomendacion2.svg',{width: 664, height: 1153});
        this.load.svg('correcto','img/respuesta/correcto.svg',{width: 857, height: 194});
        this.load.svg('incorrecto','img/respuesta/incorrecto.svg',{width: 856, height: 193});
        this.load.svg('botonBien','img/respuesta/seguir1.svg',{width: 307, height: 64});
        this.load.svg('botonMal','img/respuesta/seguir2.svg',{width: 307, height: 64});
        this.load.svg('alerta','img/riesgo/alerta_seguridad.svg',{width: 1926, height: 194});
        this.load.svg('botonSolucion','img/riesgo/btn_solucion.svg',{width: 344, height: 130});
        this.load.svg('volver','img/riesgo/volver.svg',{width: 320, height: 141});


        this.load.svg('finBien','img/fondo/aprobado.svg',{width: 711,height: 1151});
        this.load.svg('finMal','img/fondo/bien.svg',{width: 711,height: 1151});
        this.load.svg('finBoton','img/fondo/boton.svg',{width: 263,height: 112});
        

        
           
    }
    create(){
        this.add.text(20,20,"Preload Game...");

        this.scene.start("GameClass");

    }

}