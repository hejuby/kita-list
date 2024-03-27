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
    
    const titleFront = document.createElement('span');
    titleFront.innerText = TITLE.FRONT;

    const titleBack = document.createElement('span');
    titleBack.innerText = TITLE.BACK;

    this.el.append(Component.fragment(
      titleFront,
      titleBack
    ));
  }
}