import { Component } from "../core/core";
import { ProfileItem } from "../store/profile";

export default class Item extends Component<ProfileItem> {
  constructor(props: ProfileItem) {
    super({
      props: props
    });
  }

  render() {
    this.el.innerHTML = `
      <a>
        ${this.props.name} ${this.props.email} ${this.props.phoneNumber} ${this.props.description}
      </a>
    `;
  }
}