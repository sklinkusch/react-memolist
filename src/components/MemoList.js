import React, { Component } from "react";
import "./MemoList.css";

class MemoList extends Component {
  render() {
    return (
      <div>
        <p>What do you want to add?</p>
        <form>
          <input type="text" name="item" id="add-item" />
          <button>Add</button>
        </form>
      </div>
    );
  }
}

export default MemoList;
