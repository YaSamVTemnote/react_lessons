import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {decrement, increment, set} from "./store/actions/counter";
import List from "./components/List";
import Form from "./components/Form";
import {fetchTodos} from "./store/actions/todos";
import {useEffect} from "react";
import Filters from "./components/Filters";

function App() {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchTodos())
    }, []);

  return <>
      <Filters/>
      <List/>
      <Form/>
  </>
}

export default App;
