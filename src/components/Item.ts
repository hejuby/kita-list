import { Component } from "../core/core";
import { ProfileItem, ProfileElements } from "../store/profile";

export default class Item extends Component<ProfileElements> {
  constructor(props: ProfileItem) {
    super({
      props: { ...props }
    });
  }

  render() {
    if (this.props) this.el.innerHTML = `${this.props.name} ${this.props.email} ${this.props.phoneNumber} ${this.props.description}`;
  }
}