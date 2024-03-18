import { Component } from "./core/core";

const newComponent = Component.createElement('h1', null, 'Hello');
const newElement = document.createElement(newComponent.type);
newElement.innerHTML = `${newComponent.children.join()}`;

export default Component.createElement('h1', null, 'Hello');