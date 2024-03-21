import { Component } from "../core/core";

export default class Footer extends Component {
  constructor() {
    super({
      tagName: 'footer'
    });
  }

  render() {
    this.el.innerHTML = `Footer`;
  }
}