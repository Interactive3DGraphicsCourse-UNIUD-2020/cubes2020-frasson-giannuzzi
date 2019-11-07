//return array with height data from img, taken from: http://danni-three.blogspot.it/2013/09/threejs-heightmaps.html
function getHeightData(img, scale) {

    if (scale == undefined) scale = 1;


    var canvas = document.createElement('canvas');
    canvas.width = img.width;
    canvas.height = img.height;
    var context = canvas.getContext('2d');

    var size = img.width * img.height;
    var data = new Float32Array(size);

    context.drawImage(img, 0, 0);

    for (var i = 0; i < size; i++) {
        data[i] = 0
    }

    var imgd = context.getImageData(0, 0, img.width, img.height);
    var pix = imgd.data;

    var j = 0;
    for (var i = 0; i < pix.length; i += 4) {

        var all = pix[i] + pix[i + 1] + pix[i + 2];  // all is in range 0 - 255*3
        
        data[j++] = Math.ceil(scale * all / 3);
    }
    return data;
}

//Loader per tutte le immagini
function Loader() {

    var imgLoader = new THREE.ImageLoader();

    //PASSO AL METODO load CHIAMATO SU ImageLoader IL PATH/URL
    var img = imgLoader.load(// resource URL
        "textures/heightmap4.png",

        // onLoad callback, FUNZIONI CHIAMATE APPENA DOPO IL LOAD
        function (image) {
            // use the image, e.g. draw part of it on a canvas
            //get height data from img
            data1 = getHeightData(image, 0.1); // QUI RICHIAMO getHeighData PASSANDOGLI image CHE è STATA APPENA CARICATA
            //MI SALVO HEIGH E WIDTH CHE POI USO COME LIMITI PER IL FOR
            groundNumBoxX = img.width;
            groundNumBoxZ = img.height;
            data = data1;
            //console.log('data1:' + data1);
            //loadedHeighMap = true; //ATTIVO IL FLAG CHE NEL RENDER FA AVVIARE IL BUILDER
            // Start();
        },

        // onProgress callback currently not supported, FORSE QUESTA NON FUNZIONA MA SERVE PER CHIAMARE METODI DURANTE IL LOAD
        undefined,

        // onError callback, SE SI ROMPE QUALCOSA DURANTE LA LOAD DA ERRORE
        function () {
            console.error('An error happened.');
        }
    );

    //PASSO AL METODO load CHIAMATO SU ImageLoader IL PATH/URL
    var img2 = imgLoader.load(// resource URL
        "textures/heightmap3.png",

        // onLoad callback, FUNZIONI CHIAMATE APPENA DOPO IL LOAD
        function (image) {
            // use the image, e.g. draw part of it on a canvas
            //get height data from img
            data2 = getHeightData(image, 0.1); // QUI RICHIAMO getHeighData PASSANDOGLI image CHE è STATA APPENA CARICATA
            //console.log('data2:' + data2);
            //MI SALVO HEIGH E WIDTH CHE POI USO COME LIMITI PER IL FOR
            //groundNumBoxX = img2.width;
            //groundNumBoxZ = img2.height;
            loadedHeighMap = true; //ATTIVO IL FLAG CHE NEL RENDER FA AVVIARE IL BUILDER
            // Start();
        },

        // onProgress callback currently not supported, FORSE QUESTA NON FUNZIONA MA SERVE PER CHIAMARE METODI DURANTE IL LOAD
        undefined,

        // onError callback, SE SI ROMPE QUALCOSA DURANTE LA LOAD DA ERRORE
        function () {
            console.error('An error happened.');
        }
    );

    //PASSO AL METODO load CHIAMATO SU ImageLoader IL PATH/URL
    var img3 = imgLoader.load(// resource URL
        "textures/heightmap5.png",

        // onLoad callback, FUNZIONI CHIAMATE APPENA DOPO IL LOAD
        function (image) {
            // use the image, e.g. draw part of it on a canvas
            //get height data from img
            data3 = getHeightData(image, 0.1); // QUI RICHIAMO getHeighData PASSANDOGLI image CHE è STATA APPENA CARICATA
            //MI SALVO HEIGH E WIDTH CHE POI USO COME LIMITI PER IL FO
            //console.log('data1:' + data1);
            //loadedHeighMap = true; //ATTIVO IL FLAG CHE NEL RENDER FA AVVIARE IL BUILDER
            // Start();
        },

        // onProgress callback currently not supported, FORSE QUESTA NON FUNZIONA MA SERVE PER CHIAMARE METODI DURANTE IL LOAD
        undefined,

        // onError callback, SE SI ROMPE QUALCOSA DURANTE LA LOAD DA ERRORE
        function () {
            console.error('An error happened.');
        }
    );
    
    //PASSO AL METODO load CHIAMATO SU ImageLoader IL PATH/URL
    var img2 = imgLoader.load(// resource URL
        "textures/heightmap6.png",

        // onLoad callback, FUNZIONI CHIAMATE APPENA DOPO IL LOAD
        function (image) {
            // use the image, e.g. draw part of it on a canvas
            //get height data from img
            data4 = getHeightData(image, 0.1); // QUI RICHIAMO getHeighData PASSANDOGLI image CHE è STATA APPENA CARICATA
            //console.log('data2:' + data2);
            //MI SALVO HEIGH E WIDTH CHE POI USO COME LIMITI PER IL FOR
            //groundNumBoxX = img2.width;
            //groundNumBoxZ = img2.height;
            loadedHeighMap = true; //ATTIVO IL FLAG CHE NEL RENDER FA AVVIARE IL BUILDER
            // Start();
        },

        // onProgress callback currently not supported, FORSE QUESTA NON FUNZIONA MA SERVE PER CHIAMARE METODI DURANTE IL LOAD
        undefined,

        // onError callback, SE SI ROMPE QUALCOSA DURANTE LA LOAD DA ERRORE
        function () {
            console.error('An error happened.');
        }
    );

    //PASSO AL METODO load CHIAMATO SU ImageLoader IL PATH/URL
    var img2 = imgLoader.load(// resource URL
        "textures/heightmap7.png",

        // onLoad callback, FUNZIONI CHIAMATE APPENA DOPO IL LOAD
        function (image) {
            // use the image, e.g. draw part of it on a canvas
            //get height data from img
            data5 = getHeightData(image, 0.1); // QUI RICHIAMO getHeighData PASSANDOGLI image CHE è STATA APPENA CARICATA
            //console.log('data2:' + data2);
            //MI SALVO HEIGH E WIDTH CHE POI USO COME LIMITI PER IL FOR
            //groundNumBoxX = img2.width;
            //groundNumBoxZ = img2.height;
            loadedHeighMap = true; //ATTIVO IL FLAG CHE NEL RENDER FA AVVIARE IL BUILDER
            // Start();
        },

        // onProgress callback currently not supported, FORSE QUESTA NON FUNZIONA MA SERVE PER CHIAMARE METODI DURANTE IL LOAD
        undefined,

        // onError callback, SE SI ROMPE QUALCOSA DURANTE LA LOAD DA ERRORE
        function () {
            console.error('An error happened.');
        }
    );
}

