/*
    Ir al lorem ipsum generator y:

    Generar 3 párrafos. Almacenar el texto en un String
    Hacer que el programa cuente el número de palabras en el string
    Hacer que el programa cuente el número de veces que aparece la palabra latina et
*/

let parrafo1 = 'Lorem ipsum dolor sit amet consectetur adipiscing elit facilisi nascetur, ligula gravida sociosqu id etiam hac ullamcorper pretium praesent hendrerit, quisque facilisis ridiculus viverra habitant odio ac ultrices. Hac egestas interdum id massa tellus enim venenatis faucibus euismod, vivamus nam nostra ad aenean placerat habitant felis, non nisl magna facilisi dignissim arcu iaculis aptent augue, molestie pellentesque ultrices netus in imperdiet purus. Eleifend nunc lobortis aptent senectus ligula mus varius neque, turpis bibendum aliquet etiam pellentesque hac natoque, curae class at suspendisse phasellus commodo non. ';
let parrafo2 = 'Sem sociosqu convallis ultricies enim aenean nibh bibendum ligula ornare est, feugiat venenatis condimentum libero lectus curabitur senectus erat etiam, pulvinar aliquet accumsan elementum purus arcu commodo aliquam viverra. Venenatis sollicitudin aliquet eleifend turpis aliquam imperdiet duis ornare massa lacus blandit, urna netus augue elementum praesent suscipit mauris posuere aptent at, suspendisse accumsan cras ante congue aenean vitae purus gravida ultricies. Proin tristique sociosqu rutrum quam bibendum ornare maecenas, ante porttitor fusce volutpat praesent hac eget sapien, suscipit condimentum curabitur urna viverra in. ';
let parrafo3 = 'Tempor velit feugiat parturient nec ac curae facilisi auctor a, platea pretium mauris tortor vehicula dignissim quis odio, magnis potenti rutrum erat sed blandit nisl est. Egestas malesuada rutrum tincidunt odio sociis leo sapien nullam cubilia senectus volutpat, facilisis nascetur morbi donec eros justo erat neque commodo ultrices. Quisque nostra porttitor class ut consequat maecenas auctor vitae justo facilisi ad nunc hac, duis himenaeos velit congue libero penatibus aliquet id luctus convallis dictum ante.';

let parrafos = parrafo1 + parrafo2 + parrafo3;
// let parrafos = 'Lorem ipsum dolor sit et amet consectetur et'

parrafos.trim(); // Quitamos espacios en blanco por el principio o final si los hubiera

let ultimaPalabra = "";
let hayEspacio = false;
let contPalabras = 0;
let contPalabrasEt = 0;

for (let i=0; i<parrafos.length; i++) {
    if (parrafos[i] == ' ' && !hayEspacio) {
        contPalabras++;
        hayEspacio = true; 
        contPalabrasEt = contPalabrasEt + isEt(ultimaPalabra);
        ultimaPalabra = "";
        }
    else {
        if (parrafos[i] !== ' ')
            ultimaPalabra += parrafos[i];
        hayEspacio = false;
        }
}

// Tenemos que contar la última palabra, si es que tenemos algo de texto.
if (parrafos.length > 0) {
    contPalabrasEt = contPalabrasEt + isEt(ultimaPalabra);
    contPalabras++;
}

console.log(`Tenemos ${contPalabras} palabras.`)
console.log(`Tenemos ${contPalabrasEt} palabras et.`)

///////////////////////////////////////////////////////////////////////////
function isEt(palabra) {
    if (palabra.toUpperCase() === 'ET')
        return 1;
    return 0;
}