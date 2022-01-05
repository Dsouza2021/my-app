import logo from './logo.svg';
import './App.css';


//What is JSX and how do we use it with javascript
// 1. Expressions in JSX
const element = "hello"

//2. Specifying attributes with JSX
const jsxAttributes = <img src= {logo} width = "25%" height = "25%" /> 

//3. JSX also represents objects 
const person = {Name: "Danilo", Age: "25", Adress: "Av. Rui barbosa"}

function App() {
  return (
    
    <div>
      
      <h1> show a string using with jsx : {element}</h1>
      <p>Vamos aprender REact!</p>
      
    {jsxAttributes}
    
    <h1>Name: {person.Name}</h1>
    <h2>Age: {person.Age}</h2>
    <h3>Adress: {person.Adress}</h3>
    </div>
  );
}



export default App;

