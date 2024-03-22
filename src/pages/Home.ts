import { Component } from "../core/core";
import Filter from "../components/Filter";
import ItemList from "../components/ItemList";

export default class Home extends Component {
  constructor() {
    super({
      tagName: 'h1'
    });
  }

  render() {
    this.el.append(new Filter().el, new ItemList().el);
  }
}