//funzione che replica il mapping di processing
function map_range(value, low1, high1, low2, high2) {
    return low2 + (high2 - low2) * (value - low1) / (high1 - low1);
}

//builder semplice per uno strato di cubetti senza altezza
//input: cubebox = THREE.Object3D container dei cubi di primo livello
function Builder_sample(cubebox) {
    var i, j, k;// i RIGHE, j COLONNE, k indice per tenere il conto e scorrere l'array delle altezze data
    k = 0;
    //cube = new THREE.Mesh(geometry, new THREE.MeshPhongMaterial({ color: 0xff0000 }));
    var deep, diff;
    for (i = 0; i < groundNumBoxX; i++) {
        for (j = 0; j < groundNumBoxZ; j++) {

            cube = new THREE.Mesh(geometry, new THREE.MeshPhongMaterial({ color: 0xf00f0, shininess: 97, specular: 0x20202 }));
            cube.position.x = i;
            cube.position.z = j;

            var c = g = Math.floor(map_range(data[k], Math.min.apply(Math, data), Math.max.apply(Math, data), 0, 255));
            c = (c.toString(16).length < 2 ? "0" : "") + c.toString(16);
            cube.material.color.setHex("0X" + c + "" + c + "" + c);

            cubebox.add(cube.clone());

            k++;
        }
    }

}

