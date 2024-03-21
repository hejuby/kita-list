interface Payload {
  tagName: string,
  state: {
    [key: string]: unknown
  },
  props: {
    [key: string]: unknown
  }
}

type ComponentPayload = Partial<Payload>;

export class Component {
  public el;
  public state;
  public props;

  constructor(payload: ComponentPayload = {}) {
    const {
      tagName = 'div',
      state = {},
      props = {}
    } = payload;
    this.el = document.createElement(tagName);
    this.state = state;
    this.props = props;
    this.render();
  }

  render() {}
}