# Gatsby Firebase Auth Email
> This project is a sample application for authentication using Firebase Auth and Gatsby.
> The authetication will be done using email and password based authentication.

---

## Table of contents
* [Screenshots](#screenshots)
* [Technologies](#technologies)
* [Setup](#setup)
* [Features](#features)
* [Contact](#contact)

---

## Screenshots
![Example screenshot](./img/screenshot.png)

---

## Technologies
* Gatsby: version 2.15.36
* React: version 16.10.2
* TypeScript: version 3.6.4

---

## Setup
This project configured with Docker Compose to setup the development environment by using VSCode Devcontainer.
Ensure VSCode plugin 'Remote Development' `ms-vscode-remote.vscode-remote-extensionpack` is installed.

1. Clone this repo.
2. Open VSCode and open project in containar.
3. Install the dependencies.
```
yarn install
```
3. Start the development server.
```
yarn start
```
4. Open browser and open `http://localhost:8000` to view the page.

If Docker Compose is not installed, you may use the following guide.
This guide required Node is installed in the machine.

1. Clone this repo.
2. Install the dependencies
```
yarn install

# Or if yarn is not installed
npm install
```
3. Configure the script. You need to find and replace the lines according:
```
# package.json

--- Original
"develop": "gatsby develop --host 0.0.0.0 --port 8000",
--- Replace
"develop": "gatsby develop --port 8000",
```
4. Start the development server.
```
yarn start

# Or if yarn is not installed
npm start
```
4. Open browser and open `http://localhost:8000` to view the page.

---

## Features
To-do list:
* Login form to enter the details for authentication
* Notification message to display status of authentication

---

## Contact
Created by [Anas Juwaidi](mailto:anas.didi95@gmail.com)
