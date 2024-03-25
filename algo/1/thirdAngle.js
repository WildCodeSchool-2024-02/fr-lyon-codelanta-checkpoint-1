// ************************************************************************** //
//                                                                            //
//                                                        .--.    No          //
//   thirdAngle.js                                       |o_o |    Pain       //
//                                                       |:_/ |     No        //
//   By: YohanGH <YohanGH@proton.me>                    //    ''     Code     //
//                                                     (|     | )             //
//   Created: 2024/03/25 09:28:17 by YohanGH           '__   _/_              //
//   Updated: 2024/03/25 09:33:57 by YohanGH          (___)=(___)             //
//                                                                            //
// ************************************************************************** //

/*
Écris une fonction qui, étant donné deux angles d'un triangle, renverra la valeur du troisième.
(Rappel : la somme des valeurs des trois angles dans un triangle est **toujours** 180°)
Ex: 
thirdAngle(90, 30) doit retourner 60
thirdAngle(20, 80) doit retourner 80
*/


/*
 * @param a: int ou float, le premier angle du triangle en degrés.
 * @param b: int ou float, le deuxième angle du triangle en degrés.
 * @return: int ou float, la valeur du troisième angle du triangle en degrés.
*/

function thirdAngle(a, b) {
  // Your code here !
	return 180 - (a + b)
}

module.exports = thirdAngle;
