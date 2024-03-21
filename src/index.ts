import './style.css'
import App from './App';

document.querySelector<HTMLDivElement>('#app')?.append(new App().el);
