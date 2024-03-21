import { Component } from "../core/core";

export default class Search extends Component {
  constructor() {
    super({
      tagName: 'h1'
    });
  }

  render() {
    this.el.innerHTML = 'Search';
  }
}