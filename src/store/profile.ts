import { Store } from "../core/core";

// export type PhoneNumber = `${number}-${number}-${number}` | string;

export interface ProfileItem {
  name: string,
  email: string,
  phoneNumber: string,
  description: string
}

export type ProfileKeys = keyof ProfileItem;

export type ProfileElements = string;

// type Profile = ProfileItem[] | null;

export interface Profile {
  profiles: ProfileItem[]
}

const defaultProfiles = [
  {
    name: 'Heejun',
    email: 'hejuby@gmail.com',
    phoneNumber: '010-9974-7515',
    description: 'Frontend Developer'
  },
  {
    name: 'Heejun',
    email: 'hejuby@gmail.com',
    phoneNumber: '010-9974-7515',
    description: 'Frontend Developer'
  },
  {
    name: 'Heejun',
    email: 'hejuby@gmail.com',
    phoneNumber: '010-9974-7515',
    description: 'Frontend Developer'
  }
];

const storage = localStorage.getItem("profiles");
export const profileStore = new Store<Profile>({
  profiles:
    (storage ? JSON.parse(storage) : defaultProfiles)
});

export function updateStorage(newProfiles: ProfileItem[]) {
  localStorage.setItem("profiles", JSON.stringify(newProfiles));
}
