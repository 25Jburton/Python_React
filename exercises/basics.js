import React from 'react';
const { createRoot } = require("react-dom/client");
/* 
Can also just import and call ReactDOM
- import ReactDOM from 'react-dom/client';
ReactDOM.createRoot(container).render(<ImportedComponent />)
*/

// Variables in JSX
const varName = 'Basic String';

const jsxExpression = <div>Add the {varName}</div>;

// Nested JSX objects
const nestedObj = (
    <div className="outer-class" id="parent1">
        <p className="inner-class" id="child1">
            {varName}
        </p>
    </div>
);

/* 
To nest imported components wrap with open and closing
render(
  <OuterComponent>
    <InnerComponent />
  <OuterComponent />
);
*/

/*
Setup a container targeting the HTML we want
- import { createRoot } from 'react-dom/client';
const container = document.getElementById('mainBlock');
*/

/*
Setup a root for our container
const root = createRoot(container);
*/

/*
Render the JSX to our root 
*/
root.render(nestedObj);


// JSX Event Listeners

function addAttributes(e) {
    e.target.setAttribute('className','class-added');
    e.target.setAttribute('title','Title Added');
}

const elementWithEvent = (
    <div
        id='myEvent'
        onClick={addAttributes}
    >
    </div>
);
root.render(elementWithEvent);


/* 
Conditionals (if statement usage)
- Can't inject if into our JSX need to write if outside
*/
let output;
if(elementWithEvent.props.className == 'class-added'){
    output = <div>Has the class</div>
}else{
    output = <div>Needs the class</div>
    elementWithEvent.setAttribute('className','class-added');
}

// Shorthand if
const result = Math.random() < 0.5 ? 'heads' : 'tails';

if(result == 'heads'){
    output = <div>Heads</div>
}else{
    output = <div>Tails</div>
}

// Directly on JSX attribute
const element = <div
    className={Math.random() < 0.5 ? 'heads-class' : 'tails-class'}
>
</div>


let baseValue = 5;
// && operators () 
const elementWithOperator = <div
    // Add the class if the base is larger than 2
    className={baseValue > 2 && 'add-class'}
>
</div>

// Mapping arrays
const myArray = [
    'RedBull',
    'Ferrari',
    'Racing Bulls',
    'Aston Martin',
    'Williams'
];

const mapArray = myArray.map(team, key => <li>{team}</li>);
// Turn it into a unordered list with a key (number_1)
const myList = <ul key={'number_'+key} >{mapArray}</ul>;
root.render(myList);


// Creating without using JSX
const exampleJSXFree = React.createElement(
    "div",
    null,
    "inner text"
);

/*
 Animal Fact - codecademy exercise
*/ 

/*
animals.js
export const animals = {
  dolphin: {
    image: '/images/dolphin.jpg',
    facts: ['Dolphins have been shown to give distinct names to each other!', 'Dolphins are known to display their own culture!', 'Dolphins have two stomachs!']
  },
  lobster: {
    image: '/images/lobster.jpg',
    facts: ['Lobsters taste with their legs!', 'Lobsters chew with their stomachs!', 'Lobsters can live as long as 100 years.']
  },
  starfish: {
    image: '/images/starfish.jpg',
    facts: ['Starfish can have up to 40 arms!', 'Starfish have no brain and no blood!', 'Starfish can regenerate their own arms!']
  }
};
*/

import { animals } from './animals';
import React from 'react';
const { createRoot } = require("react-dom/client");


const container = document.getElementById('app');
const root = createRoot(container);

const showBackground = true;
const background = (
  <img 
    className='background' 
    alt='ocean'
    src='/images/ocean.jpg'
  />
);

function displayFact(e){
  const alt = e.target.alt;
  const max = animals[alt].facts.length;
  const randIndex = Math.floor(Math.random() * max);
  const fact = animals[alt].facts[randIndex];
  document.getElementById('fact').innerHTML = fact;
}

const animalImages = [];
for(const animal in animals){
    animalImages.push(
     <img
      key={animal}
      className='animal'
      alt={animal}
      src={animals[animal].image}
      aria-label={animal}
      role='button'
      onClick={displayFact}
    />
  );
}

const title = '';
const animalFacts = (
  <div>
    {showBackground === true && background}
          <p id='fact'>
      </p>
    <div className='animals'>
      {animalImages}
    </div>
    <h1>
    {!title ? 'Click an animal for a fun fact!' : title}
    </h1>
  </div>
);

root.render(animalFacts);

/* 
Event Handler conventions
- naming typically start with 'handle' then the event type
onClick = handleClick

adding to a component
*/
function sampleComponent(){
  function handleClick() {
    console.log('Clicked add the code needed!');
  }

  return <button onClick={handleClick}>Click Me</button>
}
// When <sampleComponent /> is returned the click event will be available 


/*
  Basic contact form with authorization
*/
function Contact() {
  const password = 'swordfish';
  const [authorized, setAuthorized] = useState(false);

  function handleSubmit(e) {
    const enteredPassword = e.target.querySelector(
      'input[type="password"]').value;
    const auth = enteredPassword == password;
    setAuthorized(auth)
  }

  const login = (
    <form 
      action="#" 
      onSubmit={handleSubmit}
    >
      <input 
        type="password" placeholder="password" 
      />
      <input 
        type="submit" 
      />
    </form>
  );

  const contactInfo = (
    <ul>
      <li>
        client@example.com
      </li>
      <li>
        555.555.5555
      </li>
    </ul>
  ); 


  return (
      <div id="authorization">
        <h1>{authorized  ? 'Contact' : 'Enter the Password' }</h1>
        {authorized  ? contactInfo : login }
      </div>
  );
}
