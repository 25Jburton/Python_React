import React from 'react';
const { createRoot } = require("react-dom/client");

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
Setup a container targeting the HTML we want
- import { createRoot } from 'react-dom/client';
*/
const container = document.getElementById('mainBlock');
/*
Setup a root for our container
*/
const root = createRoot(container);
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