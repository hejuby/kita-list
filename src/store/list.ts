import { Store } from "../core/core";

interface Selected {
  selected: number[]
}

export const selectedStore = new Store<Selected>({
  selected: [] as number[]
});