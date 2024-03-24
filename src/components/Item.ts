import { Component } from "../core/core";
import { ProfileItem, currentProfile } from "../store/profile";

export default class Item extends Component<ProfileItem> {
  constructor(props: ProfileItem) {
    super({
      props: props
    });
  }

  render() {
    this.el.innerHTML = `
      <a href="#/profile">
        <img src="${this.props.imageURL.length ? null : '/public/profile_1280.png'}" style="width: 120px; height: 120px" alt="${this.props.name}" />
        ${this.props.name} ${this.props.email} ${this.props.phoneNumber} ${this.props.description}
      </a>
    `;

    const linkToProfile = this.el.querySelector('a');
    linkToProfile && linkToProfile.addEventListener('click', () => {
      currentProfile.state = this.props;
    });
  }
}