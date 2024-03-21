import { Component } from "../core/core";

export default class Home extends Component {
  constructor() {
    super({
      tagName: 'h1'
    });
  }

  render() {
    this.el.innerText = `Home`;
  }
}