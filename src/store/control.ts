import { Store } from "../core/core";

export const controlStateArray = ["normal", "create", "delete"] as const;

export type ControlStateValues = typeof controlStateArray[number];

export interface ControlState {
  control: ControlStateValues;
}

export const controlState = new Store<ControlState>({
  control: "normal"
});