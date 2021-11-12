import "./App.css";
import "./index.css";

function App() {
  return (
    <div className="App">
      <div>
        <h2>Todo App</h2>
        <div className="container">
          <div>
            <input type="text" placeholder="Enter todo list Heare" />
            <button className="addBtn">Add</button>
          </div>
          <div>
            <ul>
              <li>Dummy list</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
