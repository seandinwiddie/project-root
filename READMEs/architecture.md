## Architecture

The project consists of the following files and directories

directory structure and a brief explanation of each file

with only one * per file so that the files are really short

directory/file structure with the action types and reducers separated out into individual files

The project follows a modular architecture that separates the source code into distinct directories and files

This allows for easy organization and maintainability of the codebase

Each file is responsible for a specific part of the application making it easy to understand and maintain

## Directory Structure
```
project-root/
  ├── README.md
  ├── favicon.ico
  ├── index.html
  ├── package.json
  ├── READMEs/
  │   ├── description.md
  │   ├── usage.md
  │   ├── installation.md
  │   ├── architecture.md
  │   └── setup.md
  ├── scripts/
  │   ├── README.md
  │   ├── app.js
  │   ├── actions/
  │   │   ├── README.md
  │   │   └── *.js
  │   ├── actionTypes/
  │   │   ├── README.md
  │   │   └── *.js
  │   ├── reducers/
  │   │   ├── README.md
  │   │   ├── *.js
  │   │   └── reducer.js
  │   └── components/
  │        ├── README.md
  │        └── *.js
  └── styles/
       ├── README.md
       └── style.css
```

- `root/`: A directory that contains the public files used by the web application, including the index.html file and any other static assets like images or fonts.
- `README.md`: Provides a brief overview of the project and links to documentation.
- `favicon.ico`: The icon file that appears in the browser tab.
- `index.html`: The main HTML file for the application that includes the necessary CDN links for Redux, React, and Babel. It also has a script tag that includes `app.js` using the `text/babel` type.
- `package.json`: The file that contains information about the project, such as the name, version, dependencies, and scripts.
- `READMEs/`: A directory that contains documentation files for the project.
- `scripts/`: A directory that contains the scripts for the application.
- `actions/`: A directory that contains the Redux action creators used by the application.
- `actionTypes/`: A directory that contains the constants used by the Redux actions.
- `reducers/`: A directory that contains the Redux reducers used by the application.
- `components/`: A directory that contains the React components used by the application.
- `styles/`: A directory that contains the CSS styles used by the application.

### HTML file

- index.html: This file includes CDN links to React, Redux and Babel. It also includes a script tag that links to app.js and sets the type attribute to text/babel.

The `index.html` file serves as the entry point of the application and should include CDN links to Redux, React, and Babel. The `app.js` file is included as a script tag with the `type` attribute set to `text/babel`.
- `index.html`: The main HTML file for the application that includes the necessary CDN links for Redux, React, and Babel. It also has a script tag that includes `index.js` using the `text/babel` type.

### Script files

#### `app.js`

The main JavaScript file for the application. It sets up the Redux store, renders the top-level React component (`App`), and mounts it to the DOM. This file depends on other files located in the `reducers/`, `actions/`, and `components/` directories.

#### store.js

sets up the Redux store

It depends on the `character.js` and `step.js` files located in the `components/` directory.

#### render.js

Contains the `render` function that renders the `App` component to the DOM

renders the top-level React component

renders the App component into the root element in the index.html file

#### other js files

for later