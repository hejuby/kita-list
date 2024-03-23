import { Component } from "../core/core";
import { profileStore } from '../store/profile';
import { selectedStore } from "../store/list";
import Filter from "./Filter";
import Item from './Item';

export interface SelectedIndex {
  selected: number[]
}

export default class ItemList extends Component<unknown, SelectedIndex> {
  constructor() {
    super({
      tagName: 'ul',
      state: {
        selected: []
      }
    });
    profileStore.subscribe('profiles', () => {
      this.render();
    });
  }

  render() {
    this.el.innerHTML = '';
    profileStore.state.profiles.forEach((profile, index) => {
      const listItem = document.createElement('li');
      const itemCheckbox = document.createElement('input');
      itemCheckbox.type = "checkbox";
      listItem.append(itemCheckbox, new Item(profile).el);
      this.el.append(listItem);
      // if (!selectedStore.state.selected) = 

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