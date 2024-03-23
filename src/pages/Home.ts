import { Component } from "../core/core";
import ItemList from "../components/ItemList";

export default class Home extends Component {
  render() {
    this.el.append(new ItemList().el);
  }
}