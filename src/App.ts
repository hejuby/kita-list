import { Component } from "./core/core";
import Header from "./components/Header";
import Router from "./components/Router";
import Footer from "./components/Footer";

export default class App extends Component {
  render() {
    this.el.append(
      new Header().el,
      new Router().el,
      new Footer().el);
  }
}