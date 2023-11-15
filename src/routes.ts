import { FC } from 'react';
import { RouteProps } from 'react-router-dom';
import Fail from './pages/Fail';
import FirstCity from './pages/FirstCity';
import ListOfCities from './pages/ListOfCities';
import OppWaiting from './pages/OppWaiting';
import Welcome from './pages/Welcome';
import Win from './pages/Win';
import {
  FAIL_ROUTE,
  FIRSTCITY_ROUTE,
  LISTOFCITIES_ROUTE,
  OPPWAITING_ROUTE,
  WELCOME_ROUTE,
  WIN_ROUTE,
} from './utils/consts';

export interface CustomRouteProps {
  path: string;
  Component: FC<RouteProps>;
}

export const publicRoutes: CustomRouteProps[] = [
  {
    path: FAIL_ROUTE,
    Component: Fail,
  },
  {
    path: WIN_ROUTE,
    Component: Win,
  },
  {
    path: OPPWAITING_ROUTE,
    Component: OppWaiting,
  },
  {
    path: LISTOFCITIES_ROUTE,
    Component: ListOfCities,
  },
  {
    path: WELCOME_ROUTE,
    Component: Welcome,
  },
  {
    path: FIRSTCITY_ROUTE,
    Component: FirstCity,
  },
];
