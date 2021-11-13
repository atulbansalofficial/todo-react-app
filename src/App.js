import "./App.css";
import "./index.css";
import Plan from "./Plan";
import React, { Component } from "react";

class App extends Component {
  state = {
    items: [],
    text: "",
  };

  handleChange = (e) => {
    console.log(e.target.value);
    this.setState({ text: e.target.value });
  };
  handleAdd = (e) => {
    if (this.state.text !== "") {
      const items = [...this.state.items, this.state.text];

      this.setState({ items: items, text: "" });
    }
  };
  handleDelete = (id) => {
    const olditems = [...this.state.items];
    console.log("olditems", olditems);
    const items = olditems.filter((element, i) => {
      return i !== id;
    });
    this.setState({ items: items });
    console.log("newitems", items);
  };
  render() {
    return (
      <div className="App">
        <div>
          <h2>Todo App</h2>
          <div className="container">
            <div>
              <div>
                <input
                  className="form-control"
                  type="text"
                  placeholder="Enter todo list Heare"
                  onChange={this.handleChange}
                  value={this.state.text}
                />
              </div>
              <div>
                <button className="addBtn" onClick={this.handleAdd}>
                  Add
                </button>
              </div>
            </div>
            <div>
              {/* <ul>
                {this.state.items.map((value, i) => {
                  return (
                    <Plan
                      id={i}
                      key={i}
                      value={value}
                      sendData={this.handleDelete}
                    />
                  );
                })}
              </ul> */}
              <ul>
                <Plan p={this.state.items} sendDelete={this.handleDelete} />
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
