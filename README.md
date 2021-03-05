## Índice

- [About](#about)
- [Folder structure](#folder-structure)
- [Available scripts](#available-scripts)
  - [yarn dev](#yarn-dev)
  - [yarn build](#yarn-build)
  - [yarn start](#yarn-start)
- [Before running](#before-running)
- [How this project was created](#how-this-project-was-created)

## About

An example project containing the steps to create a new React + Next JS app with Typescript, Styled Components and ESLint.

## Folder structure

```
.
├── src
│   ├── components
│   │   ├── component.tsx
│   │   └── [...]
│   ├── pages
│   │   ├── _app.tsx
│   │   ├── _document.tsx
│   │   ├── index.tsx
│   │   ├── <Page name>.tsx
│   │   ├── [...]
│   ├── styles
│   │   ├── pages
│   │   │   ├── Home.tsx
│   │   ├── components
│   │   │   ├── component.tsx
│   │   └── [...]
│   └── [...]
├── public
│   ├── static
│   │   ├── css
│   │   │   └── [...]
│   │   ├── imgs
│   │   │   └── [...]
│   │   └── favicon.ico
│   └── [...]
└── [...]
```


## Available scripts

### `yarn dev`

Runs the application in development mode.

### `yarn build`

Build the application to be deployed in production.

### `yarn start`

Runs the application previously built with command "yarn build".

## Before running

Before running or building the application (right after downloading this repository), run command "yarn" so that all dependencies are downloaded by the Yarn package manager.

## How this project was created

These are the steps that were executed to create this project:

```
yarn create next-app --example with-styled-components my-exemple

code my-exemple
```

In the VSCode terminal...

```
yarn upgrade next@10.0.7

yarn upgrade react@17.0.1

yarn upgrade react-dom@17.0.1

yarn upgrade react-is@17.0.1 

yarn upgrade styled-components@5.2.1

yarn upgrade babel-plugin-styled-components@1.12.0

yarn add typescript @types/react @types/react-dom @types/node -D

yarn add @types/styled-components -D

yarn add lodash

yarn add @types/lodash -D

yarn add styled-normalize
```

Rename the files in "pages" from ".js" to ".tsx"

```
yarn dev (will create the next-env.d.ts file)
```

Adjust files "_app.tsx", "_document.tsx" and "index.tsx" from "pages", as they are this example.

Install the VSCode plugin ESLint:
https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint

```
yarn add eslint -D

yarn eslint --init
```

Select the following options:

```
	* To check syntax, find problems, and enforce code style
	
	* JavaScript modules (import/export)
	
	* React
	
	* (Typescript?) Yes
	
	* Browser AND Node
	
	* Use a popular style guide
	
	* Airbnb
	
	* JSON
	
	* (Would you like to install?) Yes
```
	
After the download, delete the file "packade-lock.json" so there is no conflit between Yarn and NPM.

```
yarn
```

Create new file ".eslintignore" in the project root, as is in this example.

Update the file ".eslintrc.json", as is in this example.

Fix all ESLint errors.

In case you are using Windows and the End of Line Sequence is CRLF, you may have to delete and recreate the files "_app.tsx", "_document.tsx" and "index.tsx" from "pages", so that the end of line sequence will be what you expect and the ESLint will stop accusing this error: "Expected linebreaks to be 'CRLF' but found 'LF'. eslint linebreak-style"

```
yarn dev
```

Check if the app is loaded without problems!



