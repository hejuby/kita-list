import { Component } from "../../core/core";
import { profileStore } from "../../store/profile";
import { selectedStore } from "../../store/list";
import InitialMessage from "../InitialMessage/InitialMessage";
import Filter from "../Filter/Filter";
import Create from "../Create/Create";
import Item from "../Item/Item";
import "./ItemList.scss";

export default class ItemList extends Component {
  constructor() {
    super({
      tagName: "section",
      state: {}
    });
    profileStore.subscribe("profiles", () => {
      this.el.innerHTML = "";
      this.render();
    });
  }

  render() {
    this.el.classList.add("content");

    const controllerWrapper = document.createElement("section");
    controllerWrapper.classList.add("controller");
    controllerWrapper.append(new InitialMessage().el, new Filter({ inputs: [] }).el);

    this.el.append(Component.fragment(controllerWrapper, new Create().el));

    profileStore.state.profiles.forEach((profile, index) => {
      const listItem = document.createElement("li");
      listItem.append(new Item(profile).el);
      this.el.append(listItem);

      // itemCheckbox.addEventListener("click", () => {
      //   const indexOfCheckbox = selectedStore.state.selected.indexOf(index);
      //   if (indexOfCheckbox > -1) {
      //     selectedStore.state.selected.splice(indexOfCheckbox, 1);
      //     itemCheckbox.checked = false;
      //   } else {
      //     selectedStore.state.selected.push(index);
      //     itemCheckbox.checked = true;
      //   }
      // }); 
    });
  }
}
