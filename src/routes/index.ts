import Home from '../pages/Home';
import Profile from '../pages/Profile';
import Create from '../pages/Create';

export type RouteComponent = typeof Home | typeof Profile | typeof Create;

export interface RouteProps {
  href: string,
  name: string,
  component: RouteComponent
}

export type RouteElements = string | RouteComponent; 

export const routes: RouteProps[] = [
  { href: '#/', name: 'Home', component: Home },
  { href: '#/profile', name: 'Profile', component: Profile },
  { href: '#/create', name: 'Create', component: Create }
];