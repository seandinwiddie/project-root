# project
web application for generating DnD characters

simple application that guides users through the process of creating a DnD character

It uses Redux to manage the state of the application

It uses React to render the application

react native / expo go planned for the future

## Setup

To run this application, you can simply clone the repository and open the index.html file in your web browser

Make sure you have a stable internet connection as the application uses CDN links for React, Redux and Babel

## Installation
Clone this repository: `git clone https://github.com/seandinwiddie/dnd-char-gen.git`
Navigate to the project `directory: cd dnd-char-gen`
Install dependencies: `npm install`
Start `server: npm start`

fyi: Access to XMLHttpRequest from origin 'null' can be blocked by CORS policy as Cross origin requests are only supported for protocol schemes: http, data, isolated-app, chrome-extension, chrome, https, chrome-untrusted.

## Usage

Once you open the application in your web browser, you will be taken through a step-by-step process to create a DnD character.

The application will guide you through selecting your character's gender, race, class, and ability scores.

## Architecture

The project consists of the following files and directories

directory structure and a brief explanation of each file

with only one * per file so that the files are really short

directory/file structure with the action types and reducers separated out into individual files

Each file is responsible for a specific part of the application, making it easy to understand and maintain

```
project/
  ├── README.md
  ├── favion.ico
  ├── index.html
  ├── READMEs/
  │   ├── description.md
  │   ├── usage.md
  │   ├── installation.md
  │   ├── architecture.md
  │   └── setup.md
  ├── scripts/
  │   ├── app.js
  │   ├── actions/
  │   │   └── *.js
  │   ├── actionTypes/
  │   │   └── *.js
  │   ├── reducers/
  │   │   ├── *.js
  │   │   └── reducer.js
  │   └── components/
  │        └── *.js
  ├── styles/
  │   └── style.css
  └── package.json
```

- root/: Contains the public files used by the web application, including the index.html file and any other static assets like images or fonts.
- scripts/: Contains the source scripts/code for the web application.
- actions/: Contains the actions.
- actionTypes/: Contains the action type constants used by Redux actions.
- components/: Contains the React components used by the web application.
- reducers/: Contains the Redux reducers used by the web application.

### HTML file

- index.html: This file includes CDN links to React, Redux and Babel. It also includes a script tag that links to app.js and sets the type attribute to text/babel.

The `index.html` file serves as the entry point of the application and should include CDN links to Redux, React, and Babel. The `app.js` file is included as a script tag with the `type` attribute set to `text/babel`.
- `index.html`: The main HTML file for the application that includes the necessary CDN links for Redux, React, and Babel. It also has a script tag that includes `index.js` using the `text/babel` type.

### JavaScript files

#### store.js

sets up the Redux store

It depends on the `character.js` and `step.js` files located in the `components/` directory.

#### render.js

Contains the `render` function that renders the `App` component to the DOM

renders the top-level React component

renders the App component into the root element in the index.html file

#### reducers.js

Contains the Redux reducers for updating the character's name, race, and class.

This file exports a reducer function that updates the state of the application in response to dispatched actions.

#### actions.js

This file exports actions.

#### actionTypes.js

This file exports action types and creators.

#### character.js

This file exports a React component of the character creation form.

Contains the `Character` component of the form for creating a new character.

The file contains the definition of the `Character` component, which represents the DnD character being created.

#### other js files

The `step.js` file contains the definition of the `Step` component, which represents a step in the character creation process.

- `constants.js`: Contains the action types used in the Redux store.

- gender.js: This file exports a React component that renders the gender selection form.

- class.js: This file exports a React component that renders the class selection form.

- race.js: This file exports a React component that renders the race selection form.

- stats.js: This file exports a React component that renders the ability scores form.

### Cascading Style Sheets files

- `styles/style.css`: Contains the CSS styles for the application.