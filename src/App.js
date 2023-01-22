import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {decrement, increment, set} from "./store/actions/counter";

function App() {
    const {counts, updatedAt} = useSelector(state => ({
        counts: state.counts,
        updatedAt: state.updatedAt
    }))

    const dispatch = useDispatch()

    const handleChange = (e) => {
        dispatch(set(e.target.value))
    }
    const handleInc = () => {
        dispatch(increment())
    }

    const handleDecr = () => {
        dispatch(decrement())
    }

  return <div>
      {String(new Date(updatedAt))}
      <button onClick={handleDecr}>decrement</button>
      {counts}
      <button onClick={handleInc}>increment</button>
      <input type='number' value={counts} onChange={handleChange}/>
  </div>
}

export default App;
