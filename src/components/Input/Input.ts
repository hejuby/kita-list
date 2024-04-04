import { Component } from "../../core/core";
import { OptionValue } from "../../constants/digimart";
import "./Input.scss";

const elementInputSelectArray = ["input", "select"] as const;

type elementInputSelectElemenets = typeof elementInputSelectArray[number];

interface InputProps {
  tagName: elementInputSelectElemenets,
  id: string,
  type?: string,
  array?: OptionValue[],
  placeholder?: string,
  accept?: string
}

export default class Input extends Component<InputProps> {
  constructor({ tagName, id, type, array, placeholder, accept }: InputProps) {
    super({
      tagName: tagName,
      props: {
        tagName: tagName,
        id: id,
        type: type,
        array: array,
        placeholder: placeholder,
        accept: accept
      }
    })
  }

  render() {
    this.el.id = this.props.id;

    if (this.el instanceof HTMLInputElement || this.el instanceof HTMLSelectElement)
      this.el.name = this.props.id;

    if (this.el instanceof HTMLInputElement && this.props.type) {
      this.el.type = this.props.type;
      if (this.props.placeholder) this.el.placeholder = this.props.placeholder;
      if (this.el.type === "file") {
        this.el.multiple = true;
        if (this.props.accept) this.el.accept = this.props.accept;
      }
    }

    if (this.el instanceof HTMLSelectElement && this.props.array) {
      this.props.array.forEach(option => {
        const newOption = document.createElement("option");
        if (option.ID) newOption.value = option.ID.toString();
        newOption.innerText = option.TEXT;
        this.el.append(newOption);
      })
    }
  }
}
