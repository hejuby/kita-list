import { Component } from "../core/core";
import { profileStore, updateStorage } from "../store/profile";
import { selectedStore } from "../store/list";

interface FilterInputs {
  inputs: HTMLInputElement[]
}

export default class Filter extends Component<FilterInputs> {
  constructor(props: FilterInputs) {
    super({
      props: props
    })
  }

  private pressSelectAll(isFull: boolean) {
    selectedStore.state.selected = isFull ? [] : Array.from(profileStore.state.profiles.keys()); 
    this.props.inputs && this.props.inputs.forEach(input => {
      input.checked = isFull ? false : true;
    });
  } 

  render() {
    this.el.innerHTML = `
      <button type="button" id="select-all">
        Select All
      </button>
      <button type="button" id="delete">
        Delete
      </button> 
    `;

    const selectAllButton = this.el.querySelector('#select-all');
    selectAllButton && selectAllButton.addEventListener('click', () => {
      this.pressSelectAll(selectedStore.state.selected.length === profileStore.state.profiles.length);
    });

    const deleteButton = this.el.querySelector('#delete');
    deleteButton && deleteButton.addEventListener('click', () => {
      profileStore.state.profiles = profileStore.state.profiles.filter((_profile, index) => selectedStore.state.selected.indexOf(index) === -1);
      updateStorage(profileStore.state.profiles);
      selectedStore.state.selected = [];
    });
  }
}