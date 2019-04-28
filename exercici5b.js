let b1 = prompt("Que vols beure (llet,refresc o cervesa) ?"),
    e1 = prompt("Quina edat tens?"),
    msg="Aquí te la seva beguda de ",
    msgneg="Ho sento, no tens edat per beure ";
if (b1 === 'cervesa') {
    if (e1 >= 18) { }
    else { msg=msgneg; }
} else if (b1 === 'refresc') {
    if (e1 >= 14) { }
    else { msg=msgneg;  }
}
alert(msg+b1);    
