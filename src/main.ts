import './style.css';
import * as lodash from 'lodash';

const superCodeKebab = lodash.kebabCase('HALLO SUPERCODE');
console.log(superCodeKebab)

function addNumber(a: number, b: number): void{
  console.log(a + b);
}

addNumber(1, 3);
