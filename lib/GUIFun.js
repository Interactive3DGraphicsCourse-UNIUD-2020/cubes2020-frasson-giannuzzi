function initGUI() {

    //FUNZIONI GUI
    guiControls = new function () {
        this.rotationX = 0;
        this.rotationY = 0;
        this.rotationZ = 0;
    }

    //PARAMETRI INIZIALI CAMERA
    parametri = {
        x: 70,
        y: 50,
        z: 70
    }

    //ISTANZIO OGGETTO GUI E AGGIUNGO BOTTONI
    datGUI = new dat.GUI();

    //HEIGHTMAP
    datGUI.add(guiControls, 'rotationX', 0, 1);
    datGUI.add(guiControls, 'rotationY', 0, 1);
    datGUI.add(guiControls, 'rotationZ', 0, 1);

    var defCube = {
        DefaultCube: function () {
            cubebox.position.x = -25;
            cubebox.position.y = 0;
            cubebox.position.z = -25;
            cubebox.rotation.x = 0;
            cubebox.rotation.y = 0;
            cubebox.rotation.z = 0;
            cubebox.scale.x = 1;
            cubebox.scale.y = 1;
            cubebox.scale.z = 1;
        }
    };
    datGUI.add(defCube, 'DefaultCube');

    //CAMERA    
    datGUI.add(parametri, 'x', 0, 140).onChange(function (valore) {
        cameraZ(valore);
    });
    datGUI.add(parametri, 'y', 0, 100).onChange(function (valore) {
        cameraX(valore);
    });
    datGUI.add(parametri, 'z', 0, 140).onChange(function (valore) {
        cameraY(valore);
    });
    var defCam = {
        DefaultCamera: function () {
            camera.position.x = 70;
            camera.position.y = 50;
            camera.position.z = 70;
        }
    };
    datGUI.add(defCam, 'DefaultCamera');

    datGUI.add(cubebox.scale, 'x', 0.1, 2) //
        .name('scaleX')
        .onChange(Render);
    datGUI.add(cubebox.scale, 'y', 0.1, 2) //
        .name('scaleY')
        .onChange(Render);
    datGUI.add(cubebox.scale, 'z', 0.1, 2) //
        .name('scaleZ')
        .onChange(Render);

}

//FUNZIONI CHE CAMBIANO VALORE POSIZIONE CAMERA
function cameraX(valore){
    camera.position.x = valore;
}
function cameraY(valore){
    camera.position.y = valore;
}
function cameraZ(valore){
    camera.position.z = valore;
}
