import { Component } from "../core/core";
import { routes } from '../routes';
import Link from './Link';

export default class Header extends Component {
  constructor() {
    super({
      tagName: 'header'
    });
  }

  render() {
    routes.forEach(route => this.el.append(new Link(route).el))
  }
}