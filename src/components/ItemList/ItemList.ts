import { Component } from "../../core/core";
import { profileStore } from '../../store/profile';
import { selectedStore } from "../../store/list";
import InitialMessage from "../InitialMessage/InitialMessage";
import Filter from "../Filter/Filter";
import Create from "../Create/Create";
import Item from '../Item/Item';
import './ItemList.scss';

export default class ItemList extends Component {
  constructor() {
    super({
      tagName: 'section',
      state: {}
    });
    profileStore.subscribe('profiles', () => {
      this.render();
    });
  }

  render() {
    this.el.classList.add('content');
    if (true) {
      const controllerWrapper = document.createElement('section');
      controllerWrapper.classList.add('controller');
      controllerWrapper.append(new InitialMessage().el, new Filter({ inputs: [] }).el);

      this.el.append(Component.fragment(controllerWrapper, new Create().el));
      return;
    }
    this.el.innerHTML = '';
    profileStore.state.profiles.forEach((profile, index) => {
      const listItem = document.createElement('li');
      const itemCheckbox = document.createElement('input');
      itemCheckbox.type = "checkbox";
      listItem.append(itemCheckbox, new Item(profile).el);
      this.el.append(listItem);

      itemCheckbox.addEventListener('click', () => {
        const indexOfCheckbox = selectedStore.state.selected.indexOf(index);
        if (indexOfCheckbox > -1) {
          selectedStore.state.selected.splice(indexOfCheckbox, 1);
          itemCheckbox.checked = false;
        } else {
          selectedStore.state.selected.push(index);
          itemCheckbox.checked = true;
        }
      }); 
    });

    const itemCheckboxList = this.el.querySelectorAll('input');
    this.el.insertAdjacentElement("afterbegin", new Filter({ inputs: Array.from(itemCheckboxList) }).el);
  }
}