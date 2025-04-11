import React from 'react';
import ReactDOM from 'react-dom/client';

// Creating and sharing Props object
function usingProps(props) {
    const stringProps = JSON.stringify(props);
    if(props.id >= 3){
        return (
            <div>
             Access Denied!
            </div>
          );
    }else{
        return (
            <div>
              <h2>{stringProps}</h2>
              <h2>{props.className}</h2>
              <h2>{props.message}</h2>
              <h2>{props.objectToPass}</h2>
            </div>
          );
    }
}

// import usingProps from './file';
function App() {
    // Set the props as attributes
    return  <usingProps 
                name="propsName"
                className="propsClass"
                id={5}
                message="Props setup"
                objectToPass={[
                    'Redbull racing', 'Max V.', '1', '2025' 
                ]}
            />;
  }

  // Nesting in eventHandlers
  function ParentButton() {
    function eventClick() {
      let actionToDo = 'Add btn functionality';
      alert(actionToDo);
    }
  
    return <Button onClick={eventClick} />;
  }
  
  export default ParentButton;

/* 
Use of props.children 
- All props have the children attribute
This is for the content inside the tags
*/
<usingProps title='Example'>
    <li>This is the children content!</li>
    <li>With more than one we have an array!</li>
</usingProps>

let titleText = `Favorite ${props.title}`;
if (props.children instanceof Array) {
  titleText += 's';
}

// Setting Defaults 
function usingProps2(props) {
    const {text = 'Set Defaults'} = props;
    // or usingProps2.defaultProps = {text: 'Default'}; {props.text}
    return (
    <div>
        {text}
    </div>
    );
}
