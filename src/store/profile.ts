import { Store } from "../core/core";

// export type PhoneNumber = `${number}-${number}-${number}` | string;

export const profileItemProperties = ["name", "email", "phoneNumber", "description", "imageURL"] as const; 

export type ProfileItemKeys = typeof profileItemProperties[number];

export type ProfileItem = Record<ProfileItemKeys, string>; 

export type ProfileKeys = keyof ProfileItem;

export type ProfileElements = string;

// type Profile = ProfileItem[] | null;

export const isProfileKey = (key: string): key is ProfileKeys => {
  return profileItemProperties.reduce((acc, cur) => {
    return acc || (cur === key);
  }, false);
}

export interface Profile {
  profiles: ProfileItem[]
}

const defaultProfiles = [
  {
    name: 'Heejun Byeon',
    email: 'hejuby@gmail.com',
    phoneNumber: '010-1111-2222',
    description: 'Frontend Developer',
    imageURL: ''
  },
  {
    name: 'Mark Zuckerberg',
    email: 'zuck@fb.com',
    phoneNumber: '010-3333-4444',
    description: 'Facebook CEO',
    imageURL: ''
  },
  {
    name: 'Porter Robinson',
    email: 'porterrobinson.com',
    phoneNumber: '010-5555-6666',
    description: 'Music Producer',
    imageURL: ''
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

export const currentProfile = new Store<ProfileItem>({
  name: '',
  email: '',
  phoneNumber: '',
  description: '',
  imageURL: ''
});