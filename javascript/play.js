var name='Tal';
var age= 19;
var hasHobbies = true;

function summarizeUser(userName, userAge, userhasHobbies){
  return (
    'Name is '+
    userName +
    ' Age is '+
    userAge +
    ' and the user has hobbies: '+
    userhasHobbies
  );
}
console.log(summarizeUser(name, age, hasHobbies));