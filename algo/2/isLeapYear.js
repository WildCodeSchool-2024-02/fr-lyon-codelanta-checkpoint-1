// ************************************************************************** //
//                                                                            //
//                                                        .--.    No          //
//   isLeapYear.js                                       |o_o |    Pain       //
//                                                       |:_/ |     No        //
//   By: YohanGH <YohanGH@proton.me>                    //    ''     Code     //
//                                                     (|     | )             //
//   Created: 2024/03/25 09:38:25 by YohanGH           '__   _/_              //
//   Updated: 2024/03/25 09:43:52 by YohanGH          (___)=(___)             //
//                                                                            //
// ************************************************************************** //

/*
Écris une fonction qui peut déterminer si une année est une année bissextile. Elle doit renvoyer `true` si c'est le cas, et `false` sinon.
Rappel : Une année bissextile vérifie **une** de ces règles :
- Elle est divisible par 4, sans être divisible par 100
- Elle est divisible par 400
Ex : 2004, 2016 et 2020 sont des années bissextiles
Rappel : Pour vérifier si un nombre est divisible par un autre, tu peux utiliser l'opérateur "modulo" (%)
*/

/*
 * Détermine si une année est bissextile.
 * @param annee: int, l'année à vérifier.
 * @return: bool, True si l'année est bissextile, sinon False.
*/

function isLeapYear(year) {
  // Your code here !
	return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0 ? true : false;
}

module.exports = isLeapYear;
