// Example usage of hooks
/*
    Effect Hook - useEffect()
    - Allow running of defined code after renders 
    When the component is first added, or mounted, to the DOM and renders.
    When the state or props change, causing the component to re-render.
    When the component is removed, or unmounted, from the DOM.
*/
import React, { useState, useEffect } from 'react';
/*
    Pass callback to apply the effect on render without return values
    useEffect( () => {// desired effect} );
*/
export default function exampleEffect(){
    // Setup any use states for our function
    const [currentState,setCurrentState] = useState('default');
    // Add the effects to be done on render
    useEffect(
        () => {'Add som template literals or effect here'}
    );
    // Add any event handlers
    const handleClick = () => {
        setCurrentState((preCurrentState) =>  'Updated');
    };
    // setup the return statement
    return(
        <button onClick={handleClick}>
            Click me
        </button>
    );
}

/*
    Cleanup effects
    When event listeners added to the DOM, 
    remove event listeners to avoid memory leaks
*/
useEffect( 
    // Main callback function
    () => {
        // event listener
        document.addEventListener('keydown', handleKeyPress);

        return () => {
            document.removeEventListener('keydown', handleKeyPress);
        }
    }
);

export default function Counter() {
    const [clickCount, setClickCount] = useState(0);
    const increment = () => setClickCount((prevClickCount)=>prevClickCount +1);
  
    useEffect(
      () => { 
        document.addEventListener('mousedown', increment);
        return () => {
          document.removeEventListener('mousedown',increment);
        }
      }
    );
  
    return (
        <h1>Document Clicks: {clickCount}</h1>
    );
  }

/*  
    Skip calling our effect on re-renders
    - dependency array tells when to call our effect
    - pass empty array to only call on mount
*/
useEffect(() => {
    alert("Only on mount");
    return () => {
      alert("Only on mount removed from the DOM");
    };
    // Addition of the dependency array to schedule when effect os to be active
  }, []);


// Example function updating or time each second with change event included to show dependency array effect
export default function Timer() {
    const [time, setTime] = useState(0);
    const [name, setName] = useState('');

    useEffect(
        () => {
        const updateTime = setInterval(() => {
            setTime((prev) => prev + 1);
        }, 1000);

        return () => {
            clearInterval(updateTime);
        };
        }
    , []);

    const handleChange = ({ target }) => setName(target.value);

    return (
        <>
        <input value={name} onChange={handleChange} />
        <h1>Time: {time}</h1>
        </>
    );
}