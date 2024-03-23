import { Component } from "../core/core";
import { ProfileItem, isProfileKey, profileStore, updateStorage } from "../store/profile";

interface CreateState extends ProfileItem {
  message: string
}

export default class Create extends Component<unknown, CreateState> {
  constructor() {
    super({
      state: {
        name: '',
        email: '',
        phoneNumber: '',
        description: '',
        message: ''
      }
    });
  };

  private validateInput() {
    return this.state.name && this.state.email.match(/.+@.+\..+/) && this.state.phoneNumber.match(/010-[0-9]{4}-[0-9]{4}/);
  }

  render() {
    this.el.innerHTML = `
      <form>
        <label>Name</label>
        <input type="text" id="name" name="name" /> 
        <label>E-mail</label>
        <input type="email" id="email" pattern=".+@.+\..+" size="30" required />
        <label>Phone Number</label>
        <input type="tel" id="phoneNumber" name="phoneNumber" pattern="010-[0-9]{4}-[0-9]{4}" required />
        <label>Description</label>
        <input type="text" id="description" name="description" /> 
        <button type="submit">Create</button>
      </form> 
      <p>${this.state.message}</p>
    `;

    const inputList = this.el.querySelectorAll('input');
    inputList.forEach(input => {
      input.addEventListener('input', () => {
        if (isProfileKey(input.id)) this.state[input.id] = input.value;
      });
    });

    const button = this.el.querySelector('button');
    button && button.addEventListener('click', ev => {
      ev.preventDefault();
      if (this.validateInput()) {
        profileStore.state.profiles.push(JSON.parse(JSON.stringify(this.state)));
        updateStorage(profileStore.state.profiles);
        this.state.message = 'Successfully created!';
        this.render();
        inputList.forEach(input => {
          input.value = '';
          if (isProfileKey(input.id)) this.state[input.id] = '';
        });
      } else {
        this.state.message = 'Please type in proper input format.';
        this.render();
      }
    });
  }
}