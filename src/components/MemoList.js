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
  render() {
    return (
      <div>
        <p>What do you want to add?</p>
        <form>
          <input
            type="text"
            name="item"
            id="add-item"
            onChange={this.handleChange}
          />
          <button>Add</button>
        </form>
      </div>
    );
  }
}

export default MemoList;
