import { Component } from "../../core/core";
import { controlState } from "../../store/control";
import CreateForm from "../CreateForm/CreateForm";
import './Create.scss';


export default class Create extends Component {
  constructor() {
    super();
    controlState.subscribe("control", () => {
      this.el.innerHTML = '';
      this.render();
    });
  };

  render() {
    this.el.classList.add('create');
    (controlState.state.control === "create")
      ? this.el.classList.add('active')
      : this.el.classList.remove("active");

    this.el.append(Component.fragment(
      new CreateForm().el
    ));

    this.el.addEventListener('click', ev => {
      if (ev.target instanceof HTMLElement && ev.target.classList.contains('create')) {
        controlState.state.control = "normal";
      }
    });
  }
}