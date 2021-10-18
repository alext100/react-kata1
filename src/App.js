import './App.css';
import Circle from './Components/Circle';

function App() {
    const circle = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }];

    return (
        <div className="App">
            {circle.map((circle) => < Circle key={circle.id} />)}
        </div>
    );
}

export default App;
