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
        this.widthArrayR = [180,175,173,203,192,158,158,128,129,196,17,89,260,107,87,17,96,127,378,26,14,19,79,17,210,80,159,78,139,166,195,248,275];
        this.heightarrayR = [119,115,118,172,162,130,130,158,85,234,45,63,164,135,86,45,70,62,137,51,51,115,119,45,227,80,116,123,131,211,195,212,160];
        this.widthArrayF = [614,352];
        this.heightarrayF = [1153,129];
        this.widthArrayT = [665,352,310];
        this.heightarrayT = [1153,129,310];
        this.widthArrayP = [894,1951,344,377];
        this.heightarrayP = [1153,163,130,150];
        this.widthArrayA =  [547,322,650,428,403,555,526,749,643,604,556,506,451,474,483];
        this.heightarrayA = [112,67,112,150,143,112,106,146,142,144,135,105,144,112,181];
        this.widthArrayC = [404,488,466,428,403,377,432,496,495,485,450,450,474,482];
        this.heightarrayC = [83,388,150,149,144,150,112,141,142,150,144,144,112,181];
        this.widthArrayD = [597,703,619,638,604,675,660,650,590,662,581,653,612,677,679];
        this.heightarrayD = [187,222,146,178,141,146,185,254,255,337,260,298,146,261,216];


        for(i = 0;i<336;i++){
        this.load.image('mapa'+i,'images/mapa1_'+(i+1)+'.png');
        }

        this.load.svg('Recurso31','img/elementos y personajes/Recurso31.svg',{width: 195, height: 195});

        /*for(i = 0;i<14;i++){
        //img\Buldings
        console.log('edificio'+i);
        console.log('img/edificios/Recurso'+(i)+'.svg');
        this.load.svg('edificio'+i,'img/edificios/Recurso'+(i)+'.svg',{width: this.widthArrayB[i], height: this.heightarrayB[i]});
        }*/

       /* for(i = 0;i<33;i++){
            //img/elementos mapa
           this.load.svg('Recurso'+(i+1),'img/elementos y personajes/Recurso'+(i+1)+'.svg',{width: this.widthArrayR[i], height: this.heightarrayR[i]});
        }*/
        /*for(i = 0;i<2;i++){
            //img/inicio
           this.load.svg('inicio'+(i+1),'img/fondo/inicio'+(i+1)+'.svg',{width: this.widthArrayF[i], height: this.heightarrayF[i]});
        }*/

        this.load.image('inicio1','img/fondo/inicio1.png');
        this.load.svg('inicio2','img/fondo/inicio2.svg',{width: this.widthArrayF[1], height: this.heightarrayF[1]});




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


        this.load.svg('respuesta1a','img/respuestas/1a.svg',{width: 633, height: 76});
        this.load.svg('respuesta1b','img/respuestas/1b.svg',{width: 619, height: 21});
        this.load.svg('respuesta1c','img/respuestas/1c.svg',{width: 641, height: 48});

        this.load.svg('respuesta2a','img/respuestas/2a.svg',{width: 643, height: 72});
        this.load.svg('respuesta2b','img/respuestas/2b.svg',{width: 571, height: 48});
        this.load.svg('respuesta2c','img/respuestas/2c.svg',{width: 643, height: 76});

        this.load.svg('respuesta3a','img/respuestas/3a.svg',{width: 627, height: 48});
        this.load.svg('respuesta3b','img/respuestas/3b.svg',{width: 645, height: 49});
        this.load.svg('respuesta3c','img/respuestas/3c.svg',{width: 630, height: 48});

        this.load.svg('respuesta4a','img/respuestas/4a.svg',{width: 577, height: 45});
        this.load.svg('respuesta4b','img/respuestas/4b.svg',{width: 638, height: 49});
        this.load.svg('respuesta4c','img/respuestas/4c.svg',{width: 627, height: 44});

        this.load.svg('respuesta5a','img/respuestas/5a.svg',{width: 644, height: 76});
        this.load.svg('respuesta5b','img/respuestas/5b.svg',{width: 628, height: 49});
        this.load.svg('respuesta5c','img/respuestas/5c.svg',{width: 591, height: 48});

        this.load.svg('respuesta6a','img/respuestas/6a.svg',{width: 589, height: 76});
        this.load.svg('respuesta6b','img/respuestas/6b.svg',{width: 597, height: 48});
        this.load.svg('respuesta6c','img/respuestas/6c.svg',{width: 624, height: 48});

        this.load.svg('respuesta7a','img/respuestas/7a.svg',{width: 623, height: 48});
        this.load.svg('respuesta7b','img/respuestas/7b.svg',{width: 605, height: 49});
        this.load.svg('respuesta7c','img/respuestas/7c.svg',{width: 605, height: 48});

        this.load.svg('respuesta8a','img/respuestas/8a.svg',{width: 548, height: 48});
        this.load.svg('respuesta8b','img/respuestas/8b.svg',{width: 544, height: 48});
        this.load.svg('respuesta8c','img/respuestas/8c.svg',{width: 617, height: 48});

        this.load.svg('respuesta9a','img/respuestas/9a.svg',{width: 624, height: 76});
        this.load.svg('respuesta9b','img/respuestas/9b.svg',{width: 541, height: 20});
        this.load.svg('respuesta9c','img/respuestas/9c.svg',{width: 635, height: 48});

        this.load.svg('respuesta10a','img/respuestas/10a.svg',{width: 630, height: 76});
        this.load.svg('respuesta10b','img/respuestas/10b.svg',{width: 607, height: 49});
        this.load.svg('respuesta10c','img/respuestas/10c.svg',{width: 606, height: 44});

        this.load.svg('respuesta11a','img/respuestas/11a.svg',{width: 641, height: 48});
        this.load.svg('respuesta11b','img/respuestas/11b.svg',{width: 615, height: 49});
        this.load.svg('respuesta11c','img/respuestas/11c.svg',{width: 615, height: 48});

        this.load.svg('respuesta12a','img/respuestas/12a.svg',{width: 646, height: 105});
        this.load.svg('respuesta12b','img/respuestas/12b.svg',{width: 638, height: 21});
        this.load.svg('respuesta12c','img/respuestas/12c.svg',{width: 635, height: 48});

        this.load.svg('respuesta13a','img/respuestas/13a.svg',{width: 585, height: 72});
        this.load.svg('respuesta13b','img/respuestas/13b.svg',{width: 436, height: 21});
        this.load.svg('respuesta13c','img/respuestas/13c.svg',{width: 477, height: 20});

        this.load.svg('respuesta14a','img/respuestas/14a.svg',{width: 637, height: 104});
        this.load.svg('respuesta14b','img/respuestas/14b.svg',{width: 641, height: 44});
        this.load.svg('respuesta14c','img/respuestas/14c.svg',{width: 641, height: 48});

        this.load.svg('respuesta15a','img/respuestas/15a.svg',{width: 643, height: 49});
        this.load.svg('respuesta15b','img/respuestas/15b.svg',{width: 617, height: 45});
        this.load.svg('respuesta15c','img/respuestas/15c.svg',{width: 640, height: 44});



        for(i = 0;i<15;i++){
            //img/respuestas
           this.load.svg('Recomendacion'+(i+1),'img/Recomendaciones/r'+(i+1)+'.svg',{width: this.widthArrayD[i], height: this.heightarrayD[i]});
        }

        this.load.svg('respuesfinBuenoFondo','img/respuesta/recomendacion1.svg',{width: 951, height: 1226});
        this.load.svg('respuesfinMaloFondo','img/respuesta/recomendacion2.svg',{width: 951, height: 1226});
        this.load.svg('correcto','img/respuesta/correcto.svg',{width: 857, height: 194});
        this.load.svg('incorrecto','img/respuesta/incorrecto.svg',{width: 856, height: 193});
        this.load.svg('botonBien','img/respuesta/seguir1.svg',{width: 307, height: 64});
        this.load.svg('botonMal','img/respuesta/seguir2.svg',{width: 307, height: 64});
        this.load.svg('alerta','img/riesgo/alerta_seguridad.svg',{width: 1926, height: 194});
        this.load.svg('botonSolucion','img/riesgo/btn_solucion.svg',{width: 344, height: 130});
        this.load.svg('volver','img/riesgo/volver.svg',{width: 320, height: 141});


        //this.load.svg('finBien','img/fondo/aprobado.svg',{width: 711,height: 1151});
        //this.load.svg('finMal','img/fondo/bien.svg',{width: 711,height: 1151});
        this.load.image('finBien','img/fondo/aprobado.png');
        this.load.image('finMal','img/fondo/bien.png');


        this.load.svg('finBoton','img/fondo/boton.svg',{width: 263,height: 112});

        this.load.audio('mal', ['img/sonidos/mal.ogg','img/sonidos/mal.mp3']);
        this.load.audio('bien', ['img/sonidos/bien.ogg','img/sonidos/bien.mp3']);
        this.load.audio('SoundVolver', ['img/sonidos/volver.ogg','img/sonidos/volver.mp3']);
        this.load.audio('alarma', ['img/sonidos/alerta.ogg','img/sonidos/alerta.mp3']);
        this.load.audio('fondo', ['img/sonidos/fondo.ogg','img/sonidos/fondo.mp3']);

        this.load.svg('puntaje_1','img/puntaje_tiempo/puntaje_1.svg',{width: 294, height: 159});
        this.load.svg('tiempo','img/puntaje_tiempo/tiempo.svg',{width: 294, height: 159});
        this.load.svg('tiempo2','img/puntaje_tiempo/tiempo.svg',{width: 322, height: 190});
        this.load.svg('riesgos','img/puntaje_tiempo/riesgos.svg',{width: 160, height: 387});




    }
    create(){
        this.add.text(20,20,"Preload Game...");

        this.scene.start("GameClass");

    }

}