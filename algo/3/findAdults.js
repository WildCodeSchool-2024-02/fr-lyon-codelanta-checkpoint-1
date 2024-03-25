// ************************************************************************** //
//                                                                            //
//                                                        .--.    No          //
//   findAdults.js                                       |o_o |    Pain       //
//                                                       |:_/ |     No        //
//   By: YohanGH <YohanGH@proton.me>                    //    ''     Code     //
//                                                     (|     | )             //
//   Created: 2024/03/25 09:46:07 by YohanGH           '__   _/_              //
//   Updated: 2024/03/25 10:01:09 by YohanGH          (___)=(___)             //
//                                                                            //
// ************************************************************************** //

/*
Voici un exemple de tableau de personnes. Écris une fonction qui à partir d'un tableau similaire reçu en paramètre renverra un nouveau tableau,
lui-même contenant deux sous-tableaux :
- Le premier contient uniquement des femmes adultes
- Le second ne contient que des hommes adultes
(Étant donné qu'une personne est un adulte si elle a 18 ans ou plus)
*/
/*
const persons = [
  { name: 'Mary Poppins', age: 32, sex: 'female' },
  { name: 'Tony Stark', age: 36, sex: 'male' },
  { name: 'John Doe', age: 12, sex: 'male' },
  { name: 'Jane Doe', age: 6, sex: 'female' },
  { name: 'Maggie Simpson', age: 2, sex: 'female' },
  { name: 'Leonardo', age: 92, sex: 'male' },
  { name: 'Carla Moreau', age: 24, sex: 'female' },
  { name: 'Mickael Jackson', age: 17, sex: 'male' },
  { name: 'Penelope Milena', age: 27, sex: 'female' },
  { name: 'Homer Simpson', age: 45, sex: 'male' },
  { name: 'Leonardo Di Caprio', age: 42, sex: 'male' },
  { name: 'Carla Bruni', age: 54, sex: 'female' },
  { name: 'Lisa Simpson', age: 13, sex: 'female' },
  { name: 'Millie Bobby Brown', age: 15, sex: 'female' },
  { name: 'Penelope Cruz', age: 47, sex: 'female' },
];
*/


/**
 * @param {Object[]} persons - Le tableau des objets représentant les personnes.
 * Chaque objet doit contenir au moins les propriétés `name`, `age`, et `sex`.
 * @returns {Object[][]} Un tableau contenant deux sous-tableaux: le premier avec
 * les femmes adultes (âge >= 18) et le second avec les hommes adultes.
 */

function findAdults(persons) {
  // Your code here !
	let femmeAdulte = persons.filter(person => person.sex === 'female' && person.age >= 18);
	let hommeAdulte = persons.filter(person => person.sex === 'male' && person.age >= 18);

	return [femmeAdulte, hommeAdulte];
}

// Test
//console.log(findAdults(persons));

module.exports = findAdults;
