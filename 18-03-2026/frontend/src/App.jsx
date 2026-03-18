import TrueorFalse from "./Components/TrueorFalse";
import Guess from "./Components/Guss";
import GradingSystem from "./Components/GradingSystem";
import List from "./Components/List";
import Counter from "./Components/Counter";
import Prime from "./Components/Prime";
import PrimeCheckList from "./Components/PrimeCheckList";
import ListVal from "./Components/ListVal";



function App() {
  return (
    <div className="container">
      
      <div className="card">
        <Counter/>
      </div>

      <div className="card">
        <TrueorFalse />
      </div>

      <div className="card">
        <Guess/>
      </div>

      <div className="card">
        <GradingSystem/>
      </div>

      <div className="card">
        <h2>A Simple List</h2>
        <List/>
      </div>

      <div className="card">
      <Prime/>
      </div>

      <div className="card">
      <PrimeCheckList/>
      </div>
      
      <div className="card">
      <ListVal/>
      </div>

    </div>
  );
}

export default App;