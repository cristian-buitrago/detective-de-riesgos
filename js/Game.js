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

        this.Recomendacion = this.add.container(0.0);

        this.currentquestion;


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

        this.Recurso31.setInteractive();
        this.Recurso31.on('pointerup', () => { this. showPregunta(0);});

        this.Recurso32 = this.add.image(989,1550,'Recurso31').setOrigin(0,0);
        this.Recurso32.setInteractive();
        this.Recurso32.on('pointerup', () => { this. showPregunta(1);});
        this.Recurso33 = this.add.image(2419,2115,'Recurso31').setOrigin(0,0);
        this.Recurso33.setInteractive();
        this.Recurso33.on('pointerup', () => { this. showPregunta(2);});
        this.Recurso34 = this.add.image(2883,2738,'Recurso31').setOrigin(0,0);
        this.Recurso34.setInteractive();
        this.Recurso34.on('pointerup', () => { this. showPregunta(3);});
        this.Recurso35 = this.add.image(3013,1403,'Recurso31').setOrigin(0,0);
        this.Recurso35.setInteractive();
        this.Recurso35.on('pointerup', () => { this. showPregunta(4);});
        this.Recurso36 = this.add.image(3320,1303,'Recurso31').setOrigin(0,0);
        this.Recurso36.setInteractive();
        this.Recurso36.on('pointerup', () => { this. showPregunta(5);});
        this.Recurso37 = this.add.image(3739,1880,'Recurso31').setOrigin(0,0);
        this.Recurso37.setInteractive();
        this.Recurso37.on('pointerup', () => { this. showPregunta(6);});
        this.Recurso38 = this.add.image(3950,2199,'Recurso31').setOrigin(0,0);
        this.Recurso38.setInteractive();
        this.Recurso38.on('pointerup', () => { this. showPregunta(7);});
        this.Recurso39 = this.add.image(2979,1977,'Recurso31').setOrigin(0,0);
        this.Recurso39.setInteractive();
        this.Recurso39.on('pointerup', () => { this. showPregunta(8);});
        this.Recurso40 = this.add.image(4513,2218,'Recurso31').setOrigin(0,0);
        this.Recurso40.setInteractive();
        this.Recurso40.on('pointerup', () => { this. showPregunta(9);});
        this.Recurso41 = this.add.image(6253,1956,'Recurso31').setOrigin(0,0);
        this.Recurso41.setInteractive();
        this.Recurso41.on('pointerup', () => { this. showPregunta(10);});
        this.Recurso42 = this.add.image(4793,1742,'Recurso31').setOrigin(0,0);
        this.Recurso42.setInteractive();
        this.Recurso42.on('pointerup', () => { this. showPregunta(11);});
        this.Recurso43 = this.add.image(5255,1722,'Recurso31').setOrigin(0,0);
        this.Recurso43.setInteractive();
        this.Recurso43.on('pointerup', () => { this. showPregunta(12);});
        this.Recurso44 = this.add.image(4941,1311,'Recurso31').setOrigin(0,0);
        this.Recurso44.setInteractive();
        this.Recurso44.on('pointerup', () => { this. showPregunta(13);});
        this.Recurso45 = this.add.image(4680,1158,'Recurso31').setOrigin(0,0);
        this.Recurso45.setInteractive();
        this.Recurso45.on('pointerup', () => { this. showPregunta(14);});
        this.Recurso46 = this.add.image(3843,1104,'Recurso31').setOrigin(0,0);
        this.Recurso46.setInteractive();
        this.Recurso46.on('pointerup', () => { this. showPregunta(15);});
        


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
        this.boton1.setInteractive();
        this.boton1.on('pointerup', () => { this.animaIn(this.instrucciones)});

        this.inicio.add(this.inicio1);
        this.inicio.add(this.boton1);


        ///////////////////////////////////////
        //instrucciones 

        this.elemento1 = this.add.image(1273,-37,'instrucciones1').setOrigin(0,0);
        this.boton2 = this.add.image(1480,867,'instrucciones2').setOrigin(0,0);
        //this.lupa1 = this.add.image(682,317,'instrucciones3').setOrigin(0,0);
        this.boton2.setInteractive();
        this.boton2.on('pointerup', () => { this.setup();});

        this.instrucciones.add(this.elemento1);
        this.instrucciones.add(this.boton2);
        //this.instrucciones.add(this.lupa1);


        ///////////////////////////////////////
        //preguntas
        
        this.FondoPregunta = this.add.image(1275,-36,'parte1').setOrigin(0,0);
        this.header = this.add.image(-14,-19,'parte2').setOrigin(0,0);
        //this.boton = this.add.image(1500,879,'parte3').setOrigin(0,0);
        this.textoPregunta = this.add.image(1483,172,'parte4').setOrigin(0,0);
        this.respuestaA = this.add.image(1490,557,'respuesta1').setOrigin(0,0);
        this.respuestaB = this.add.image(1490,686,'respuesta1').setOrigin(0,0);
        this.respuestaC = this.add.image(1490,811,'respuesta1').setOrigin(0,0);
        this.lupa = this.add.image(391,274,'escena15').setOrigin(0.0);
        this.circulo = this.add.image(434,317,'escena14').setOrigin(0.0);

        this.respuestaA.setInteractive();
        this.respuestaA.on('pointerup', () => { this.responder(this.arrayPreguntas[this.currentquestion].r1.Respuesta);});
        this.respuestaB.setInteractive();
        this.respuestaB.on('pointerup', () => { this.responder(this.arrayPreguntas[this.currentquestion].r2.Respuesta);});
        this.respuestaC.setInteractive();
        this.respuestaC.on('pointerup', () => { this.responder(this.arrayPreguntas[this.currentquestion].r3.Respuesta);});
        

        this.preguntas.add(this.FondoPregunta);
        this.preguntas.add(this.header);
        //this.preguntas.add(this.parte3);
        this.preguntas.add(this.textoPregunta);
        this.preguntas.add(this.respuestaA);
        this.preguntas.add(this.respuestaB);
        this.preguntas.add(this.respuestaC);
        this.preguntas.add(this.lupa);
        this.preguntas.add(this.circulo);

        this.OrdenarPreguntas();
        this.arrayPreguntas = [ this.p0 , this.p1, this.p2, this.p3, this.p5, this.p6, this.p7, this.p8, this.p9, this.p10, this.p11, this.p12, this.p13, this.p14, this.p15 ];

        ///////////////////////////////Recomendacion
        //this.Recomendacion




        this.animaIn(this.inicio);

        //////////////////////////////////////
        //isntrucciones riesgo

      
        ///TEMPORAL PARA SACAR LAS CORDENADAS DE LA IMAGEN
        //this.map.setScale(0.25,0.25);
        /*this.temp = this.escena2;

        this.temp.setInteractive();
        this.input.setDraggable(this.temp);*/

        this.input.on('drag',function(pointer,gameObject,dragX,dragY){
            gameObject.x = dragX;
            gameObject.y = dragY;
        })
        /*this.input.on('dragend',(pointer,gameObject,dragX,dragY) => {
            console.log(gameObject);
            console.log("x: " + gameObject.x);
            console.log("y: " + gameObject.y);
        });*/

        this.input.on('dragend',(pointer,gameObject,dragX,dragY) => {
            console.log(gameObject.x);
           if(gameObject.x < -4717){
            this.tweens.add({
                targets: this.map,
                x: -4717,
                y: gameObject.y,
                duration: 500,
                ease: 'Bounce'
            });
           }else if(gameObject.x > 140){
            this.tweens.add({
                targets: this.map,
                x: 140,
                y: gameObject.y,
                duration: 500,
                ease: 'Bounce'
            });
           }
           if(gameObject.y < -3070){
            this.tweens.add({
                targets: this.map,
                x: gameObject.x,
                y: -3074,
                duration: 500,
                ease: 'Bounce'
            });
            
           }else if(gameObject.y > 87){
            this.tweens.add({
                targets: this.map,
                x: gameObject.x,
                y: 87,
                duration: 500,
                ease: 'Bounce'
            });
            }

        });

        this.map.setInteractive(new Phaser.Geom.Rectangle(0, 0, mapwidth, mapHeight), Phaser.Geom.Rectangle.Contains);;
        this.input.setDraggable(this.map);

        this.map.x = (1920/2)-(mapwidth/2);
        this.map.y = (1080/2)-(mapHeight/2);
        
    }

    setup(){
        this.inicio.visible = false;
        this.instrucciones.visible = false;
        this.preguntas.visible = false;
    }
    animaIn(group){
        this.setup();
        group.visible = true;
        group.alpha = 0;
          this.tweens.add({
              targets: group,
              alpha: 1,
              duration:300,
              onComplete: function(){
              }
  
          })
    }
    showPregunta(index){
        console.log(index);
        this.currentquestion = index;
        this.animaIn(this.preguntas);
        //this.parte1 = Fondo Pregunta
        //this.arrayPreguntas
        //this.textoPregunta
        this.textoPregunta.setTexture(this.arrayPreguntas[index].pregunta);
        this.respuestaA.setTexture(this.arrayPreguntas[index].r1.imagen);
        this.respuestaB.setTexture(this.arrayPreguntas[index].r1.imagen);
        this.respuestaC.setTexture(this.arrayPreguntas[index].r1.imagen);

    }
    responder(Respuesta){
        console.log(Respuesta);

    }
    OrdenarPreguntas(){
        this.p0 = {
            name: "P0",
            pregunta: 'pregunta13',
            r1:{
                imagen:'respuesta1',
                Respuesta:false
            },
            r2:{
                imagen:'respuesta1',
                Respuesta:true
            },
            r3:{
                imagen:'respuesta1',
                Respuesta:false
            },
            escena: 'escena1',
            finBien:'respuesta5',
            finmal: 'respuesta4'

        }
        this.p1 = {
            name: "P1",
            pregunta: 'pregunta1',
            r1:{
                imagen:'respuesta1',
                Respuesta:false
            },
            r2:{
                imagen:'respuesta1',
                Respuesta:true
            },
            r3:{
                imagen:'respuesta1',
                Respuesta:false
            },
            escena: 'escena1',
            finBien:'respuesta2',
            finmal: 'respuesta1'

        }
        this.p2 = {
            name: "P6",
            pregunta: 'pregunta2',
            r1:{
                imagen:'respuesta1',
                Respuesta:false
            },
            r2:{
                imagen:'respuesta1',
                Respuesta:true
            },
            r3:{
                imagen:'respuesta1',
                Respuesta:false
            },
            escena: 'escena2',
            finBien:'respuesta5',
            finmal: 'respuesta4'
        }
        this.p3 = {
            name: "P3",
            pregunta: 'pregunta3',
            r1:{
                imagen:'respuesta1',
                Respuesta:false
            },
            r2:{
                imagen:'respuesta1',
                Respuesta:true
            },
            r3:{
                imagen:'respuesta1',
                Respuesta:false
            },
            escena: 'escena3',
            finBien:'respuesta2',
            finmal: 'respuesta1'

        }
        this.p4 = {
            name: "P4",
            pregunta: 'pregunta4',
            r1:{
                imagen:'respuesta1',
                Respuesta:false
            },
            r2:{
                imagen:'respuesta1',
                Respuesta:true
            },
            r3:{
                imagen:'respuesta1',
                Respuesta:false
            },
            escena: 'escena4',
            finBien:'respuesta5',
            finmal: 'respuesta4'

        }
        this.p5 = {
            name: "P5",
            pregunta: 'pregunta1',
            r1:{
                imagen:'respuesta1',
                Respuesta:false
            },
            r2:{
                imagen:'respuesta1',
                Respuesta:true
            },
            r3:{
                imagen:'respuesta1',
                Respuesta:false
            },
            escena: 'escena5',
            finBien:'respuesta2',
            finmal: 'respuesta1'

        }
        this.p6 = {
            name: "P6",
            pregunta: 'pregunta1',
            r1:{
                imagen:'respuesta1',
                Respuesta:false
            },
            r2:{
                imagen:'respuesta1',
                Respuesta:true
            },
            r3:{
                imagen:'respuesta1',
                Respuesta:false
            },
            escena: 'escena6',
            finBien:'respuesta2',
            finmal: 'respuesta1'

        }
        this.p7 = {
            name: "P7",
            pregunta: 'pregunta2',
            r1:{
                imagen:'respuesta1',
                Respuesta:false
            },
            r2:{
                imagen:'respuesta1',
                Respuesta:true
            },
            r3:{
                imagen:'respuesta1',
                Respuesta:false
            },
            escena: 'escena7',
            finBien:'respuesta2',
            finmal: 'respuesta1'

        }
        this.p8 = {
            name: "P8",
            pregunta: 'pregunta5',
            r1:{
                imagen:'respuesta1',
                Respuesta:false
            },
            r2:{
                imagen:'respuesta1',
                Respuesta:true
            },
            r3:{
                imagen:'respuesta1',
                Respuesta:false
            },
            escena: 'escena8',
            finBien:'respuesta2',
            finmal: 'respuesta1'

        }
        this.p9 = {
            name: "P9",
            pregunta: 'pregunta1',
            r1:{
                imagen:'respuesta1',
                Respuesta:false
            },
            r2:{
                imagen:'respuesta1',
                Respuesta:true
            },
            r3:{
                imagen:'respuesta1',
                Respuesta:false
            },
            escena: 'escena9',
            finBien:'respuesta2',
            finmal: 'respuesta1'

        }
        this.p10 = {
            name: "P10",
            pregunta: 'pregunta1',
            r1:{
                imagen:'respuesta1',
                Respuesta:false
            },
            r2:{
                imagen:'respuesta1',
                Respuesta:true
            },
            r3:{
                imagen:'respuesta1',
                Respuesta:false
            },
            escena: 'escena10',
            finBien:'respuesta2',
            finmal: 'respuesta1'

        }
        this.p11 = {
            name: "P11",
            pregunta: 'pregunta3',
            r1:{
                imagen:'respuesta1',
                Respuesta:false
            },
            r2:{
                imagen:'respuesta1',
                Respuesta:true
            },
            r3:{
                imagen:'respuesta1',
                Respuesta:false
            },
            escena: 'escena11',
            finBien:'respuesta2',
            finmal: 'respuesta1'

        }
        this.p12 = {
            name: "P12",
            pregunta: 'pregunta1',
            r1:{
                imagen:'respuesta1',
                Respuesta:false
            },
            r2:{
                imagen:'respuesta1',
                Respuesta:true
            },
            r3:{
                imagen:'respuesta1',
                Respuesta:false
            },
            escena: 'escena12',
            finBien:'respuesta2',
            finmal: 'respuesta1'

        }
        this.p13 = {
            name: "P13",
            pregunta: 'pregunta12',
            r1:{
                imagen:'respuesta1',
                Respuesta:false
            },
            r2:{
                imagen:'respuesta1',
                Respuesta:true
            },
            r3:{
                imagen:'respuesta1',
                Respuesta:false
            },
            escena: 'escena13',
            finBien:'respuesta2',
            finmal: 'respuesta1'
        }
        this.p14 = {
            name: "P14",
            pregunta: 'pregunta12',
            r1:{
                imagen:'respuesta1',
                Respuesta:false
            },
            r2:{
                imagen:'respuesta1',
                Respuesta:true
            },
            r3:{
                imagen:'respuesta1',
                Respuesta:false
            },
            escena: 'escena14',
            finBien:'respuesta2',
            finmal: 'respuesta1'
        }
        this.p15 = {
            name: "P15",
            pregunta: 'pregunta12',
            r1:{
                imagen:'respuesta1',
                Respuesta:false
            },
            r2:{
                imagen:'respuesta1',
                Respuesta:true
            },
            r3:{
                imagen:'respuesta1',
                Respuesta:false
            },
            escena: 'escena15',
            finBien:'respuesta2',
            finmal: 'respuesta1'
        }
    }
}
        
    
