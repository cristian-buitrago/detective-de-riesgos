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

        this.hud = this.add.container(0,0);

        this.preguntas = this.add.container(0,0);

        this.Recomendacion = this.add.container(0,0);

        this.alert = this.add.container(0,0);

        this.end = this.add.container(0,0);

        this.currentquestion;

        this.puntaje = 0;
        this.bien = 0;
        this.errores = 0;
        this.tiempo = 0;
        this.cronometro = 0;
        this.timer;
        this.crono;

        this.CantidadPreguntas = 0;


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
        this.map.add(this.edificio6);
        this.map.add(this.edificio3);
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
        this.map.add(this.edificio7);
        this.map.add(this.edificio2);
        this.map.add(this.edificio1);


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
        this.Recurso46 = this.add.image(3600,2950,'Recurso32').setOrigin(0,0);
        this.Recurso47 = this.add.image(5020,2770,'Recurso33').setOrigin(0,0);



        this.Recurso31 = this.add.image(3077,850,'Recurso31').setOrigin(0,0);
        this.Recurso31.alpha = 0.01;
        this.Recurso31.setInteractive(new Phaser.Geom.Rectangle(0, 0, 195, 195), Phaser.Geom.Rectangle.Contains);
        this.Recurso31.on('pointerup', () => {this.SoundAlerta.play()});
        this.Recurso31.on('pointerup', () => { this. showPregunta(0);});

        this.Recurso32 = this.add.image(1009,1840,'Recurso31').setOrigin(0,0);
        this.Recurso32.alpha = 0.01;
        this.Recurso32.setInteractive();
        this.Recurso32.on('pointerup', () => {this.SoundAlerta.play()});
        this.Recurso32.on('pointerup', () => { this. showPregunta(1);});

        this.Recurso33 = this.add.image(2469,2265,'Recurso31').setOrigin(0,0);
        this.Recurso33.alpha = 0.01;
        this.Recurso33.setInteractive();
        this.Recurso33.on('pointerup', () => {this.SoundAlerta.play()});
        this.Recurso33.on('pointerup', () => { this. showPregunta(2);});

        this.Recurso34 = this.add.image(2913,2938,'Recurso31').setOrigin(0,0);
        this.Recurso34.alpha = 0.01;
        this.Recurso34.setInteractive();
        this.Recurso34.on('pointerup', () => {this.SoundAlerta.play()});
        this.Recurso34.on('pointerup', () => { this. showPregunta(3);});

        this.Recurso35 = this.add.image(3013,1603,'Recurso31').setOrigin(0,0);
        this.Recurso35.alpha = 0.01;
        this.Recurso35.setInteractive();
        this.Recurso35.on('pointerup', () => {this.SoundAlerta.play()});
        this.Recurso35.on('pointerup', () => { this. showPregunta(4);});

        this.Recurso36 = this.add.image(3320,1503,'Recurso31').setOrigin(0,0);
        this.Recurso36.alpha = 0.01;
        this.Recurso36.setInteractive();
        this.Recurso36.on('pointerup', () => {this.SoundAlerta.play()});
        this.Recurso36.on('pointerup', () => { this. showPregunta(5);});

        this.Recurso37 = this.add.image(3739,2080,'Recurso31').setOrigin(0,0);
        this.Recurso37.alpha = 0.01;
        this.Recurso37.setInteractive();
        this.Recurso37.on('pointerup', () => {this.SoundAlerta.play()});
        this.Recurso37.on('pointerup', () => { this. showPregunta(6);});

        this.Recurso38 = this.add.image(3950,2399,'Recurso31').setOrigin(0,0);
        this.Recurso38.alpha = 0.01;
        this.Recurso38.setInteractive();
        this.Recurso38.on('pointerup', () => {this.SoundAlerta.play()});
        this.Recurso38.on('pointerup', () => { this. showPregunta(7);});

        this.Recurso39 = this.add.image(2979,2177,'Recurso31').setOrigin(0,0);
        this.Recurso39.alpha = 0.01;
        this.Recurso39.setInteractive();
        this.Recurso39.on('pointerup', () => {this.SoundAlerta.play()});
        this.Recurso39.on('pointerup', () => { this. showPregunta(8);});

        this.Recurso40 = this.add.image(4643,2268,'Recurso31').setOrigin(0,0);
        this.Recurso40.alpha = 0.01;
        this.Recurso40.setInteractive();
        this.Recurso40.on('pointerup', () => {this.SoundAlerta.play()});
        this.Recurso40.on('pointerup', () => { this. showPregunta(9);});

        this.Recurso41 = this.add.image(6253,2156,'Recurso31').setOrigin(0,0);
        this.Recurso41.alpha = 0.01;
        this.Recurso41.setInteractive();
        this.Recurso41.on('pointerup', () => {this.SoundAlerta.play()});
        this.Recurso41.on('pointerup', () => { this. showPregunta(10);});

        this.Recurso42 = this.add.image(4793,1942,'Recurso31').setOrigin(0,0);
        this.Recurso42.alpha = 0.01;
        this.Recurso42.setInteractive();
        this.Recurso42.on('pointerup', () => {this.SoundAlerta.play()});
        this.Recurso42.on('pointerup', () => { this. showPregunta(11);});

        this.Recurso43 = this.add.image(5255,1922,'Recurso31').setOrigin(0,0);
        this.Recurso43.alpha = 0.01;
        this.Recurso43.setInteractive();
        this.Recurso43.on('pointerup', () => {this.SoundAlerta.play()});
        this.Recurso43.on('pointerup', () => { this. showPregunta(12);});

        this.Recurso44 = this.add.image(4941,1461,'Recurso31').setOrigin(0,0);
        this.Recurso44.alpha = 0.01;
        this.Recurso44.setInteractive();
        this.Recurso44.on('pointerup', () => {this.SoundAlerta.play()});
        this.Recurso44.on('pointerup', () => { this. showPregunta(13);});

        this.Recurso45 = this.add.image(3830,1228,'Recurso31').setOrigin(0,0);
        this.Recurso45.alpha = 0.01;
        this.Recurso45.setInteractive();
        this.Recurso45.on('pointerup', () => {this.SoundAlerta.play()});
        this.Recurso45.on('pointerup', () => { this. showPregunta(14);});
        this.alertArray = [this.Recurso31,this.Recurso32,this.Recurso33,this.Recurso34,this.Recurso35,this.Recurso36,this.Recurso37,this.Recurso38,this.Recurso39,this.Recurso40,this.Recurso41,this.Recurso42,this.Recurso43,this.Recurso44,this.Recurso45]


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
        this.map.add(this.Recurso47);



        //////////////////////////////////////
        //inicio

        var backGroundIni =  this.add.graphics();
        backGroundIni.fillStyle(0x000000, 0.7);
        backGroundIni.fillRect(0, 0, 1920, 1080);

        backGroundIni.setInteractive(new Phaser.Geom.Rectangle(0, 0, 1920, 1080), Phaser.Geom.Rectangle.Contains);

        this.inicio1 = this.add.image(1326,-37,'inicio1').setOrigin(0,0);
        this.boton1 = this.add.image(1482,634,'inicio2').setOrigin(0,0);
        this.boton1.setInteractive();
        this.boton1.on('pointerup', () => {this.SoundVolver.play()});
        this.boton1.on('pointerup', () => { this.animaIn(this.instrucciones)});

        this.inicio.add(backGroundIni);

        this.inicio.add(this.inicio1);
        this.inicio.add(this.boton1);


        ///////////////////////////////////////
        //instrucciones

        var backGroundIns =  this.add.graphics();
        backGroundIns.fillStyle(0x000000, 0.7);
        backGroundIns.fillRect(0, 0, 1920, 1080);

        backGroundIns.setInteractive(new Phaser.Geom.Rectangle(0, 0, 1920, 1080), Phaser.Geom.Rectangle.Contains);

        this.elemento1 = this.add.image(1273,-37,'instrucciones1').setOrigin(0,0);
        this.boton2 = this.add.image(1480,867,'instrucciones2').setOrigin(0,0);
        this.boton2.setInteractive();
        this.boton2.on('pointerup', () => {this.SoundVolver.play()});
        this.boton2.on('pointerup', () => {
            this.setup();
            this.VerLupa = true;
            this.header.visible = true;
            this.hud.visible = true;
            this.timer = this.time.addEvent({
                    delay: 1000,                // ms
                    callback: () =>{this.tiempo ++},
                    //args: [],
                    loop: true
            });
        });

        this.instrucciones.add(backGroundIns);

        this.instrucciones.add(this.elemento1);
        this.instrucciones.add(this.boton2);
        //this.instrucciones.add(this.lupa1);



        //hud
        this.hud.add(this.add.image(10,145,'puntaje_1').setOrigin(0,0));
        this.puntajeText = this.add.text(170, 200, '9999', { fontFamily: 'Arial', fontSize: 42, color: '#000000' });
         this.hud.add(this.puntajeText);
        this.hud.add(this.add.image(10,295,'tiempo').setOrigin(0,0));
        this.tiempoText = this.add.text(170, 355, '9999', { fontFamily: 'Arial', fontSize: 32, color: '#000000' });
        this.hud.add(this.add.image(10,460,'riesgos').setOrigin(0,0));
        this.hud.add(this.tiempoText);
        this.riskText = this.add.text(70, 655, '99', { fontFamily: 'Arial', fontSize: 32, color: '#000000' });
        this.hud.add(this.riskText);
        this.goodText = this.add.text(80, 720, '99', { fontFamily: 'Arial', fontSize: 32, color: '#000000' });
        this.hud.add(this.goodText);
        this.badText = this.add.text(80, 795, '99', { fontFamily: 'Arial', fontSize: 32, color: '#000000' });
        this.hud.add(this.badText);





        ///////////////////////////////////////
        //preguntas

        var backGroundP =  this.add.graphics();
        backGroundP.fillStyle(0x000000, 0.7);
        backGroundP.fillRect(0, 0, 1920, 1080);

        backGroundP.setInteractive(new Phaser.Geom.Rectangle(0, 0, 1920, 1080), Phaser.Geom.Rectangle.Contains);

        this.FondoPregunta = this.add.image(1275,-36,'parte1').setOrigin(0,0);
        //this.boton = this.add.image(1500,879,'parte3').setOrigin(0,0);



        this.textoPregunta = this.add.image(1658,242,'parte4')
        this.respuestaA = this.add.image(1490,557,'respuesta1').setOrigin(0,0);
        this.respuestaB = this.add.image(1490,686,'respuesta1').setOrigin(0,0);
        this.respuestaC = this.add.image(1490,811,'respuesta1').setOrigin(0,0);
        this.lupa = this.add.image(391,274,'escena16').setOrigin(0.0);
        this.circulo = this.add.image(434,317,'escena14').setOrigin(0.0);
        this.btBack = this.add.image(0,930,'volver').setOrigin(0.0);


        this.respuestaA.setInteractive(new Phaser.Geom.Rectangle(0, 0, 400, 78), Phaser.Geom.Rectangle.Contains);
        this.respuestaA.on('pointerup', () => { this.responder(this.arrayPreguntas[this.currentquestion].r1.Respuesta);});
        this.respuestaB.setInteractive(new Phaser.Geom.Rectangle(0, 0, 400, 78), Phaser.Geom.Rectangle.Contains);
        this.respuestaB.on('pointerup', () => { this.responder(this.arrayPreguntas[this.currentquestion].r2.Respuesta);});
        this.respuestaC.setInteractive(new Phaser.Geom.Rectangle(0, 0, 400, 78), Phaser.Geom.Rectangle.Contains);
        this.respuestaC.on('pointerup', () => { this.responder(this.arrayPreguntas[this.currentquestion].r3.Respuesta);});

        this.btBack.setInteractive();
        this.btBack.on('pointerup', () => {this.SoundVolver.play()});
        this.btBack.on('pointerup', () => {this.preguntas.visible = false;this.VerLupa = true;this.crono.remove();this.cronometro = 0;});


        this.preguntas.add(backGroundP);
        this.preguntas.add(this.FondoPregunta);
        //this.preguntas.add(this.header);
        //this.preguntas.add(this.parte3);
        this.preguntas.add(this.textoPregunta);
        this.preguntas.add(this.respuestaA);
        this.preguntas.add(this.respuestaB);
        this.preguntas.add(this.respuestaC);
        this.preguntas.add(this.lupa);
        this.preguntas.add(this.circulo);
        this.preguntas.add(this.btBack);
        this.preguntas.add(this.add.image(1200,220,'tiempo2'));
        this.cronoText = this.add.text(1240, 202, '99', { fontFamily: 'Arial', fontSize: 42, color: '#000000' });

        this.OrdenarPreguntas();
        this.arrayPreguntas = [ this.p0 , this.p1, this.p2, this.p3, this.p5, this.p6, this.p7, this.p8, this.p9, this.p10, this.p11, this.p12, this.p13, this.p14, this.p4 ];

        ///////////////////////////////Recomendacion
        //

        var backGroundR =  this.add.graphics();
        backGroundR.fillStyle(0x000000, 0.7);
        backGroundR.fillRect(0, 0, 1920, 1080);

        backGroundR.setInteractive(new Phaser.Geom.Rectangle(0, 0, 1920, 1080), Phaser.Geom.Rectangle.Contains);
        this.SoundVolver = this.sound.add('SoundVolver');
        this.Soundmal = this.sound.add('mal');
        this.Soundbien = this.sound.add('bien');
        this.SoundAlerta = this.sound.add('alarma');




        //this.header2 = this.add.image(-14,-19,'parte2').setOrigin(0,0);
        this.fondo = this.add.image(1275,-36,'respuesfinBuenoFondo').setOrigin(0,0);
        this.textoPregunta2 = this.add.image(1658,242,'parte4')
        this.textoRecomendacion = this.add.image(1650,530,'respuesta2').setOrigin(0.5,0).setScale(0.8);
        this.elment = this.add.image(-15,170,'correcto').setOrigin(0,0);
        this.BotonBack = this.add.image(1510,940,'botonBien').setOrigin(0,0);
        this.BotonBack.setInteractive();
        this.BotonBack.on('pointerup', () => {this.SoundVolver.play()});
        this.BotonBack.on('pointerup', () => {
            if(this.CantidadPreguntas == 15){
                console.log("final");
                this.end.visible = true;
                 this.timer.paused = true;
                if(this.bien == 15){
                    this.Soundbien.play();
                    this.finalBien.visible = true;
                    this.finalMal.visible = false;
                    this.texto.visible = false;
                }else{
                    this.Soundmal.play();
                    this.finalBien.visible = false;
                    this.finalMal.visible = true;
                    this.texto.visible = true;
                    this.texto.setText(this.bien + '/10');
                }

            } else{
                this.Recomendacion.visible = false; this.VerLupa = true;
            }
        });

        this.Recomendacion.add(backGroundR);

        this.Recomendacion.add(this.fondo);
        //this.Recomendacion.add(this.header2);
        this.Recomendacion.add(this.elment);
        this.Recomendacion.add(this.textoPregunta2);
        this.Recomendacion.add(this.textoRecomendacion);
        this.Recomendacion.add(this.BotonBack);


        ////////////alerta
        this.fondoAlerta = this.add.image(0,100,'alerta').setOrigin(0,0);
        this.btAlerta = this.add.image(1555,140,'botonSolucion').setOrigin(0,0);
        this.alert.add(this.fondoAlerta);
        this.alert.add(this.btAlerta);

        this.btAlerta.setInteractive();
        this.btAlerta.on('pointerup', () => { this. showPregunta(this.currentquestion);});



        //////////////Final
        var backGroundF =  this.add.graphics();
        backGroundF.fillStyle(0x000000, 0.7);
        backGroundF.fillRect(0, 0, 1920, 1080);

        this.finalBien = this.add.image(960,760,'finBien');
        this.finalMal = this.add.image(960,760,'finMal')

        this.botonTerminar = this.add.image(960,860,'finBoton');
        this.botonTerminar.setInteractive();
        this.botonTerminar.on('pointerup', () => {this.SoundVolver.play()});
        this.botonTerminar.on('pointerup', () => { location.reload(); });




        this.texto = this.add.text(1060, 597, '10/10', { fontFamily: 'Arial', fontSize: 40, color: '#000000' }).setOrigin(0,0);




        this.end.add(backGroundF);
        this.end.add(this.finalBien);
        this.end.add(this.finalMal);
        this.end.add(this.botonTerminar);
        this.end.add(this.texto);




        /*var hitArea =  this.add.graphics();
        hitArea.fillStyle(0x000000, 0.7);
        hitArea.fillRect(-60, -60, 60,60);*/

        this.cursorLupa = this.add.container(0,0);


        this.lupa1 = this.add.image(0,0,'instrucciones3').setOrigin(0.5,0.5);
        this.lupa1.setScale(0.6,0.6);
        this.cursorLupa.add( this.lupa1);
        //this.cursorLupa.add( hitArea);
        this.VerLupa = false;
        //this.physics.world.enable(hitArea);

        //this.physics.add.overlap(this.lupa1, this.alertArray[0], () => { var temp = 0;console.log(temp); });


        /*this.physics.world.enable(this.alertArray[0]);
        this.physics.add.overlap(hitArea, this.alertArray[0], () =>{this.currentquestion = 0, this.alert.visible = true; });

        this.physics.world.enable(this.alertArray[1]);
        this.physics.add.overlap(hitArea, this.alertArray[1],() =>{this.currentquestion = 1, this.alert.visible = true; });

        this.physics.world.enable(this.alertArray[2]);
        this.physics.add.overlap(hitArea, this.alertArray[2], () =>{this.currentquestion = 2, this.alert.visible = true; });

        this.physics.world.enable(this.alertArray[4]);
        this.physics.add.overlap(hitArea, this.alertArray[4], () =>{this.currentquestion = 4, this.alert.visible = true; });

        this.physics.world.enable(this.alertArray[5]);
        this.physics.add.overlap(hitArea, this.alertArray[5], () =>{this.currentquestion = 5, this.alert.visible = true; });

        this.physics.world.enable(this.alertArray[6]);
        this.physics.add.overlap(hitArea, this.alertArray[6], () =>{this.currentquestion = 6, this.alert.visible = true; });

        this.physics.world.enable(this.alertArray[7]);
        this.physics.add.overlap(hitArea, this.alertArray[7], () =>{this.currentquestion = 7, this.alert.visible = true; });

        this.physics.world.enable(this.alertArray[8]);
        this.physics.add.overlap(hitArea, this.alertArray[8], () =>{this.currentquestion = 8, this.alert.visible = true; });

        this.physics.world.enable(this.alertArray[9]);
        this.physics.add.overlap(hitArea, this.alertArray[9], () =>{this.currentquestion = 9, this.alert.visible = true; });

        this.physics.world.enable(this.alertArray[10]);
        this.physics.add.overlap(hitArea, this.alertArray[10], () =>{this.currentquestion = 10, this.alert.visible = true; });

        this.physics.world.enable(this.alertArray[11]);
        this.physics.add.overlap(hitArea, this.alertArray[11], () =>{this.currentquestion = 11, this.alert.visible = true; });

        this.physics.world.enable(this.alertArray[12]);
        this.physics.add.overlap(hitArea, this.alertArray[12], () =>{this.currentquestion = 12, this.alert.visible = true; });

        this.physics.world.enable(this.alertArray[13]);
        this.physics.add.overlap(hitArea, this.alertArray[13], () =>{this.currentquestion = 13, this.alert.visible = true; });

        this.physics.world.enable(this.alertArray[14]);
        this.physics.add.overlap(hitArea, this.alertArray[14], () =>{this.currentquestion = 14, this.alert.visible = true; });*/

        this.header = this.add.image(-14,-19,'parte2').setOrigin(0,0);
        this.header.visible = false;
        this.hud.visible = false;
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
    update(){
        if(this.VerLupa == true){
            this.cursorLupa.x = this.input.x;
            this.cursorLupa.y = this.input.y;
        }
        this.cursorLupa.visible = this.VerLupa;

        this.puntajeText.setText(this.puntaje + '');
        this.tiempoText.setText(this.tiempo + ' seg');
        var preguntas = this.bien + this.errores
        this.riskText.setText(preguntas + '/' + this.arrayPreguntas.length);
        this.goodText.setText(this.bien + '');
        this.badText.setText(this.errores + '');
        var temp = 20 -this.cronometro;
        this.cronoText.setText(temp + '');
    }

    setup(){
        console.log('setup');
        this.inicio.visible = false;
        this.instrucciones.visible = false;
        this.preguntas.visible = false;
        this.Recomendacion.visible = false;
        this.alert.visible = false;
        this.end.visible = false;



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
    ShowAlerta(){

    }
    showPregunta(index){
        console.log("pregunta = " + this.arrayPreguntas[index].name);
        this.crono = this.time.addEvent({
            delay: 1000,                // ms
            callback: () =>{
                this.cronometro ++;
                if(this.cronometro == 20){
                    this.responder(false);
                }

            },
            loop: true
        });
        this.VerLupa = false;
        this.currentquestion = index;
        this.animaIn(this.preguntas);
        //this.parte1 = Fondo Pregunta
        //this.arrayPreguntas
        //this.textoPregunta
        this.textoPregunta.setTexture(this.arrayPreguntas[index].pregunta);
        this.respuestaA.setTexture(this.arrayPreguntas[index].r1.imagen);
        this.respuestaB.setTexture(this.arrayPreguntas[index].r2.imagen);
        this.respuestaC.setTexture(this.arrayPreguntas[index].r3.imagen);
        console.log("escena");
        console.log(this.arrayPreguntas[index].escena);
        this.circulo.setTexture(this.arrayPreguntas[index].escena);

    }
    responder(Respuesta){

        this.CantidadPreguntas ++;
        this.crono.remove();
        this.cronometro = 0;

        if(Respuesta == true)
        {
            this.Soundbien.play();
            this.puntaje += 10;
            this.bien ++;
            this.fondo.setTexture('respuesfinBuenoFondo');
            this.elment.setTexture('correcto');
            this.BotonBack.setTexture('botonBien');

        }else{
            this.errores ++;
            this.puntaje -= 10;
            this.Soundmal.play();
            this.fondo.setTexture('respuesfinMaloFondo');
            this.elment.setTexture('incorrecto');
            this.BotonBack.setTexture('botonMal');

        }

        if(this.puntaje < 0){
            this.puntaje = 0;
        }

        this.textoPregunta2.setTexture(this.arrayPreguntas[this.currentquestion].pregunta);

        this.textoRecomendacion.setTexture(this.arrayPreguntas[this.currentquestion].Recomendacion);

        this.arrayPreguntas[this.currentquestion].flag.visible = false;



        this.preguntas.visible = false,
        this.Recomendacion.visible = true;

    }
    OrdenarPreguntas(){
        this.p0 = {
            name: "P0",
            pregunta: 'pregunta4',
            r2:{
                imagen:'respuesta4a',
                Respuesta:true
            },
            r1:{
                imagen:'respuesta4b',
                Respuesta:false
            },
            r3:{
                imagen:'respuesta4c',
                Respuesta:false
            },
            escena: 'escena8',
            Recomendacion:'Recomendacion4',
            flag:this.Recurso31

        }
        this.p1 = {
            name: "P1",
            pregunta: 'pregunta1',
            r3:{
                imagen:'respuesta1a',
                Respuesta:true
            },
            r1:{
                imagen:'respuesta1b',
                Respuesta:false
            },
            r2:{
                imagen:'respuesta1c',
                Respuesta:false
            },
            escena: 'escena15',
            Recomendacion:'Recomendacion1',
            flag:this.Recurso32
        }
        this.p2 = {
            name: "P2",
            pregunta: 'pregunta6',
            r1:{
                imagen:'respuesta6a',
                Respuesta:false
            },
            r3:{
                imagen:'respuesta6b',
                Respuesta:true
            },
            r2:{
                imagen:'respuesta6c',
                Respuesta:false
            },
            escena: 'escena14',
            Recomendacion:'Recomendacion6',
            flag:this.Recurso33
        }
        this.p3 = {
            name: "P3",
            pregunta: 'pregunta11',
            r3:{
                imagen:'respuesta11a',
                Respuesta:false
            },
            r2:{
                imagen:'respuesta11b',
                Respuesta:true
            },
            r1:{
                imagen:'respuesta11c',
                Respuesta:false
            },
            escena: 'escena13',
            Recomendacion:'Recomendacion11',
            flag:this.Recurso34

        }
        this.p4 = {
            name: "P4",
            pregunta: 'pregunta13',
            r2:{
                imagen:'respuesta13a',
                Respuesta:false
            },
            r1:{
                imagen:'respuesta13b',
                Respuesta:true
            },
            r3:{
                imagen:'respuesta13c',
                Respuesta:false
            },
            escena: 'escena3',
            Recomendacion:'Recomendacion13',
            flag:this.Recurso45

        }
        this.p5 = {
            name: "P5",
            pregunta: 'pregunta14',
            r2:{
                imagen:'respuesta14a',
                Respuesta:false
            },
            r3:{
                imagen:'respuesta14b',
                Respuesta:true
            },
            r1:{
                imagen:'respuesta14c',
                Respuesta:false
            },
            escena: 'escena2',
            Recomendacion:'Recomendacion14',
            flag: this.Recurso35

        }
        this.p6 = {
            name: "P6",
            pregunta: 'pregunta9',
            r1:{
                imagen:'respuesta9a',
                Respuesta:false
            },
            r3:{
                imagen:'respuesta9b',
                Respuesta:true
            },
            r2:{
                imagen:'respuesta9c',
                Respuesta:false
            },
            escena: 'escena5',
            Recomendacion:'Recomendacion9',
            flag: this.Recurso36

        }
        this.p7 = {
            name: "P7",
            pregunta: 'pregunta10',
            r1:{
                imagen:'respuesta10a',
                Respuesta:false
            },
            r2:{
                imagen:'respuesta10b',
                Respuesta:true
            },
            r3:{
                imagen:'respuesta10c',
                Respuesta:false
            },
            escena: 'escena4',
            Recomendacion:'Recomendacion10',
            flag: this.Recurso37

        }
        this.p8 = {
            name: "P8",
            pregunta: 'pregunta2',
            r2:{
                imagen:'respuesta2a',
                Respuesta:false
            },
            r1:{
                imagen:'respuesta2b',
                Respuesta:true
            },
            r3:{
                imagen:'respuesta2c',
                Respuesta:false
            },
            escena: 'escena10',
            Recomendacion:'Recomendacion2',
            flag: this.Recurso38

        }
        this.p9 = {
            name: "P9",
            pregunta: 'pregunta5',
            r3:{
                imagen:'respuesta5a',
                Respuesta:false
            },
            r2:{
                imagen:'respuesta5b',
                Respuesta:true
            },
            r1:{
                imagen:'respuesta5c',
                Respuesta:false
            },
            escena: 'escena7',
            Recomendacion:'Recomendacion5',
            flag: this.Recurso39

        }
        this.p10 = {
            name: "P10",
            pregunta: 'pregunta7',
            r2:{
                imagen:'respuesta7a',
                Respuesta:false
            },
            r3:{
                imagen:'respuesta7b',
                Respuesta:true
            },
            r1:{
                imagen:'respuesta7c',
                Respuesta:false
            },
            escena: 'escena11',
            Recomendacion:'Recomendacion7',
            flag: this.Recurso40

        }
        this.p11 = {
            name: "P11",
            pregunta: 'pregunta15',
            r3:{
                imagen:'respuesta15a',
                Respuesta:false
            },
            r1:{
                imagen:'respuesta15b',
                Respuesta:true
            },
            r2:{
                imagen:'respuesta15c',
                Respuesta:false
            },
            escena: 'escena1',
            Recomendacion:'Recomendacion15',
            flag: this.Recurso41

        }
        this.p12 = {
            name: "P12",
            pregunta: 'pregunta3',
            r3:{
                imagen:'respuesta3a',
                Respuesta:false
            },
            r2:{
                imagen:'respuesta3b',
                Respuesta:true
            },
            r1:{
                imagen:'respuesta3c',
                Respuesta:false
            },
            escena: 'escena9',
            Recomendacion:'Recomendacion3',
            flag: this.Recurso42

        }
        this.p13 = {
            name: "P13",
            pregunta: 'pregunta12',
            r2:{
                imagen:'respuesta12a',
                Respuesta:false
            },
            r3:{
                imagen:'respuesta12b',
                Respuesta:true
            },
            r1:{
                imagen:'respuesta12c',
                Respuesta:false
            },
            escena: 'escena12',
            Recomendacion:'Recomendacion12',
            flag: this.Recurso43
        }
        this.p14 = {
            name: "P14",
            pregunta: 'pregunta8',
            r3:{
                imagen:'respuesta8a',
                Respuesta:false
            },
            r2:{
                imagen:'respuesta8b',
                Respuesta:true
            },
            r1:{
                imagen:'respuesta8c',
                Respuesta:false
            },
            escena: 'escena6',
            Recomendacion:'Recomendacion8',
            flag: this.Recurso44
        }
    }
}


