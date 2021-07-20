import { Mobile } from "./mobileClass";

let myPhone0:Mobile = new Mobile ('Nokia', '3210', 'Nokia', 0.016, 'grey', false, 0, 50);
let myPhone1:Mobile = new Mobile ('iPhone', '3G', 'Apple', 8, 'silver', false, 1, 150);
let myPhone2:Mobile = new Mobile ('Galaxy', '10', 'Samsung', 16, 'black', true, 2, 350);

console.log('\n', '1.Mostrar todos los atributos de todos los objetos:\n\n',
    myPhone0, '\n\n', myPhone1, '\n\n', myPhone2);

myPhone0.is5G = true;
myPhone0.cameraNumber = 4;
console.log('\n', '2.Mostrar todos los atributos de todos los objetos, tras el cambio:\n\n',
    myPhone0, '\n\n', myPhone1, '\n\n', myPhone2);