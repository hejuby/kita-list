import Header from './components/Header/Header';
import App from './App';
import Footer from './components/Footer/Footer';
import './style/style.scss';

document.querySelector<HTMLDivElement>('#root')?.append(
  new Header().el,
  new App().el,
  new Footer().el
);
