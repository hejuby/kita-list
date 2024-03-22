import { Component } from "../core/core";
import { profileStore } from '../store/profile';
import Item from './Item';

export default class ItemList extends Component {
  render() {
    profileStore.state.profiles && profileStore.state.profiles.forEach(profile => {
      this.el.append(new Item(profile).el);
    });
  }
}