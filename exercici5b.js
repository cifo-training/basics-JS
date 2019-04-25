var b1 = prompt("Que vols beure (llet,refresc o cervesa) ?");
var e1 = prompt("Quina edat tens?");
if (b1 === 'cervesa') {
    if (e1 >= 18) { console.log('Bona elecció, que vagi de gust'); }
    else { console.log('Ho sento, no tens edat per beure begudes alcoholiques'); }
} else if (b1 === 'refresc') {
    if (e1 >= 14) { console.log('Bona elecció, que vagi de gust'); }
    else { console.log('Ho sento, només pots demanar llet'); }
}

