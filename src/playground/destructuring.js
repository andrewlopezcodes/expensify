

const person ={
  name: "Andrew",
  age: 38,
  location: {
    city: 'Brooklyn',
    temp: 99
  }
};

// const name = person.name;
// const age = person.age;

const {name, age} = person;
console.log(`${name} age is ${age}`);

if(person.location.city && person.location.temp){
    console.log(`It's ${person.location.temp} in ${person.location.city}.`);
}

const {city, temp} = person.location;
if(city && temp){
    console.log(`It's ${temp} in ${city}.`);
}


const book ={
  title: 'ego is the enemy',
  author: 'Ryan Holiday',
  publisher: {
    // name: 'penguin'
  }
};

const {name: publisherName = 'self-published'} = book.publisher
console.log(publisherName);

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];

const [coffee, small, medium, large] = item;
console.log(`A medium ${coffee} cost ${medium}`);
