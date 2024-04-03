import { Component } from "../../core/core";
import { routes } from '../../routes';
import Link from '../Link/Link';
import './HeaderNavigation.scss';

export default class HeaderNavigation extends Component {
  constructor() {
    super({
      tagName: 'nav'
    });
  }

  render() {
    this.el.classList.add('menu');

    const newList = document.createElement('ul'); 
    newList.classList.add('menu__list');

    routes.forEach(route => {
      const newItem = document.createElement('li');
      newItem.classList.add('menu__item');
      newItem.append(new Link(route).el);
      newList.append(newItem);
    });
    
    this.el.append(Component.fragment(newList));
  }
}
