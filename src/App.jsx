
import { useSelector, useDispatch } from "react-redux";
import {
  addCounter,
  minusCounter,
  resetCounter
} from "./redux/counterslice";

import "./App.css";

function App() {
  // Redux Store se Counter ki value lena
  const counter = useSelector((state) => state.counter.CounterValue);

  // Actions dispatch karne ke liye
  const dispatch = useDispatch();

  return (
    <div className="app-container">

      <div className="counter-card">

        <p className="subtitle">REDUX TOOLKIT PROJECT</p>

        <h1>Counter App</h1>

        <p className="description">
          Manage your counter with Redux Toolkit
        </p>

        <div className="counter-display">
          {counter}
        </div>

        <div className="button-group">

          <button
            className="btn add-btn"
            onClick={() => dispatch(addCounter())}
          >
            + Add
          </button>

          <button
            className="btn minus-btn"
            onClick={() => dispatch(minusCounter())}
          >
            − Minus
          </button>

        </div>

        <button
          className="reset-btn"
          onClick={() => dispatch(resetCounter())}
        >
          Reset Counter
        </button>

        <p className="footer-text">
          Built with React + Redux Toolkit
        </p>

      </div>

    </div>
  );
}

export default App;
