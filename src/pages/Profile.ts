import { Component } from "../core/core";
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import { isProfileKey, currentProfile } from "../store/profile";

interface ProfileURL {
  imageURL: string
}

export default class Profile extends Component<unknown, ProfileURL> {
  constructor() {
    super({
      tagName: 'div',
      state: {
        imageURL: ''
      }
    });
  }

  async render() {
    this.el.innerText = 'Loading...';

    if (currentProfile.state.image.length) {
      const storage = getStorage();
      await getDownloadURL(ref(storage, `images/${currentProfile.state.image}`))
        .then(url => {
          this.state.imageURL = url;
        })
        .catch(e => {
          console.log(e);
        });
    }

    this.el.innerHTML = Object.keys(currentProfile.state).map(key => {
      if (isProfileKey(key)) {
        if (key === 'image') return `<img src="${this.state.imageURL.length ? this.state.imageURL : '/public/profile_1280.png'}" style="width: 120px; height: 120px" alt="${currentProfile.state.name}" />`
        return `<div>${currentProfile.state[key]}</div>`;
      }
    }).join('');
  }
}