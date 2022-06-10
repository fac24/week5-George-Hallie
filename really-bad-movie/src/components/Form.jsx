import React from "react";


export default function Form() {
const [name, setName] = React.useState('');
const [clicked, setClicked] = React.useState(false);
const updateName = (event) => {
    setName(event.target.value);
}

const showName = (event) => {
    setClicked.state(true);
}
    return  (
        <section><form>
         <label htmlFor="name">name</label>
         <input
           type="text"
           name="name"
           value={name}
           onChange={updateName}
         />
       <button className="submit_btn" value={clicked} onClick={setClicked.state(true)}>Submit</button>
       </form>

        <h3>Your name is: {name}</h3>
        </section>
)}

const Results = () => (
    <div className="greeting"  id="showtime">Good luck, {name}</div> 
  )
  
