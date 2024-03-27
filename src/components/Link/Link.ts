import { Component } from "../../core/core";
import { RouteProps } from "../../routes";
import './Link.scss';

interface LinkProps extends RouteProps {
  inner?: string | HTMLElement
}

export default class Link extends Component<LinkProps> {
  constructor({ href, name, component, inner }: LinkProps) {
    super({
      tagName: 'a',
      props: {
        href: href,
        name: name,
        component: component,
        inner: inner
      }
    });
    if (this.el instanceof HTMLAnchorElement) {
      this.el.href = this.props.href;
    }
    this.giveActive();
  }

  render() {
    window.addEventListener('popstate', () => {
      if (this.el.parentElement && this.el.parentElement.tagName === 'LI') {
        this.giveActive();
      }
    });
    
    if (typeof this.props.inner === 'string') {
      this.el.innerText = this.props.inner;
      return;
    }
    if (this.props.inner instanceof Element) {
      this.el.append(this.props.inner);
      return;
    }
    this.el.innerText = this.props.name;
  }

  private giveActive() {
    location.hash === this.props.href
      ? this.el.classList.add('active')
      : this.el.classList.remove('active');
  }
}