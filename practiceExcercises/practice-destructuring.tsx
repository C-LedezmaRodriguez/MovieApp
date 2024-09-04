//Es ir descomentando porsi, lo que pasa es que varios ejercicios teninan el mismo nombre de constante xD

import React, { useState } from 'react';
// Ejercicio 1: Destructuring de Arrays
// Dado el siguiente array, realiza la desestructuración para obtener las variables a, b y c.
// const numbers: number[] = [10, 20, 30];

// const numbers: number[] = [10, 20, 30];

// const [a,b,c] = numbers

// console.log(a,b,c)

// Ejercicio 2: Destructuring de Objetos
// Dado el siguiente objeto, realiza la desestructuración para obtener las variables name y age.
// const person = { name: "Alice", age: 25, city: "New York" };

// const {name, age} = person

// console.log(name, age)

//Ejercicio 3: Destructuring de Props en React
//Crea un componente funcional de React que tome las props title y description, y muéstralas en el render.

// type props = {
//   title: string;
//   description: string;
// };

// const MyComponent = ({title, description}: props)=>{
//   return(
//     <div>
//       <h1>{title}</h1>
//       <p>Description:{description}</p>
//     </div>
//   )

// }
// export default MyComponent;

// Ejercicio 4: Destructuring de State en React
// Usa useState para manejar un contador y muestra su valor en el componente.
// function Counter(){
//     const[count, setCount] = useState(0);
//     const increment = () =>{
//       setCount(count +1)
//     }
//     return(
//       <div>
//         <p>you clicked {count} times</p>
//         <button onClick={increment}></button>
//         {/* <button onClick={()=>setCount(count +1)}></button> */}
//       </div>
//     )
// }
// console.log(Counter)
// export default Counter;

// Ejercicio 5: Destructuring de Props y State en un Componente Completo
// Crea un componente que tome las props initialValue y step, y use useState para manejar el estado del contador. Incrementa el contador según el valor de step.

// type props = {
//   initialValue: number;
//   step: number;
// }

// const Value = ({initialValue, step}:props)=>{
//   const [count, setCount] = useState(initialValue)
//   const increment = () =>{
//     setCount(count +step)
//   }
//   return(
//     <div>
//       <p>valor actual:{count}</p>
//       <button onClick={increment}>incrementar</button>
//     </div>
//   )
// }

// Ejercicio 6: Destructuring de Arrays con Valores por Defecto
// Dado el siguiente array, realiza la desestructuración para obtener las variables a, b y c, pero proporciona un valor por defecto para c.
// const numbers: number[] = [10, 20];

// const[a, b, c = 30] = numbers;

// console.log(a)
// console.log(b)
// console.log(c)

// Ejercicio 7: Destructuring de Objetos Renombrando Variables
// Dado el siguiente objeto, realiza la desestructuración para obtener las variables firstName y years, renombrándolas desde name y age respectivamente.
// const person = { name: "Alice", age: 25, city: "New York" };

// const {name:firstName, age:years} = person

// console.log(firstName)
// console.log(years)

// Ejercicio 8: Destructuring en Funciones
// Crea una función que reciba un objeto con las propiedades width y height y calcule el área de un rectángulo usando destructuring.

const measure = (rectangle:{width: number,height: number,})=>{
  const {width, height} = rectangle
  return(width * height)
}
const area = measure({width:50, height:50})
console.log(area)

// Ejercicio 9: Destructuring de Props en un Componente con Valores por Defecto
// Crea un componente funcional de React que tome las props title y subtitle, y establece un valor por defecto para subtitle.

type Props = {
  title: string;
  subtitle: string;
}
const newComp = ({title, subtitle='english'}:Props)=>{
  return(
    <div>
      <h1>Title:{title}</h1>
      <h4>subtitle:{subtitle}</h4>
    </div>
  )
}

export default newComp;

// Ejercicio 10: Destructuring Anidado
// Dado el siguiente objeto, realiza la desestructuración para obtener las variables name, age y city.

const person = {
  name: "Alice",
  age: 25,
  address: {
    city: "New York",
    zip: 10001,
  },
};

const {name, age, address:{city}} = person

console.log(name, age, city)