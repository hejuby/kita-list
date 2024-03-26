import { Component } from "./core/core";
import Router from "./components/Router/Router";

export default class App extends Component {
  constructor() {
    super({
      tagName: 'main'
    });
  }

  render() {
    this.el.append(new Router().el);
  }
}