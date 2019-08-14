
for (let i=1 ; i<=30 ; i++) {
    switch (i) {
        case 10:
            document.writeln('Diez');
            break;
        case 20:
            document.writeln('Veinte');
            break;
        default:
            document.writeln(i.toString());
    }

    if(i % 2 == 0)
        document.write('Par <br />');
    else    
        document.write('Impar <br />');

}