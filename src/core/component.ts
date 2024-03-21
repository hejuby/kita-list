import {
  CreatedElement,
  CustomElementKeys
} from '../types';

export const createElement = <T extends CustomElementKeys, U = CreatedElement<T>> (nodeName: T): U => {
  const node = document.createElement(nodeName);

  return node as U;
} 