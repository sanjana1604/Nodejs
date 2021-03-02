const person={
  name:'MAX',
  age:19,
  greet(){
    console.log('Hi I am '+this.name);
  }
};

const printName=({name})=>{
  console.log(name);
}
printName(person);


// const hobbies=['sports','drawing',12,34];

// for(let hobby of hobbies){
//   console.log(hobby);
// }

// const hobbies1=hobbies.push('dancing');
// console.log(hobbies.map(hobby => 'Hobby: ' + hobby));
// //console.log(hobbies1);


// const games=['ludo','snake and ladder'];
// const indoor=[...games];
// console.log(indoor);