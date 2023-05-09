## Architecture

The project consists of the following files and directories

directory structure and a brief explanation of each file

with only one * per file so that the files are really short

directory/file structure with the action types and reducers separated out into individual files

Each file is responsible for a specific part of the application, making it easy to understand and maintain

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

#### other js files

for later

### Cascading Style Sheets files

- `styles/style.css`: Contains the CSS styles for the application.