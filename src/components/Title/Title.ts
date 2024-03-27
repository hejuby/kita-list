import { Component } from "../../core/core";
import { TITLE } from "../../constants/constant";
import './Title.scss';

export default class Title extends Component {
  render() {
    this.el.classList.add('title');
    
    const titleFront = document.createElement('h1');
    titleFront.innerText = TITLE.FRONT;

    const titleBack = document.createElement('h1');
    titleBack.innerText = TITLE.BACK;

    this.el.append(Component.fragment(titleFront, titleBack));
  }
}