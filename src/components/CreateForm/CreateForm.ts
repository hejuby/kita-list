import { Component } from "../../core/core";
import { profileStore, ProfileItem, updateStorage, defaultProfile } from "../../store/profile";
import { controlState } from "../../store/control";
import { storage } from "../../firebase/firebase";
import { ref, uploadBytes } from "firebase/storage";
import { TYPE, COLOR } from "../../constants/digimart";
import Input from "../Input/Input";
import './CreateForm.scss';

interface CreateFormState extends ProfileItem {
  imageFile: File[]
}

const isKeyOfCreateFormState = (key: string): key is keyof CreateFormState => {
  const keyArray = ["name", "type", "color", "brand", "price", "image", "memo", "imageFile"];
  return keyArray.includes(key);
}

export default class CreateForm extends Component<unknown, CreateFormState> {
  constructor() {
    super({
      tagName: 'form',
      state: {
        ...defaultProfile,
        imageFile: []
      }
    });
  }
  render() {
    this.el.classList.add('create-form');

    const appendButton = document.createElement('button');
    appendButton.classList.add('create-form__button');
    appendButton.innerText = '등록하기';

    this.el.append(Component.fragment(
      new Input({
        tagName: 'input',
        id: 'name',
        type: 'text',
        placeholder: '이름'
      }).el,
      new Input({ 
        tagName: 'select',
        id: 'type',
        array: [
          { ID: null, TEXT: '타입' },
          ...Object.values(TYPE).sort((a, b) => a.ID - b.ID)
        ],
      }).el,
      new Input({
        tagName: 'select',
        id: 'color',
        array: [
          { ID: null, TEXT: '색상' }, 
          ...Object.values(COLOR).sort((a, b) => a.ID - b.ID)
        ],
      }).el,
      new Input({ 
        tagName: 'input',
        id: 'brand',
        type: 'text',
        placeholder: '브랜드'
      }).el,
      new Input({ 
        tagName: 'input',
        id: 'price',
        type: 'number',
        placeholder: '가격'
      }).el,
      new Input({
        tagName: 'input',
        id: 'memo',
        type: 'text',
        placeholder: '메모할 내용이 있다면 입력해 주세요'
      }).el,
      new Input({
        tagName: 'input',
        id: 'image',
        type: 'file',
        accept: 'image/*'
      }).el,
      appendButton
    ));

    const imageInput = this.el.querySelector('input#image');
    imageInput instanceof HTMLInputElement
      && imageInput.addEventListener('input', () => {
        if (!imageInput.files)
          return;
        this.state.imageFile = Array.from(imageInput.files);
      });

    const inputList = this.el.querySelectorAll('input, select');
    const regMatchNumber = /^[0-9]+/;
    inputList.forEach(input => {
      if (!(input instanceof HTMLInputElement) && !(input instanceof HTMLSelectElement))
        return;
      input.addEventListener('input', () => {
        if (!isKeyOfCreateFormState(input.id))
          return;

        if (input.id === 'image' || input.id === 'imageFile')
          return;

        if (input.id === 'type' || input.id === 'color') {
          this.state[input.id] = input.value.match(regMatchNumber)
            ? parseInt(input.value, 10)
            : null;
          return;
        }

        if (input.id === 'price') {
          this.state[input.id] = parseInt(input.value, 10);
          return;
        }

        this.state[input.id] = input.value;
      });
    });

    appendButton.addEventListener('click', ev => {
      ev.preventDefault();
      Promise.all(
        this.state.imageFile.map(image => {
          if (!this.state.image) 
            return;
          try {
            const newId = new Date().valueOf().toString();
            const locationRef = ref(storage, `images/${newId}`);
            uploadBytes(locationRef, image);
            return newId;
          } catch(e) {
            console.log(e);
          }
        })
      ).then(res => {
        this.state.image = res.filter((each): each is string => typeof each !== "undefined");
        const { imageFile: _, ...newProfile } = this.state;
        profileStore.state.profiles.push(JSON.parse(JSON.stringify(newProfile)));
        updateStorage(profileStore.state.profiles);
        this.state = {
          ...defaultProfile,
          imageFile: []
        }
        controlState.state.control = "normal";
      });
    });
  }
}
