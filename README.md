# Notepad
> Angular 7 application integrated with GitHub Gists API

## Getting Started

#####  For running the app after clone do the following steps in the command line run

###### 1. Import a Git repository using the command line
```shell
git clone https://github.com/rhanesoghlyan/Notepad.git
```

###### 2. Install npm dependencies
```shell
npm install
```

###### 3. Generate a [Personal Access Token](https://github.com/settings/tokens) and set it into the environment file

###### 4. Run dev server
```shell
ng serve
```

Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Development process
* For styling the app used Bootstrap 4. Styles mentioned in the description of the task is not fully implemented.
* Always I'm creating core and shared modules (small shared modules) for Angular projects. But in our project scope I did not consider necessary for using them.  
* I did not create models for GitHub Gists API responses. 
* I did not create id for each note. But will be better to set unique id for each created note.
* For showing charts used Angular-highcharts

## Notes
* For testing notepad page please do hard reload (load page without caches) 
