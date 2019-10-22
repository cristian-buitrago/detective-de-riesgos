class PreLoader extends Phaser.Scene{
    
    constructor(){
        super("PreloaderGame");

    }
    preload(){
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
        this.widthArrayA = [391,322,466,428,403,377,432,496,495,485,450,450,474,482];
        this.heightarrayA = [149,67,150,149,144,150,112,141,142,150,144,144,112,181];
        this.widthArrayC = [404,488,466,428,403,377,432,496,495,485,450,450,474,482];
        this.heightarrayC = [83,388,150,149,144,150,112,141,142,150,144,144,112,181];


        for(i = 0;i<361;i++){
        this.load.image('mapa'+i,'imagenes/mapa1_'+(i+1)+'.png');
        }

        for(i = 0;i<15;i++){
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
            this.load.image('escena'+i,'img/escenas/escena'+(i+1)+'.png');
        }
        for(i = 0;i<14;i++){
            //img/preguntas    
           this.load.svg('pregunta'+(i+1),'img/preguntas_inicio/pregunta'+(i+1)+'.svg',{width: this.widthArrayA[i], height: this.heightarrayA[i]});
        }
        for(i = 0;i<14;i++){
            //img/respuestas    
           this.load.svg('respuesta'+(i+1),'img/respuestas/r'+(i+1)+'.svg',{width: this.widthArrayC[i], height: this.heightarrayC[i]});
        }

        this.load.svg('respuesfinBuenoFondo','img/respuesta/recomendacion1.svg',{width: 664, height: 1153});
        this.load.svg('respuesfinMaloFondo','img/respuesta/recomendacion2.svg',{width: 664, height: 1153});
        this.load.svg('correcto','img/respuesta/correcto.svg',{width: 857, height: 194});
        this.load.svg('incorrecto','img/respuesta/incorrecto.svg',{width: 856, height: 193});
        this.load.svg('botonBien','img/respuesta/seguir1.svg',{width: 307, height: 64});
        this.load.svg('botonMal','img/respuesta/seguir2.svg',{width: 307, height: 64});

        
           
    }
    create(){
        this.add.text(20,20,"Preload Game...");

        this.scene.start("GameClass");

    }

}