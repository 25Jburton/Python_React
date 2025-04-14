/*
    Want the server to know about every new character or deletion, as soon as it happens. 
    That way, your screen will always be in sync with the rest of your application
    (Unlike typical forms that have no server communication until submission) 

    Uncontrolled component is a component that maintains its own internal state
    - let input = document.querySelector('input[type="text"]')
    - <input type="text"></input>
    Controlled component has no state, it must be controlled by someone else (has no memory, value is stored in props)
    <input type="text" onChange={handleUserInput} value={userInput} />

*/

// Basic active form with event handler to view live progress
function Input() {
    const [userInput, setUserInput] = useState('');
    function handleUserInput(e) {
      setUserInput(e.target.value);
    }
    return (
      <>
        <div className={styles.emailContainer}>
          <h2>Let's stay in touch.</h2>
          <p>
            Sign up for our newsletter to stay up-to-date on the latest products,
            receive exclusive discounts, and connect with other programmers who
            share your passion for all things tech.
          </p>
          <form>
            <label for="email">Email: </label>
            <input id="email" type="text" onChange={handleUserInput} />
          </form>
        </div>
        <div className={styles.inputDisplay}>
          <h2>Current User Input: </h2>
          <h4 value={userInput}>{userInput}</h4>
        </div>
      </>
    );
}
  
export default Input;