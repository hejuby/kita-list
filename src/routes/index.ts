import Home from "../pages/Home";
import Search from "../pages/Search";

export type RouteComponent = typeof Home | typeof Search;

export interface RouteProps {
  href: string,
  name: string,
  component: RouteComponent
}

export type RouteElements = string | RouteComponent; 

export const routes: RouteProps[] = [
  { href: "#/", name: "Home", component: Home },
  { href: "#/search", name: "Search", component: Search }
];
