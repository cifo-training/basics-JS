let b1=prompt("Que vols beure (llet,refresc o cervesa) ?"),
    e1=0,
    msg="Aquí te la seva beguda de ",
    msgneg="Ho sento, no puc servirte ";
if (b1===undefined || b1==='' || (b1!=='llet'&& b1!=='refresc' && b1!=='cervesa'))
    {
        msg=msgneg;
        b1='';
    }  
if (b1==="llet") 
    e1 = prompt("Quina edat tens?");
 if ((b1==="cervesa" && e1<18)||(b1==="refresc" && e1<14)){
    msg=msgneg;
}
alert(msg+b1);    