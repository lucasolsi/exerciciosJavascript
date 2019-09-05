require('./global')

console.log(MyApp.greeting());

// Won't change the name because of the Object.freeze at globalClient
MyApp.name = 'Something is wrong.';
console.log(MyApp.name);