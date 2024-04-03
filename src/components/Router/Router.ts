import { Component } from "../../core/core";
import { routes } from '../../routes';
import NotFound from "../../pages/NotFound";
import './Router.scss';

export default class Router extends Component {
  private routeRender() {
    if (!location.hash) {
      history.replaceState(null, '', '/#/');
    }

    const routedPage = routes.find(route => location.hash === route.href);
    this.el.innerHTML = '';
    this.el.append(routedPage ? new routedPage.component().el : new NotFound().el);
  }

  render() {
    this.el.classList.add('router');
    this.routeRender();

    window.addEventListener('popstate', () => { this.routeRender(); });
  }
}
