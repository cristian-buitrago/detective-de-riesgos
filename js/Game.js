class Game extends Phaser.Scene{

    constructor(){
        super("GameClass");


   
        this.mapArray = [1  ,1  ,1  ,1  ,1  ,1  ,1  ,1  ,1  ,1  ,11 ,12 ,13 ,14 ,1  ,1  ,1  ,1  ,1  ,1  ,1  ,1  ,1  ,1  ,
                         1  ,1  ,1  ,1  ,1  ,1  ,1  ,1  ,1  ,34 ,35 ,36 ,37 ,38 ,39 ,1  ,1  ,1  ,1  ,1  ,1  ,1  ,1  ,1  ,
                         1  ,1  ,1  ,1  ,1  ,1  ,1  ,56 ,57 ,58 ,59 ,60 ,61 ,62 ,63 ,64 ,65 ,1  ,1  ,1  ,1  ,1  ,1  ,1  , 
                         1  ,1  ,1  ,1  ,1  ,78 ,79 ,80 ,81 ,82 ,83 ,84 ,85 ,86 ,87 ,88 ,89 ,90 ,1  ,1  ,1  ,1  ,1  ,1  ,
                         1  ,1  ,1  ,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,1  ,1  ,1  ,1  ,   
                         1  ,1  ,123,124,125,126,127,128,129,130,131,132,133,134,135,136,137,138,139,140,141,142,1  ,1  ,
                        145,146,147,148,149,150,151,152,153,154,155,156,157,158,159,160,161,162,163,164,165,166,167,168,
                        169,170,171,172,173,174,175,176,177,178,179,180,181,182,183,184,185,186,187,188,189,190,191,192,
                         1  ,194,195,196,197,198,199,200,201,202,203,204,205,206,207,208,209,210,211,212,213,214,215,1  ,
                         1  ,1  ,1  ,220,221,222,223,224,225,226,227,228,229,230,231,232,233,234,235,236,237,1  ,1  ,1  ,
                         1  ,1  ,1  ,1  ,245,246,247,248,249,250,251,252,253,254,255,256,257,258,259,1  ,1  ,1  ,1  ,1  ,
                         1  ,1  ,1  ,1  ,1  ,1  ,271,272,273,274,275,276,277,278,279,280,281,282,1  ,1  ,1  ,1  ,1  ,1  ,
                         1  ,1  ,1  ,1  ,1  ,1  ,1  ,1  ,297,298,299,300,301,302,303,304,1  ,1  ,1  ,1  ,1  ,1  ,1  ,1  ,
                         1  ,1  ,1  ,1  ,1  ,1  ,1  ,1  ,309,310,311,312,313,314,315,316,1  ,1  ,1  ,1  ,1  ,1  ,1  ,1  ,
                         1  ,1  ,1  ,1  ,1  ,1  ,1  ,1  ,1  ,1  ,336,337,338,339,1  ,1  ,1  ,1  ,1  ,1  ,1  ,1  ,1  ,1  ];                       
    }

    preload(){

    }


    create(){
        this.map = this.add.container(0,0);

        this.inicio = this.add.container(0,0);

        this.instrucciones = this.add.container(0,0);

        this.preguntas = this.add.container(0,0);

        this.riesgo = this.add.container(0.0);


        //14 filas
        //24 columnas
        var maptilewidth = 309;
        var mapscolumns = 24;
        var mapsLines = 14;
        var columscount = 0;
        var linesCount = 0;
        var mapwidth = maptilewidth*mapscolumns;
        var mapHeight = maptilewidth*mapsLines;
        for(var i =0;i<this.mapArray.length;i++){
            if(columscount > mapscolumns){
                columscount = 0;
                linesCount ++;
            }
            this.map.add(this.add.image(maptilewidth*columscount,maptilewidth*linesCount,'mapa'+i));
            columscount ++;
        }
        //Adicionar Imagen
        //var  = imagen this = escene .add image (posX,posY,keyimageb).setOrigin(0,0);}
        this.edificio1 = this.add.image(1730,1429,'edificio0').setOrigin(0,0);       
        this.edificio2 = this.add.image(2200,1664,'edificio1').setOrigin(0,0);
        this.edificio3 = this.add.image(2257,1157,'edificio2').setOrigin(0,0);
        this.edificio4 = this.add.image(316,1353,'edificio3').setOrigin(0,0);
        this.edificio5 = this.add.image(1069,700,'edificio4').setOrigin(0,0);
        this.edificio6 = this.add.image(3133,1546,'edificio5').setOrigin(0,0);
        this.edificio7 = this.add.image(2680,1206,'edificio6').setOrigin(0,0);
        this.edificio8 = this.add.image(3046,2082,'edificio7').setOrigin(0,0);
        this.edificio9 = this.add.image(4860,1984,'edificio8').setOrigin(0,0);
        this.edificio10 = this.add.image(4136,956,'edificio9').setOrigin(0,0);
        this.edificio11 = this.add.image(3298,427,'edificio10').setOrigin(0,0);
        this.edificio12 = this.add.image(3115,466,'edificio11').setOrigin(0,0);
        this.edificio13 = this.add.image(4747,1868,'edificio12').setOrigin(0,0);
        this.edificio14 = this.add.image(2729,2538,'edificio13').setOrigin(0,0);
        this.edificio15 = this.add.image(3141,2095,'edificio14').setOrigin(0,0);

        //Insertarimagen en el mapa
        //this.map.add(var imagen);
        this.map.add(this.edificio7);
        this.map.add(this.edificio6);
        this.map.add(this.edificio3);
        this.map.add(this.edificio2);
        this.map.add(this.edificio1);
        this.map.add(this.edificio4);
        this.map.add(this.edificio5);
        this.map.add(this.edificio8);
        this.map.add(this.edificio11);
        this.map.add(this.edificio10);
        this.map.add(this.edificio9);
        this.map.add(this.edificio12);
        this.map.add(this.edificio13);
        this.map.add(this.edificio14);
        this.map.add(this.edificio15);


        //Imagenes y objetos
        //var add image()setOrigin;

        this.Recurso1 = this.add.image(3077,3618,'Recurso1').setOrigin(0,0);
        this.Recurso2 = this.add.image(5739,2755,'Recurso2').setOrigin(0,0);
        this.Recurso3 = this.add.image(4303,3579,'Recurso3').setOrigin(0,0);
        this.Recurso4 = this.add.image(5174,2886,'Recurso4').setOrigin(0,0);
        this.Recurso5 = this.add.image(6468,2146,'Recurso5').setOrigin(0,0);
        this.Recurso6 = this.add.image(1584,2925,'Recurso6').setOrigin(0,0);
        this.Recurso7 = this.add.image(3703,3778,'Recurso7').setOrigin(0,0);
        this.Recurso8 = this.add.image(6287,2151,'Recurso8').setOrigin(0,0);
        this.Recurso9 = this.add.image(5308,1935,'Recurso9').setOrigin(0,0);
        this.Recurso10 = this.add.image(4801,1956,'Recurso10').setOrigin(0,0);
        this.Recurso11 = this.add.image(3502,2100,'Recurso11').setOrigin(0,0);
        this.Recurso12 = this.add.image(4555,1776,'Recurso12').setOrigin(0,0);
        this.Recurso13 = this.add.image(3810,1282,'Recurso13').setOrigin(0,0);
        this.Recurso14 = this.add.image(4974,1493,'Recurso14').setOrigin(0,0);
        this.Recurso15 = this.add.image(4729,1360,'Recurso15').setOrigin(0,0);
        this.Recurso16 = this.add.image(2792,2282,'Recurso16').setOrigin(0,0);
        this.Recurso17 = this.add.image(3118,917,'Recurso17').setOrigin(0,0);
        this.Recurso18 = this.add.image(3046,1652,'Recurso18').setOrigin(0,0);
        this.Recurso19 = this.add.image(3312,1461,'Recurso19').setOrigin(0,0);
        this.Recurso20 = this.add.image(3821,2122,'Recurso20').setOrigin(0,0);
        this.Recurso21 = this.add.image(4987,1841,'Recurso21').setOrigin(0,0);
        this.Recurso22 = this.add.image(3076,2184,'Recurso22').setOrigin(0,0);
        this.Recurso23 = this.add.image(2964,1876,'Recurso23').setOrigin(0,0);
        this.Recurso24 = this.add.image(3962,830,'Recurso24').setOrigin(0,0);
        this.Recurso25 = this.add.image(2463,2273,'Recurso25').setOrigin(0,0);
        this.Recurso26 = this.add.image(2962,2967,'Recurso26').setOrigin(0,0);
        this.Recurso27 = this.add.image(3961,2436,'Recurso27').setOrigin(0,0);
        this.Recurso28 = this.add.image(4116,2100,'Recurso28').setOrigin(0,0);
        this.Recurso29 = this.add.image(4702,2354,'Recurso29').setOrigin(0,0);
        this.Recurso30 = this.add.image(991,1737,'Recurso30').setOrigin(0,0);
        this.Recurso31 = this.add.image(3077,662,'Recurso31').setOrigin(0,0);
        this.Recurso32 = this.add.image(989,1550,'Recurso32').setOrigin(0,0);
        this.Recurso33 = this.add.image(2419,2115,'Recurso33').setOrigin(0,0);
        this.Recurso34 = this.add.image(2883,2738,'Recurso34').setOrigin(0,0);
        this.Recurso35 = this.add.image(3013,1403,'Recurso35').setOrigin(0,0);
        this.Recurso36 = this.add.image(3320,1303,'Recurso36').setOrigin(0,0);
        this.Recurso37 = this.add.image(3739,1880,'Recurso37').setOrigin(0,0);
        this.Recurso38 = this.add.image(3950,2199,'Recurso38').setOrigin(0,0);
        this.Recurso39 = this.add.image(2979,1977,'Recurso39').setOrigin(0,0);
        this.Recurso40 = this.add.image(4513,2218,'Recurso40').setOrigin(0,0);
        this.Recurso41 = this.add.image(6253,1956,'Recurso41').setOrigin(0,0);
        this.Recurso42 = this.add.image(4793,1742,'Recurso42').setOrigin(0,0);
        this.Recurso43 = this.add.image(5255,1722,'Recurso43').setOrigin(0,0);
        this.Recurso44 = this.add.image(4941,1311,'Recurso44').setOrigin(0,0);
        this.Recurso45 = this.add.image(4680,1158,'Recurso45').setOrigin(0,0);
        this.Recurso46 = this.add.image(3843,1104,'Recurso46').setOrigin(0,0);


        //Insertar image en mapa
        this.map.add(this.Recurso1);
        this.map.add(this.Recurso2);
        this.map.add(this.Recurso3);
        this.map.add(this.Recurso4);
        this.map.add(this.Recurso5);
        this.map.add(this.Recurso6);
        this.map.add(this.Recurso7); 
        this.map.add(this.Recurso8);
        this.map.add(this.Recurso9);
        this.map.add(this.Recurso10);
        this.map.add(this.Recurso11);
        this.map.add(this.Recurso12);
        this.map.add(this.Recurso13);
        this.map.add(this.Recurso14);
        this.map.add(this.Recurso15);
        this.map.add(this.Recurso16);
        this.map.add(this.Recurso17);
        this.map.add(this.Recurso18);
        this.map.add(this.Recurso19);
        this.map.add(this.Recurso20);
        this.map.add(this.Recurso21);
        this.map.add(this.Recurso22);
        this.map.add(this.Recurso23);
        this.map.add(this.Recurso24);
        this.map.add(this.Recurso25);
        this.map.add(this.Recurso26);
        this.map.add(this.Recurso27);
        this.map.add(this.Recurso28);
        this.map.add(this.Recurso29);
        this.map.add(this.Recurso30);
        this.map.add(this.Recurso31);
        this.map.add(this.Recurso32);
        this.map.add(this.Recurso33);
        this.map.add(this.Recurso34);
        this.map.add(this.Recurso35);
        this.map.add(this.Recurso36);
        this.map.add(this.Recurso37);
        this.map.add(this.Recurso38);
        this.map.add(this.Recurso39);
        this.map.add(this.Recurso40);
        this.map.add(this.Recurso41);
        this.map.add(this.Recurso42);
        this.map.add(this.Recurso43);
        this.map.add(this.Recurso44);
        this.map.add(this.Recurso45);
        this.map.add(this.Recurso46);


        //////////////////////////////////////
        //inicio

        this.inicio1 = this.add.image(1326,-37,'inicio1').setOrigin(0,0);
        this.boton1 = this.add.image(1482,634,'inicio2').setOrigin(0,0);

        this.inicio.add(this.inicio1);
        this.inicio.add(this.boton1);

        this.inicio.visible = false;

        ///////////////////////////////////////
        //instrucciones 

        this.elemento1 = this.add.image(1273,-37,'instrucciones1').setOrigin(0,0);
        this.boton2 = this.add.image(1480,867,'instrucciones2').setOrigin(0,0);
        this.lupa1 = this.add.image(682,317,'instrucciones3').setOrigin(0,0);

        this.instrucciones.add(this.elemento1);
        this.instrucciones.add(this.boton2);
        this.instrucciones.add(this.lupa1);

        this.instrucciones.visible = false;

        ///////////////////////////////////////
        //instrucciones preguntas
        
        this.parte1 = this.add.image(1275,-36,'parte1').setOrigin(0,0);
        this.parte2 = this.add.image(-14,-19,'parte2').setOrigin(0,0);
        this.parte3 = this.add.image(1500,879,'parte3').setOrigin(0,0);
        this.parte4 = this.add.image(1483,172,'parte4').setOrigin(0,0);
        this.escena1 = this.add.image(391,274,'escena15').setOrigin(0.0);
        this.escena2 = this.add.image(434,317,'escena14').setOrigin(0.0);
        

        this.preguntas.add(this.parte1);
        this.preguntas.add(this.parte2);
        this.preguntas.add(this.parte3);
        this.preguntas.add(this.parte4);
        this.preguntas.add(this.escena1);
        this.preguntas.add(this.escena2);


        
        

        //////////////////////////////////////
        //isntrucciones riesgo

      
        ///TEMPORAL PARA SACAR LAS CORDENADAS DE LA IMAGEN
        this.map.setScale(0.25,0.25);
        this.temp = this.escena2;

        this.temp.setInteractive();
        this.input.setDraggable(this.temp);

        this.input.on('drag',function(pointer,gameObject,dragX,dragY){
            gameObject.x = dragX;
            gameObject.y = dragY;
        })
        this.input.on('dragend',(pointer,gameObject,dragX,dragY) => {
            console.log(gameObject);
            console.log("x: " + gameObject.x);
            console.log("y: " + gameObject.y);
        });
        
    }
}
        
    
