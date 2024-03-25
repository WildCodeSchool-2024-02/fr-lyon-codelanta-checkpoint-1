/*
Écris une fonction qui, étant donné deux angles d'un triangle, renverra la valeur du troisième.
(Rappel : la somme des valeurs des trois angles dans un triangle est **toujours** 180°)
Ex: 
thirdAngle(90, 30) doit retourner 60
thirdAngle(20, 80) doit retourner 80
*/

function thirdAngle(a, b) {
  // Your code here !

  const sumAngles = a + b;

  const angle3 = 180 - thirdAngle;

  return angle3;




}

  // const a = 30
  // const b = 60
  // const c = 180
  // // const aditionAngles = a - b
  // const thirdAngle = thirdAngle (a, b, c) 
  //   if (a === 30 && b === 60) {
  //     console.log("le 3 eme angles est :" thirdAngle)
  //   }
  // console.log("le 3 eme angles : " thirdAngle);

module.exports = thirdAngle;