//builder con flag (first) se true istanzia i cubi di primo livello altrimenti solo quelli di profondità
//input: First = flag true per i cubi di primo livello false altrimenti
//input: data = array con le altezze
//input: cubebox = THREE.Object3D container dei cubi di primo livello
function Builder(first, data, cubebox) {
    var i, j, k, n;// i RIGHE, j COLONNE, k indice per tenere il conto e scorrere l'array delle altezze data
    k = 0;
    n = 0;
    //cube = new THREE.Mesh(geometry, new THREE.MeshPhongMaterial({ color: 0xff0000 }));
    var deep, diff, min;
    min = Math.min.apply(Math, data);
    cube = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({ color: 0x333333 }));
    for (i = 0; i < groundNumBoxX; i++) {
        for (j = 0; j < groundNumBoxZ; j++) {

            cube = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({ color: 0x333333 }));
            line = new THREE.Line(geometry, new THREE.MeshBasicMaterial({ color: 0xff2299 }));
            line.position.x = 0;
            line.position.z = 0;
            cube.position.x = i;
            cube.position.z = j;

            //cube.position.y = data[k];
            var c = g = Math.floor(map_range(data[k], Math.min.apply(Math, data), Math.max.apply(Math, data), 0, 255));

            c = (c.toString(16).length < 2 ? "0" : "") + c.toString(16);
            cube.material.color.setHex("0X" + c + "" + c + "" + c);
            //cube.add(line.clone());
            if (first) {
                cubebox.add(cube.clone());

            } else {
                cubebox.children[k].material.color.setHex("0X" + c + "" + c + "" + c);
            }

            if(j == (groundNumBoxZ-1)){
                deep = Math.min(
                    isNaN(data[(groundNumBoxX * (i - 1)) + (j - 1)]) ? 200 : data[(groundNumBoxX * (i - 1)) + (j - 1)],
                    isNaN(data[(groundNumBoxX * (i - 1)) + (j)]) ? 200 : data[(groundNumBoxX * (i - 1)) + (j)],
                    isNaN(data[(groundNumBoxX * (i)) + (j - 1)]) ? 200 : data[(groundNumBoxX * (i)) + (j - 1)],
                    isNaN(data[(groundNumBoxX * (i + 1)) + (j - 1)]) ? 200 : data[(groundNumBoxX * (i + 1)) + (j - 1)],
                    isNaN(data[(groundNumBoxX * (i + 1)) + (j)]) ? 200 : data[(groundNumBoxX * (i + 1)) + (j)],
                    
                );
            }
            else if(j == 0){
                deep = Math.min(
                    isNaN(data[(groundNumBoxX * (i - 1)) + (j)]) ? 200 : data[(groundNumBoxX * (i - 1)) + (j)],
                    isNaN(data[(groundNumBoxX * (i - 1)) + (j + 1)]) ? 200 : data[(groundNumBoxX * (i - 1)) + (j + 1)],
                    isNaN(data[(groundNumBoxX * (i)) + (j + 1)]) ? 200 : data[(groundNumBoxX * (i)) + (j + 1)],
                    isNaN(data[(groundNumBoxX * (i + 1)) + (j)]) ? 200 : data[(groundNumBoxX * (i + 1)) + (j)],
                    isNaN(data[(groundNumBoxX * (i + 1)) + (j + 1)]) ? 200 : data[(groundNumBoxX * (i + 1)) + (j + 1)]
                );
            }
            else {

                deep = Math.min(
                    isNaN(data[(groundNumBoxX * (i - 1)) + (j - 1)]) ? 200 : data[(groundNumBoxX * (i - 1)) + (j - 1)],
                    isNaN(data[(groundNumBoxX * (i - 1)) + (j)]) ? 200 : data[(groundNumBoxX * (i - 1)) + (j)],
                    isNaN(data[(groundNumBoxX * (i - 1)) + (j + 1)]) ? 200 : data[(groundNumBoxX * (i - 1)) + (j + 1)],
                    isNaN(data[(groundNumBoxX * (i)) + (j - 1)]) ? 200 : data[(groundNumBoxX * (i)) + (j - 1)],
                    isNaN(data[(groundNumBoxX * (i)) + (j + 1)]) ? 200 : data[(groundNumBoxX * (i)) + (j + 1)],
                    isNaN(data[(groundNumBoxX * (i + 1)) + (j - 1)]) ? 200 : data[(groundNumBoxX * (i + 1)) + (j - 1)],
                    isNaN(data[(groundNumBoxX * (i + 1)) + (j)]) ? 200 : data[(groundNumBoxX * (i + 1)) + (j)],
                    isNaN(data[(groundNumBoxX * (i + 1)) + (j + 1)]) ? 200 : data[(groundNumBoxX * (i + 1)) + (j + 1)]
                );
            }

            //DEBUGG
            /*
            if (i == 0 || j == 0 || i == groundNumBoxX - 1 || j == groundNumBoxZ - 1) {
                console.log(isNaN(deep));
            }*/
            if (data[k] > deep) {
                diff = Math.ceil(data[k] - deep);
                //console.log(Math.ceil(diff));

                for (m = 0; m < diff; m++) {
                    if(diff > 4){
                        console.log("i: "+i+"j: "+j);
                    }
                    cubett = cube.clone();
                    cubett.position.x = 0;
                    cubett.position.z = 0;
                    cubett.position.y = 0 - 1 - m;
                    //cubett.material.color.setHex("0X" + c + c + c);
                    cubebox.children[k].add(cubett);

                }

            }


            k++;
        }
    }
}

