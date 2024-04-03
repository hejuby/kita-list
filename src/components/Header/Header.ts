import { Component } from "../../core/core";
import { routes } from "../../routes";
import { LOGO } from "../../constants/constant";
import Link from "../Link/Link";
import HeaderNavigation from "../HeaderNavigation/HeaderNavigation";
import "./Header.scss";

export default class Header extends Component {
  constructor() {
    super({
      tagName: 'header'
    });
  }

  render() {
    this.el.classList.add('header');

    const logo = document.createElement('img');
    logo.classList.add('header__logo');
    logo.src = LOGO.SRC;
    logo.alt = LOGO.ALT;

    this.el.append(Component.fragment(
      new Link({ ...routes[0], inner: logo }).el,
      new HeaderNavigation().el
    ));
  }
}
