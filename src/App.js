
import './App.css';
import TodoList from "./components/TodoList";
import useDate from "./hooks/useDate";

function App() {
  const date = useDate()
  console.log(date)
  return (
      // <TodoList/>
      // <div>{String(date)}</div>
      <div>
        <div>Name: Bob</div>
        <div>Surname:</div>
        <div>age: 42</div>
        <div>number:</div>
        <button>edit</button>
      </div>
  );
}

export default App;


const initialValue = {
  name: 'test',
  surname: 'test',
  age: 'test',
  number: '0000',
}

const storedValues = {
  name: 'Bob',
  surname: '',
  age: 42,
  number: '',
}
