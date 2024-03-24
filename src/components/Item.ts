import { getStorage, ref, getDownloadURL } from "firebase/storage";
import { Component } from "../core/core";
import { ProfileItem, currentProfile } from "../store/profile";

interface ItemType extends ProfileItem {
  imageURL: string
}

export default class Item extends Component<ItemType> {
  constructor(props: ProfileItem) {
    super({
      props: {
        ...props,
        imageURL: ''
      }
    });
  }

  async render() {
    this.el.innerText = 'Loading...';

    if (this.props.image.length) {
      const storage = getStorage();
      await getDownloadURL(ref(storage, `images/${this.props.image}`))
        .then(url => {
          this.props.imageURL = url;
        })
        .catch(e => {
          console.log(e);
        });
    }

    this.el.innerHTML = `
      <a href="#/profile">
        <img src="${this.props.imageURL.length ? this.props.imageURL : '/public/profile_1280.png'}" style="width: 120px; height: 120px" alt="${this.props.name}" />
        ${this.props.name} ${this.props.email} ${this.props.phoneNumber} ${this.props.description}
      </a>
    `;

    const linkToProfile = this.el.querySelector('a');
    linkToProfile && linkToProfile.addEventListener('click', () => {
      currentProfile.state = this.props;
    });
  }
}