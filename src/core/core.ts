export interface Indexable {
  [key: string]: unknown
}

interface Payload<P, S> {
  tagName?: string,
  props?: P,
  state?: S
}

// type ComponentPayload = Partial<Payload>;

export class Component<P = unknown, S = unknown> {
  public el;
  public props;
  public state;

  constructor(payload: Payload<P, S> = {}) {
    const {
      tagName = 'div',
      props = {} as P,
      state = {} as S
    } = payload;
    this.el = document.createElement(tagName);
    this.props = props;
    this.state = state;
    this.render();
  }

  render() {}

  static fragment(...elements: Element[]) {
    const fragment = new DocumentFragment();
    for (const element of elements) {
      fragment.append(element);
    }

    return fragment;
  }
}

interface StoreObservers {
  [key: string]: SubscribeCallback[]
}

interface SubscribeCallback {
  (arg: unknown): void
}

export class Store<S> {
  public state = {} as S;
  public observers = {} as StoreObservers;

  constructor(state: S) {
    for (const key in state) {
      Object.defineProperty(this.state, key, {
        get: () => state[key],
        set: val => {
          state[key] = val;
          if (this.observers[key]) this.observers[key].forEach(observer => observer(val));
        }
      });
    }
  }

  subscribe(key: string, cb: SubscribeCallback) {
    this.observers[key]
      ? this.observers[key].push(cb)
      : this.observers[key] = [cb];
  }
}
