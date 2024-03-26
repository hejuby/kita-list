import { Store } from "../core/core";
import { TYPE, COLOR } from '../constants/digimart';

const typeIdList = Object.values(TYPE).map(type => type.ID);
const colorIdList = Object.values(COLOR).map(color => color.ID);

type TypeId = typeof typeIdList[number];
type ColorId = typeof colorIdList[number];

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
  type: 0,
  color: 0,
  brand: '',
  price: 0,
  image: [],
  memo: ''
});