import { Component } from "../core/core";
import Title from "../components/Title/Title";
import ItemList from "../components/ItemList/ItemList";

export default class Home extends Component {
  render() {
    this.el.classList.add('home');
    this.el.append(Component.fragment(
      new Title().el,
      new ItemList().el
    ));
  }
}
