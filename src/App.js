import logo from './logo.svg';
import './App.css';
import PersonCard from "./components/PersonCard"


  const person1 = {
    firstName: "Doe",
    lastName: "Jane",
    age: "45",
    hairColor: "Black"
  }

  const person2 = {
    firstName: "Smith",
    lastName: "John",
    age: "88",
    hairColor: "Brown"
  }

  const person3 = {
    firstName: "Fillmore",
    lastName: "Millard",
    age: "50",
    hairColor: "Brown"
  }

  const person4 = {
    firstName: "Smith",
    lastName: "Maria",
    age: "62",
    hairColor: "Brown"
  }


function App() {
  
  return (
    <div className="App">
      <PersonCard personKey={person1} />
      <PersonCard personKey={person2} />
      <PersonCard personKey={person3} />
      <PersonCard personKey={person4} />
    </div>
  );
}

export default App;
