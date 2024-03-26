import { Component } from "../../core/core";
import { TITLE } from "../../constants/constant";
import './Title.scss';

export default class Title extends Component {
  constructor() {
    super({
      tagName: 'h1'
    });
  }

  render() {
    this.el.classList.add('title');
    this.el.textContent = TITLE;
  }
}