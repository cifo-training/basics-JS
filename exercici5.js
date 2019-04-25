var b1 = "";
while (b1 !== 'llet' && b1 !== 'refresc' && b1 !== 'cervesa') {
    b1 = prompt("Que vols beure (llet,refresc o cervesa) ?");
    if (b1 === 'llet' || b1 === 'refresc' || b1 === 'cervesa') {
        var e1 = prompt("Quina edat tens?");
        if (e1 >= 18) {
            console.log('Bona elecció, que vagi de gust');
        } else if ((e1 >= 14) && (e1 < 18)) {
            if (b1 === 'cervesa') {
                console.log('Ho sento, no tens edat per beure begudes alcoholiques');
            } else {
                console.log('Bona elecció, que vagi de gust');
            }
        }
        else if ((b1 !== 'llet')) {
            console.log('Ho sento, no tens edat per beure begudes alcoholiques ni refrescs');
        } else {
            console.log('Bona elecció, que vagi de gust');
        }

    } else {
        console.log('Escull una beguda de les ofertades, siusplau');
    }
}

