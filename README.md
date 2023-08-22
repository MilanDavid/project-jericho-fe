# Brand Guidelines

Brand guidelines Front end pages

## Setup
### Requirements
- Node
- Yarn

### Install
1. Install Node
2. Install yarn  ([install instructions](https://yarnpkg.com/en/docs/install#mac-tab))
3. Install dependencies
```
yarn
```
4. Start Webpack Dev Server
```
yarn dev
```


## Available Commands
```
// Run dev version of build
yarn dev

// Build compiled version of source files
yarn prod
```

## Themes

The webpack config will load theme files based on the theme name in your .env file. These files are:
- THEME_NAME/index.js - The start javascript file for webpack,
- THEME_NAME/index.html - The basic html for the theme
- styling/THEME_NAME/variables.scss - the custom variables for that theme


When create a new theme, these should all be copied. Look at the ra theme as an example
