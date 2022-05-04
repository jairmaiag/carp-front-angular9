# CarpFrontAngular
![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-007ACC?&logo=Visual+Studio+Code&logoColor=FFFFFF&style=flat) ![JavaScript](https://img.shields.io/badge/JavaScript-222222?&logo=JavaScript&logoColor=F7DF1E&style=flat)  ![Angular9](https://img.shields.io/badge/Angular%209.0.7-DD0031?&logo=angular&logoColor=FFFFFF&style=flat) ![JSON](https://img.shields.io/badge/json-000000?&logo=JSON&logoColor=FFFFFF&style=flat) ![NodeJs](https://img.shields.io/badge/Node.js-339933?&logo=nodedotjs&logoColor=FFFFFF&style=flat) ![NPM](https://img.shields.io/badge/NPM-CB3837?&logo=npm&logoColor=FFFFFF&style=flat) ![Docker](https://img.shields.io/badge/Docker-2496ED?&logo=Docker&logoColor=FFFFFF&style=flat) ![Express](https://img.shields.io/badge/Express-000000?&logo=Express&logoColor=FFFFFF&style=flat) ![Liquibase](https://img.shields.io/badge/Liquibase-2962FF?&logo=Liquibase&logoColor=FFFFFF&style=flat) ![PostgreSQL](https://img.shields.io/badge/PostgreSQL-4169E1?&logo=PostgreSql&logoColor=FFFFFF&style=flat) ![JSON Web Tokens](https://img.shields.io/static/v1?style=flat&message=JSON+Web+Tokens&color=000000&logo=JSON+Web+Tokens&logoColor=FFFFFF&label=)

## Objetivo
Projeto criado como front para o projeto [CARP](https://github.com/jairmaiag/carp).

## Configurção
Alterar o valor da propriedade `API` no arquivo `environment.ts`, para o caminho de acesso a api.

O git está atualizando, automaticamente o `package.json` e isto está fazendo o sistema **não funcionar**.  
Para resolver isso, copie e cole o código abaixo, na sessão `dependencies` e `devDependencies`.  
`  "dependencies": {  
    "@angular/animations": "~9.1.13",
    "@angular/common": "~9.1.13",
    "@angular/compiler": "~9.1.13",
    "@angular/core": "~9.1.13",
    "@angular/forms": "~9.1.13",
    "@angular/localize": "~9.1.13",
    "@angular/platform-browser": "~9.1.13",
    "@angular/platform-browser-dynamic": "~9.1.13",
    "@angular/router": "~9.1.13",
    "@ng-bootstrap/ng-bootstrap": "^6.2.0",
    "bootstrap": "^4.5.0",
    "font-awesome": "^4.7.0",
    "ngx-bootstrap": "^5.6.1",
    "popper.js": "^1.14.3",
    "rxjs": "~6.5.4",
    "tslib": "^1.10.0",
    "zone.js": "~0.10.2"
  },
  "devDependencies": {
    "@angular-devkit/build-angular": "~0.901.13",
    "@angular/cli": "~9.1.13",
    "@angular/compiler-cli": "~9.1.13",
    "@types/jasmine": "~3.5.0",
    "@types/jasminewd2": "~2.0.3",
    "@types/node": "^12.11.1",
    "codelyzer": "^5.1.2",
    "jasmine-core": "^4.1.0",
    "jasmine-spec-reporter": "~4.2.1",
    "karma": "~5.0.0",
    "karma-chrome-launcher": "~3.1.0",
    "karma-coverage-istanbul-reporter": "~2.1.0",
    "karma-jasmine": "~3.0.1",
    "karma-jasmine-html-reporter": "^1.4.2",
    "protractor": "~7.0.0",
    "ts-node": "~8.3.0",
    "tslint": "~6.1.0",
    "typescript": "~3.8.3"
  }`

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

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
