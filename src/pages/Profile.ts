import { Component } from "../core/core";

export default class Profile extends Component {
  constructor() {
    super({
      tagName: 'h1'
    });
  }

  render() {
    this.el.innerHTML = 'Profile';
  }
}