//Fun per eliminare tutti i figli dei cubi di primo livello
//input: cubebox = THREE.Object3D container dei cubi di primo livello
//input: groundNumBoxX/groundNumBoxZ int per la dimensione altezza/larghezza dell'immagine (numero di cubi)
function kill_child(cubebox, groundNumBoxX, groundNumBoxZ) {
    var k = 0;
    for (k = 0; k < groundNumBoxX * groundNumBoxZ; k++) {
        if (cubebox.children[k].children.length > 0) {

            for (n = cubebox.children[k].children.length - 1; n >= 0; n--) {
                cubebox.children[k].remove(cubebox.children[k].children[n]);
            }
        }
    }
    console.log('done');
}


//Funzione per cambiare l'altezza dei cubi di 1 ad ogni ciclo
//input: cubebox = THREE.Object3D container dei cubi di primo livello
//input: data = array con le altezze
//input: upOrDown = flag true per mandare i cubi su, false per mandarli giù
function changeHeigh(cubebox, data, upOrDown) {
    var o = 0;
    var done = true;
    cubebox.children.forEach(element => {

        if (element.position.y < data[o] && upOrDown) {
            element.position.y += 1;
            done = false;
        } else if (element.position.y > 0 && !upOrDown) {
            element.position.y -= 1;
            done = false;
        }
        o++;
    });
    return done;
}

//funzione per sistemare l'altezza passando da una heighmap ad un'altra
//input: cubebox = THREE.Object3D container dei cubi di primo livello
//input: data = array con le altezze
function fixHeigh(cubebox, data) {
    var p = 0;
    var done = true;
    cubebox.children.forEach(element => {
        if (element.position.y != data[p]) {
            //console.log('data:', data[p]);
            if (element.position.y > data[p]) {
                element.position.y -= 1;
                done = false;
            } else if (element.position.y < data[p]) {
                element.position.y += 1;
                done = false;
            }
        }
        p++;
    });
    return done;
}
