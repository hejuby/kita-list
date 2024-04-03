import { Component } from "../core/core";

export default class NotFound extends Component {
  constructor() {
    super({
      tagName: 'h1'
    });
  }

  render() {
    this.el.innerHTML = `Not Found`;
  }
}
