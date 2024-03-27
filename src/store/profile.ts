import { Store } from "../core/core";
import { TYPE, COLOR } from '../constants/digimart';

type TypeId = typeof TYPE[keyof typeof TYPE]['ID'] | null;
type ColorId = typeof COLOR[keyof typeof COLOR]['ID'] | null;

export interface ProfileItem {
  name: string,
  type: TypeId,
  color: ColorId,
  brand: string,
  price: number,
  image: string[],
  memo: string
}

export type ProfileKeys = keyof ProfileItem;

export interface Profile {
  profiles: ProfileItem[]
}

const storage = localStorage.getItem("profiles");
export const profileStore = new Store<Profile>({
  profiles:
    (storage ? JSON.parse(storage) : [])
});

export function updateStorage(newProfiles: ProfileItem[]) {
  localStorage.setItem("profiles", JSON.stringify(newProfiles));
}

export const currentProfile = new Store<ProfileItem>({
  name: '',
  type: null,
  color: null,
  brand: '',
  price: 0,
  image: [],
  memo: ''
});