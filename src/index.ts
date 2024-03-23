import './style.css'
import Header from './components/Header';
import App from './App';
import Footer from './components/Footer';

document.querySelector<HTMLDivElement>('#root')?.append(
  new Header().el,
  new App().el,
  new Footer().el
);
