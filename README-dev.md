# legislative-autotracker

Angular CLI: 7.1.4  
Node: 8.14.0  
Angular: 7.1.4  
... animations, cli, common, compiler, compiler-cli, core, forms  
... http, language-service, platform-browser  
... platform-browser-dynamic, router  

|Package                           |Version|
|----------------------------------|-------|
|@angular-devkit/architect         |0.11.4 |
|@angular-devkit/build-angular     |0.11.4 |
|@angular-devkit/build-optimizer   |0.11.4 |
|@angular-devkit/build-webpack     |0.11.4 |
|@angular-devkit/core              |7.1.4  |
|@angular-devkit/schematics        |7.1.4  |
|@angular/cdk                      |7.2.0  |
|@angular/fire                     |5.1.1  |
|@angular/material                 |7.2.0  |
|@ngtools/webpack                  |7.1.4  |
|@schematics/angular               |7.1.4  |
|@schematics/update                |0.11.4 |
|rxjs                              |6.3.3  |
|typescript                        |3.1.6  |
|webpack                           |4.23.1 |

## Downloading and installing the code base

1. Download and install [Node.js](https://nodejs.org/en/download/):
````
# Node.js for Ubuntu Linux and Chromebooks
curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash -
sudo apt-get install -y nodejs
````

1. Clone the project repository:
````
git clone https://github.com/cwa-local-1118/legislative-autotracker.git
````

1. Install project dependencies:
````
npm install
````

1. Create `src/api-keys.ts` and add API Keys:
````
export const keychain = {
	firebase: 'FirebaseKey',
	googleCivicInfo: 'CivicInfoKey',
	nysOpenLeg: 'nysOpenLegKey'
}
````  
   CWA Members can reach out to user [@jpelton-stroud](https://github.com/jpelton-stroud) for test keys.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Dev Server on Chromebooks (via Project Crostini)
Due to the VM Environment used for Linux on Chromebooks, run the following instead.

`ng serve --disable-host-check --host 0.0.0.0 --open`

The `--open` flag should automatically open a Chrome browser tab; otherwise, once the server is running locally, you can navigate to `http://penguin.linux.test:4200` manually.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
