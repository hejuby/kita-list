import { Component } from "../../core/core";
import './Footer.scss';

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