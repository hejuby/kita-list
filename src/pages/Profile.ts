import { Component } from "../core/core";
import { isProfileKey, currentProfile } from "../store/profile";

export default class Profile extends Component {
  constructor() {
    super({
      tagName: 'div'
    });
  }

  render() {
    this.el.innerHTML = Object.keys(currentProfile.state).map(key => {
      if (isProfileKey(key)) return `<div>${currentProfile.state[key]}</div>`;
    }).join('');
  }
}