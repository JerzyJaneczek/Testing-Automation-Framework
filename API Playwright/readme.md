# Playwright (TS binding) + Cucumber (BDD) for API Testing
## Features

1. Report with screenshots, videos & logs
2. Execute tests on multiple environment 
3. Parallel execution
4. Rerun only failed features
5. Retry failed tests on CI
6. Page object model
7. Use tags on test to run specific set of tests
8. All api test provide assertions on requests as well as ensuring request was executed correctyl via data check

## Project structure

- src -> Contains all the features & Typescript code
- test-results -> Contains all the reports related file

## Reports

1. [Mutilple Cucumber Report](https://github.com/WasiqB/multiple-cucumber-html-reporter)
2. Default Cucumber report
3. [Logs](https://www.npmjs.com/package/winston)
4. Screenshots of failure
5. Test videos of failure

## Get Started

### Setup:

1. Download the project
2. Extract and open in the VS-Code
3. `npm i` to install the dependencies
4. `npx playwright install` to install the browsers
5. `npm test` to execute the tests

### Folder structure
0. `src\pages` -> All the page (UI screen), functionality for each page
1. `src\test\features` -> write your features here
2. `src\test\steps` -> Your step definitions goes here
3. `src\hooks\hooks.ts` -> Browser setup and teardown logic
4. `src\hooks\pageFixture.ts` -> Simple way to share the page objects to steps
5. `src\helper\types` -> To get environment code suggesstions
6. `src\helper\report` -> To generate the report
7. `cucumber.json` -> One file to do all execution
8. `package.json` -> Contains all the dependencies


### How to make your own test ###

## Note ##

* Steps from previously written scenarios can be reused
* Go to locators.json file in locators folder and configure xpath of components from each page
* Go to data folder and configure data sources or input data in data.json file
* If you want to tag specific tests then add/remove tags in cucumber.js folder in tags variables

0. Make a ${page}.feature file and write test script in BDD
1. In config go to cucumber.js and change dryRun variable to true
2. Run npm test
3. Copy function templates into a ${page}Steps.ts filew
4. Use functions from corresponding ${page}.ts file to manipulate page
