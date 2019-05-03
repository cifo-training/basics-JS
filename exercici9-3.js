let mainText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquet blandit urna sed cursus. Quisque ac placerat orci, quis iaculis nibh. Fusce metus urna, ultricies eleifend tempus in, maximus eget lacus. Fusce consequat pulvinar lobortis. Fusce vestibulum semper nisi ac hendrerit. Mauris venenatis nulla at mi imperdiet convallis. Nulla tempor erat vel efficitur elementum. Mauris non ex magna. Aenean ut tortor ultricies, sodales lacus eu, tristique nisi. Nullam venenatis pellentesque nibh a rhoncus. Nullam suscipit accumsan lorem et varius. Maecenas sit amet malesuada massa. Phasellus faucibus in turpis vitae vehicula. Phasellus dui odio, porta non ex nec, ullamcorper pellentesque dolor. Quisque vel volutpat ex. Morbi sit amet augue eget nisl tincidunt gravida.' +
    'Pellentesque eu nisl interdum, dictum diam sed, mollis nunc. Aliquam erat volutpat. Vestibulum sed justo sit amet erat egestas consectetur sed at ex. Nunc sagittis, elit et mattis placerat, ipsum ligula viverra lorem, in venenatis tellus nisl non quam. Donec et ornare orci, vitae tincidunt ligula. In vitae arcu nec neque iaculis mollis sit amet id nibh. Phasellus nec tortor in eros sodales aliquet et non dui. Aliquam sodales ligula et finibus sollicitudin. Nunc tempor scelerisque molestie. Aliquam finibus est velit, sed dignissim ante suscipit sed. Morbi hendrerit eleifend hendrerit. Suspendisse faucibus euismod scelerisque. Vivamus dictum elementum elit, sit amet porta orci dignissim eu. Aliquam egestas elit non pretium molestie. Quisque convallis posuere lobortis.' +
    'Praesent viverra mattis erat placerat pulvinar. Ut rutrum, elit nec sollicitudin consectetur, tellus mauris finibus erat, ac finibus sem diam ac quam. Fusce tempor nulla vel lectus fringilla congue. Mauris semper tortor eget lorem congue, quis pellentesque diam imperdiet. In dictum dapibus dui pellentesque congue. Cras at dolor id ipsum fermentum condimentum vitae in nulla. Duis efficitur, diam a mattis tincidunt, purus eros consequat odio, vel iaculis urna sapien sit amet mi. Duis enim nulla, euismod sed vulputate vel, feugiat in elit. Sed gravida pharetra commodo. Donec gravida tincidunt enim, id ornare orci eleifend quis. Nam iaculis accumsan lorem quis iaculis. ';
let adaptedText;
function textAdapt(text) {
    //Remplacem els salts de línia, els punts i les comes por espais
    text = text.replace(/\r?\n/g, ' ');
    text = text.replace(/,|\./g, ' ');
    //Remplacem els espais seguits por un sol
    text = text.replace(/[ ]+/g, ' ');
    //Treiem l'espai del principi i del final
    text = text.replace(/^ | $/, '');
    return adaptedText = text;
}
function contar_paraules(text) {
    //Dividim el text pels espais
    let textEnParaules = text.split(' ');
    //Contem els trossos de cadenas que hi han
    let numParaules = textEnParaules.length;
    //Mostrem el número de paraules
    return msg = (`Total paraules al text: ${numParaules}`);
}
function contar_repeticions(text, paraula) {
    text = (' ' + text + ' ').toUpperCase();
    paraula = paraula.toUpperCase();
    //Dividim el text per la paraula 
    let textEnParaules = text.split(' ' + paraula + ' ');
    //Contem els trossos de cadenas que hi han
    let numParaules = textEnParaules.length - 1;
    //Mostrem el número de repeticions
    return msg = (`La paraula \'${paraula}\' està repetida ${numParaules} vegades al text`);
}
textAdapt(mainText);
console.log(contar_paraules(adaptedText));
console.log(contar_repeticions(adaptedText, 'et'));