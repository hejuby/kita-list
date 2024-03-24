import { ref, uploadBytes } from "firebase/storage";
import { Component } from "../core/core";
import { ProfileItem, isProfileKey, profileStore, updateStorage } from "../store/profile";
import { storage } from "../firebase/firebase";

interface CreateState extends ProfileItem {
  message: string,
  image: File | null
}

const isInputElement = (el: Element): el is HTMLInputElement => el.tagName === "INPUT";

export default class Create extends Component<unknown, CreateState> {
  constructor() {
    super({
      state: {
        name: '',
        email: '',
        phoneNumber: '',
        description: '',
        imageURL: '',
        message: '',
        image: null
      }
    });
  };

  private validateInput() {
    return this.state.name && this.state.email.match(/.+@.+\..+/) && this.state.phoneNumber.match(/010-[0-9]{4}-[0-9]{4}/);
  }

  render() {
    this.el.innerHTML = `
      <form>
        <input type="file" id="image" accept="image/*" />
        <img src="/public/profile_1280.png" style="width: 120px; height: 120px" alt="profile" />
        <label>Name</label>
        <input type="text" id="name" class="textfield" name="name" /> 
        <label>E-mail</label>
        <input type="email" id="email" class="textfield" name="email" />
        <label>Phone Number</label>
        <input type="tel" id="phoneNumber" class="textfield" name="phoneNumber" />
        <label>Description</label>
        <input type="text" id="description" class="textfield" name="description" /> 
        <button type="submit">Create</button>
      </form> 
      <p>${this.state.message}</p>
    `;

    const imageInput = this.el.querySelector('input#image');
    const imagePreview = this.el.querySelector('img');
    imageInput && isInputElement(imageInput) && imageInput.addEventListener('input', () => {
      this.state.image = imageInput.files && imageInput.files[0];
      if (imagePreview && this.state.image) imagePreview.src = URL.createObjectURL(this.state.image);
    });

    const inputList = this.el.querySelectorAll('input.textfield');
    inputList.forEach(input => {
      isInputElement(input) && input.addEventListener('input', () => {
        if (isProfileKey(input.id)) this.state[input.id] = input.value;
      });
    });

    const button = this.el.querySelector('button');
    button && button.addEventListener('click', async ev => {
      ev.preventDefault();
      if (this.validateInput()) {
        const newId = new Date().valueOf().toString();
        if (this.state.image) {
          const locationRef = ref(storage, `images/${newId}`);
          await uploadBytes(locationRef, this.state.image);
        }
        this.state.imageURL = newId;
        profileStore.state.profiles.push(JSON.parse(JSON.stringify(this.state)));
        updateStorage(profileStore.state.profiles);
        this.state.message = 'Successfully created!';
        this.render();
        inputList.forEach(input => {
          if(isInputElement(input)) input.value = '';
          if(isProfileKey(input.id)) this.state[input.id] = '';
        });
      } else {
        this.state.message = 'Please type in proper input format.';
        this.render();
      }
    });
  }
}