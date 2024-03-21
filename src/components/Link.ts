import { Component } from "../core/core";

export default class Link extends Component {
  constructor({ href, component }) {
    super({
      tagName: 'a',
      props: {
        to: href,
        children: component
      }
    });
  }

  render() {
    this.el.href = this.props.to;
    this.el.innerHTML = `${this.props.children.name}`;
  }
}