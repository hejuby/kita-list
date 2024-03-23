import { Component } from "../core/core";
import { RouteProps } from "../routes";

const isElofAnchor = (el: HTMLElement): el is HTMLAnchorElement => el.tagName === 'A';

export default class Link extends Component<RouteProps> {
  constructor({ href, component }: RouteProps) {
    super({
      tagName: 'a',
      props: {
        href: href,
        component: component
      }
    });
    if (isElofAnchor(this.el)) {
      this.el.href = this.props.href;
    }
  }

  render() {
    this.el.innerHTML = `${this.props.component.name}`;
  }
}