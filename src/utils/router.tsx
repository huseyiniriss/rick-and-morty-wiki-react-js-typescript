import React from "react";
import {createBrowserRouter} from "react-router-dom";
import {Episode, EpisodeDetail, CharacterList, LocationList, NotFound, CharacterDetail} from "../pages";
import {Router as RemixRouter} from "@remix-run/router/dist/router";

export const ROUTES = {
  HOME: "/",
  EPISODE_DETAIL: "/episode/:id/",
  CHARACTER_DETAIL: "/character/:id/",
  CHARACTER_LIST: "/characters",
  LOCATION_LIST: "/locations",
  NOT_FOUND: "*",
}

export const ROUTER: RemixRouter = createBrowserRouter([
  {path: ROUTES.HOME, element: <Episode/>, index: true},
  {path: ROUTES.EPISODE_DETAIL, element: <EpisodeDetail/>},
  {path: ROUTES.CHARACTER_LIST, element: <CharacterList/>},
  {path: ROUTES.LOCATION_LIST, element: <LocationList/>},
  {path: ROUTES.CHARACTER_DETAIL, element: <CharacterDetail/>},
  {path: ROUTES.NOT_FOUND, element: <NotFound/>},
]);