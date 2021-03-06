import React, { Component } from "react";
import ItemsList from "./ItemsList";
import "../styles/MemoList.css";

class MemoList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.state.text = "";
    this.state.items = JSON.parse(localStorage.getItem("items")) || [];
  }
  handleChange = event => {
    this.setState({ text: event.target.value });
  };
  handleSubmit = event => {
    event.preventDefault();
    const newItem = {
      id: Date.now(),
      text: this.state.text
    };
    if (this.state.text === "") {
      return;
    }
    const newItems = this.state.items.concat(newItem);
    this.setState(state => ({
      items: newItems,
      text: ""
    }));
    this.save(newItems);
  };
  save(items) {
    const jsonItems = JSON.stringify(items);
    localStorage.setItem("items", jsonItems);
  }
  render() {
    return (
      <div>
        <ItemsList items={this.state.items} />
        <p>What do you want to add?</p>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="item"
            id="add-item"
            onChange={this.handleChange}
            value={this.state.text}
          />
          <button>Add #{this.state.items.length + 1}</button>
        </form>
      </div>
    );
  }
}

export default MemoList;
