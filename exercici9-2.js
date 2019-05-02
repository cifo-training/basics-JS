let palindrome=prompt('Introdueix el mot o expresio a evaluar:');
let palindrome2='';
for (let index = palindrome.length-1; index >= 0; index--) {
    palindrome2 +=palindrome[index];   
}
if (palindrome.toUpperCase()===palindrome2.toUpperCase())
    alert('Eureka! es palíndrom');
else
    alert('ho es palindrom');
