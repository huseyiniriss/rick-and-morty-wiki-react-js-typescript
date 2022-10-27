# Project Documentation

This document is a react project with rick and morty chapter, character and location information.

## Project setup and run

```
npm install
npm start
```

## Screenshots
<img src="screenshots/demo.gif" width="600" alt="demo.gif"/>


## Project structure

```
rick-and-morty-wiki-react-js-typescript
├── public
│   ├── favicon.ico
│   ├── index.html
│   ├── logo192.png
│   ├── logo512.png
│   ├── manifest.json
│   └── manifest.json
├── src
│   ├── components
│   │   ├── CharacterFilter.tsx
│   │   ├── NavigationBar.tsx
│   │   ├── PageWrapper.tsx
│   ├── pages
│   │   ├── CharacterDetail.tsx
│   │   ├── CharacterList.tsx
│   │   ├── Episode.tsx
│   │   ├── EpisodeDetail.tsx
│   │   ├── LocationList.tsx
│   │   ├── NotFound.tsx
│   │   └── index.tsx
│   ├── utils
│   │   ├── router.tsx
│   │   └── useAxios.ts
│   ├── index.tsx
│   ├── reportWebVitals.tsx
│   └── setupTests.tsx
├── .gitignore
├── package.json
├── package-lock.json
└── README.md
```

#### Used packages
* Typescript
* React.js
* React Router Dom
* Ant Design
* Axios


#### public folder
* This folder contains the public files (index.tsx, favicon.ico etc.) of the project.

#### src folder
* The src folder contains all the source code of the project.

#### src/components folder
* The components folder contains all the components of the project.
* PageWrapper.tsx: PageWrapper component is a wrapper component that wraps the components that need to be displayed on
  the page.
* NavigationBar.tsx: NavigationBar component is a navigation bar component that displays the navigation bar at the top of
  the page.
* CharacterFilter.tsx: CharacterFilter component is a filter component that filters the characters according to the name
  and status.

#### src/pages folder
* The pages folder contains all the pages of the project.
* index.tsx: index.tsx is a file that exports all the pages.
* NotFound.tsx: NotFound.tsx is a page that displays the 404 page.
* CharacterList.tsx: CharacterList.tsx is a page that displays the character list.
* CharacterDetail.tsx: CharacterDetail.tsx is a page that displays the character detail.
* LocationList.tsx: LocationList.tsx is a page that displays the location list.
* Episode.tsx: Episode.tsx is a page that displays the episode list.
* EpisodeDetail.tsx: EpisodeDetail.tsx is a page that displays the episode detail.

#### src/utils folder
* The utils folder contains all the utility functions of the project.
* useAxios.ts: useAxios.tsx is a custom hook that makes axios requests.
* router.tsx: router.tsx is a file that exports the router.

#### .gitignore file
* The .gitignore file contains the files and folders that should not be uploaded to the git repository.

#### package.json file
* The package.json file contains the project information and the dependencies of the project.

#### package-lock.json file
* The package-lock.json file contains the exact version of the dependencies of the project.

#### README.md file
* The README.md file contains the project documentation.

#### index.tsx file
* The index.tsx file is the entry point of the project.