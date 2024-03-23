import Home from '../pages/Home';
import Profile from '../pages/Profile';
import Create from '../pages/Create';

export type RouteComponent = typeof Home | typeof Profile | typeof Create;

export interface RouteProps {
  href: string,
  component: RouteComponent
}

export type RouteElements = string | RouteComponent; 

export const routes: RouteProps[] = [
  { href: '#/', component: Home },
  { href: '#/profile', component: Profile },
  { href: '#/create', component: Create }
];