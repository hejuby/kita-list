import { getStorage, ref, deleteObject } from "firebase/storage";
import { Component } from "../../core/core";
import { profileStore, updateStorage } from "../../store/profile";
import { selectedStore } from "../../store/list";
import { controlState } from "../../store/control";
import './Filter.scss';

interface FilterInputs {
  inputs: HTMLInputElement[]
}

export default class Filter extends Component<FilterInputs> {
  constructor(props: FilterInputs) {
    super({
      tagName: 'nav',
      props: props
    })
  }

  private pressSelectAll(isFull: boolean) {
    selectedStore.state.selected = isFull ? [] : Array.from(profileStore.state.profiles.keys()); 
    this.props.inputs && this.props.inputs.forEach(input => {
      input.checked = isFull ? false : true;
    });
  } 

  async render() {
    const addImageSvg = await (await fetch('/add.svg')).text();
    const deleteImageSvg = await (await fetch('/delete.svg')).text();

    this.el.classList.add('button-wrapper');

    const addBtn = document.createElement('button');
    addBtn.id = 'create';
    addBtn.innerHTML = addImageSvg;

    const deleteBtn = document.createElement('button');
    deleteBtn.id = 'delete';
    deleteBtn.innerHTML = deleteImageSvg;
    
    this.el.append(Component.fragment(
      addBtn,
      deleteBtn
    ));

    const selectAllButton = this.el.querySelector('#create');
    selectAllButton && selectAllButton.addEventListener('click', () => {
      controlState.state.control = "create";
      // this.pressSelectAll(selectedStore.state.selected.length === profileStore.state.profiles.length);
    });

    const deleteButton = this.el.querySelector('#delete');
    deleteButton && deleteButton.addEventListener('click', async () => {
      profileStore.state.profiles = await Promise.all(profileStore.state.profiles.filter( (profile, index) => {
        if (selectedStore.state.selected.indexOf(index) !== -1) {
          const storage = getStorage();
          const desertRef = ref(storage, `images/${profile.image}`);
          deleteObject(desertRef).then().catch((e) => {
            console.log(e);
          });
          return false;
        }
        return true;
      }));
      updateStorage(profileStore.state.profiles);
      selectedStore.state.selected = [];
    });
  }
}
