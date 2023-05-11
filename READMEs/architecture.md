## Architecture

The project consists of the following files and directories

directory/file structure with the action types and reducers separated out into individual files
with only one * (action,reducer,component,etc) per file so that the files are really short

The project follows a modular architecture that separates the source code into distinct directories and files

This allows for scalability, organization, and maintainability of the codebase

Each file is responsible for a specific part of the application making it easy to understand and maintain

to handle selecting which module to start the app with a routing system is used

create a set of routes that correspond to each module in the modules/ directory

When the user navigates to one of these routes, the corresponding module will be loaded and displayed

the interface will be a command-line, terminal, prompt style

react-native-terminal handles user input

there will be a series of questions and guidance and interactivity via user-typed commands that will feel very similar if not almost exactly the same as playing MUDs

the landing page terminal will start with the question "Which module would you like to select?"

initially the only module will be "sample"

## Directory Structure

directory structure and a brief explanation of each file

```
project-root/
  ├── README.md
  ├── favicon.ico
  ├── index.html
  ├── package.json
  └── styles/
  │   ├── README.md
  │   └── style.css
  ├── READMEs/
  │   ├── description.md
  │   ├── usage.md
  │   ├── installation.md
  │   ├── architecture.md
  │   ├── troubleshooting.md
  │   └── setup.md
  └── scripts/
       ├── README.md
       ├── app.js
       ├── store.js
       └── modules/
            ├── README.md
            └── sample/
                 ├── actions/
                 │   ├── README.md
                 │   └── *.js
                 ├── actionTypes/
                 │   ├── README.md
                 │   └── *.js
                 ├── components/
                 │   ├── README.md
                 │   └── *.js
                 └── reducers/
                      ├── README.md
                      └── *.js
```

- `root/`: A directory that contains the public files used by the web application, including the index.html file and any other static assets like images or fonts.
- `README.md`: Provides a brief overview of the project and links to documentation.
- `favicon.ico`: The icon file that appears in the browser tab.
- `package.json`: The file that contains information about the project, such as the name, version, dependencies, and scripts.
- `READMEs/`: A directory that contains documentation files for the project.
- `scripts/`: A directory that contains the scripts for the application.
- `modules/`: A directory that contains the modules for the application. Module types include language and mindset teaching courses and also MUD style games.
- `actions/`: A directory that contains the Redux action creators used by the application.
- `actionTypes/`: A directory that contains the constants used by the Redux actions.
- `reducers/`: A directory that contains the Redux reducers used by the application.
- `components/`: A directory that contains the React components used by the application.
- `styles/`: A directory that contains the CSS styles used by the application.

### HTML file

title tag containing "Project Root"

The `index.html` file serves as the entry point of the application and should include CDN links to Redux, React, Babel, react-dom, react-redux, react-router-dom, react-native-terminal

It also has a script tag that includes `app.js` using the `text/babel` type

### Script files

#### `app.js`
defines and renders the top-level React component
The "main" script file for the application

#### store.js

sets up and manages the Redux store

#### other script files

- [reducers](https://github.com/seandinwiddie/project-root/scripts/modules/[module-name]/reducers/README.md)
- [components](https://github.com/seandinwiddie/project-root/scripts/modules/[module-name]/components/README.md)
- [actionTypes](https://github.com/seandinwiddie/project-root/scripts/modules/[module-name]/actionTypes/README.md)
- [actions](https://github.com/seandinwiddie/project-root/scripts/modules/[module-name]/actions/README.md)