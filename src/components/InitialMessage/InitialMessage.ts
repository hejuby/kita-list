import { Component } from "../../core/core";
import { routes } from "../../routes";
import { INITIAL_MESSAGE } from "../../constants/constant";
import Link from "../Link/Link";
import './InitialMessage.scss';

export default class InitialMessage extends Component {
  constructor() {
    super({
      tagName: 'article'
    });
  }

  render() {
    this.el.classList.add('initial-message');

    const lineHome = document.createElement('p');
    lineHome.innerText = INITIAL_MESSAGE.LINE.HOME;

    const lineSearch = document.createElement('span');
    lineSearch.innerText = INITIAL_MESSAGE.LINE.SEARCH;

    this.el.append(Component.fragment(
      lineHome,
      new Link({ ...routes[1], inner: INITIAL_MESSAGE.LINK.DIGIMART }).el,
      lineSearch
    ));
  }
}