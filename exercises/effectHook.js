// Example usage of hooks
/*
    Effect Hook - useEffect()
    - Allow running of defined code after renders 
    When the component is first added, or mounted, to the DOM and renders.
    When the state or props change, causing the component to re-render.
    When the component is removed, or unmounted, from the DOM.

    Rules for using hooks
        Only call Hooks at the top level.
        Only call Hooks from React functions.
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


/*
    Fetching data with effect hooks
    - Control when we fetch the data of fire our hook by adding dependency vars to our array 
*/
const [count,SetCount] = useState;
useEffect(() => {
    document.title = `You clicked ${count} times`;
  }, [count]); // Only re-run the effect if the value stored by count changes
  

  // fetch data about the weather and allow our users to write some notes next to the forecast
import React, { useState, useEffect } from "react";
// Example fetching from external function call
import { get } from './mockBackend/fetch';

export default function Forecast() {
    const [data, setData] = useState(null);
    const [notes, setNotes] = useState({});
    const [forecastType, setForecastType] = useState('/daily');

    useEffect(() => {
        alert('Requested data from server...');
        get(forecastType).then((response) => {
        alert('Response: ' + JSON.stringify(response,'',2));
        setData(response.data);
        });
    }, [forecastType]);

    const handleChange = (index) => ({ target }) =>
        setNotes((prev) => ({
        ...prev,
        [index]: target.value
        }));
    if (!data) {
        return <p>Loading...</p>;
    }
    return (
        <div className='App'>
        <h1>My Weather Planner</h1>
        <div>
            <button onClick={() => setForecastType('/daily')}>5-day</button>
            <button onClick={() => setForecastType('/hourly')}>Today</button>
        </div>
        <table>
            <thead>
            <tr>
                <th>Summary</th>
                <th>Avg Temp</th>
                <th>Precip</th>
                <th>Notes</th>
            </tr>
            </thead>
            <tbody>
            {data.map((item, i) => (
                <tr key={item.id}>
                <td>{item.summary}</td>
                <td> {item.temp.avg}°F</td>
                <td>{item.precip}%</td>
                <td>
                    <input
                    value={notes[item.id] || ''}
                    onChange={handleChange(item.id)}
                    />
                </td>
                </tr>
            ))}
            </tbody>
        </table>
        </div>
    );
}



// Example showing 'rules' for keeping hooks at top level and not wrapped in conditional logic
import React, { useState, useEffect } from 'react';
import { get } from './mockBackend/fetch';

export default function Shop() {
  const [categories, setCategories] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [items, setItems] = useState({});

  useEffect(() => {
      get('/categories').then((response) => {
        setCategories(response.data);
      });
  }, []);


  useEffect(() => {
      if (selectedCategory && !items[selectedCategory]) {
        get(`/items?category=${selectedCategory}`).then((response) => {
          setItems((prev) => ({ ...prev, [selectedCategory]: response.data }));
        }, [selectedCategory, items]);
      }
  });

  if (!categories) {
    return <p>Loading..</p>;
  }

  return (
    <div className='App'>
      <h1>Clothes 'n Things</h1>
      <nav>
        {categories.map((category) => (
          <button key={category} onClick={() => setSelectedCategory(category)}>
            {category}
          </button>
        ))}
      </nav>
      <h2>{selectedCategory}</h2>
      <ul>
        {!items[selectedCategory]
          ? null
          : items[selectedCategory].map((item) => <li key={item}>{item}</li>)}
      </ul>
    </div>
  );
}



// Structure and breakout the state and effect hooks to keep the data ordered and easy to read/understand 
import React, { useState, useEffect } from 'react';
import { get } from './mockBackend/fetch';

export default function SocialNetwork() {
  const [menu, setMenu] = useState(null);
  useEffect(() => {
    get('/menu').then((response) => {
      setMenu(response.data);
  }, []);
  const [newsFeed, setNewsFeed] = useState(null);
  useEffect(() => {
    get('/news-feed').then((response) => {
      setNewsFeed(response.data);
  }, []);
  const [friends, setFriends] = useState(null);
  useEffect(() => {
    get('/friends').then((response) => {
      setFriends(response.data);
  }, []);

  return (
    <div className='App'>
      <h1>My Network</h1>
      {!menu || !menu ? <p>Loading..</p> : (
        <nav>
          {menu.map((menuItem) => (
            <button key={menuItem}>{menuItem}</button>
          ))}
        </nav>
      )}
      <div className='content'>
        {!newsFeed || !newsFeed ? <p>Loading..</p> : (
          <section>
            {newsFeed.map(({ id, title, message, imgSrc }) => (
              <article key={id}>
                <h3>{title}</h3>
                <p>{message}</p>
                <img src={imgSrc} alt='' />
              </article>
            ))}
          </section>
        )}
        {!friends || !friends ? <p>Loading..</p> : (
          <aside>
            <ul>
              {friends
                .sort((a, b) => (a.isOnline && !b.isOnline ? -1 : 0))
                .map(({ id, name, isOnline }) => (
                  <li key={id} className={isOnline ? 'online' : 'offline'}>
                    {name}
                  </li>
                ))}
            </ul>
          </aside>
        )}
      </div>
    </div>
  );
}
