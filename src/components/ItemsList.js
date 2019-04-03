import React, { Component } from "react";
import "./ItemsList.css";

export default class ItemsList extends Component {
  render() {
    return (
      <ul>
        {this.props.items.map((item, index) => (
          <li key={index}>{item.text}</li>
        ))}
      </ul>
    );
  }
}
