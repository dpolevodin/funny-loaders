import './App.css';
import Panzer from './components/Panzer'

function App() {
  return (
    <div className="App">
      <Panzer patrolPathLength={20} size="normal" panzerSpeed={4}/>
    </div>
  );
}

export default App;
