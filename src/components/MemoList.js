import React, { Component } from "react";
import "./MemoList.css";

class MemoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      items: []
    };
  }
  handleChange = event => {
    this.setState({ text: event.target.value });
  };
  handleSubmit = event => {
    console.log("Submit");
    event.preventDefault();
    const newItem = {
      id: Date.now(),
      text: this.state.text
    };
    this.setState(state => ({
      items: state.items.concat(newItem),
      text: ""
    }));
  };
  render() {
    return (
      <div>
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
