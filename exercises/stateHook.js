// Example usage of hooks
/*
    State Hook - useState()
    - Returns
        Current state value
        State setter to update the state
        const [currentState, setCurrentState] = useState();
            Set our default state by useState(VALUE);
    - Calling state setter re-renders the component
*/
import React, { useState } from 'react';
const [currentState, setCurrentState] = useState();

// Setting or updating the state
function exampleState() {
    const [x, y] = useState('Off');
    if (x === 'Off') {
        return (
            <button
                onClick={() => y('On')}
                className='power-btn'
                id='on-switch'
            >
                State On    
            </button>
        );
    }else{
        return (
            <button
                onClick={() => y('Off')}
                className='power-btn'
                id='off-switch'
            >
                State Off    
            </button>
        );
    }
}

export default exampleState

// Event Handler callback to ensure no outdated values
const [x, y] = useState('');
const increment = () => y(prevY => prevY + 1);

// Arrays
const [cart,setCart] = useState([]);
const addItem = (item) => {
  setCart((prevCart) => {
    return ([item, ...prevCart]);
  })
};

const removeItem = (targetIndex) => {
    setCart((prevCart) => {
      return prevCart.filter((item, index) => index !== targetIndex);
    });
};

return (
    <>
    <ul>
        <li onClick={() => removeItem(index)} key={index}>
            {item}
        </li>
    </ul>
    <ItemList items={produce} onItemClick={addItem} />
    </>
);

// Objects
const [profile, setProfile] = useState({});

const handleChange = ({ target }) => {
  const {name, value} = target;
  setProfile(
    (prevProfile) => ({
      ...prevProfile, [name]: value
    })
  );
};

// Always best practice to not over complicate the code - create multiple state variables based on which values tend to change together
// Rather than having one state for all split and group common values for changing together
const [title, setTitle] = useState("Best Musical Ever");
const [actors, setActors] = useState(["George Wilson", "Tim Hughes", "Larry Clements"]);
const [locations, setLocations] = useState({
    Chicago: {
    dates: ["1/1", "2/2"], 
    address: "chicago theater"}, 
    SanFrancisco: {
    dates: ["5/2"], 
    address: "sf theater"
    }
});