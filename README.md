<p align="center"> 
  <img src="public/logo512.png" alt="React Logo" width="80px" height="80px">
</p>
<h1 align="center"> A Netflix clone </h1>
<h3 align="center"> A combination of libraries and frameworks integrated to showcase using React as the frontend to create a basic Netflix-like user interface </h3>  
<h4 align="center"> Note: This project is still a WIP </h4>  
</br>

<!-- TABLE OF CONTENTS -->
<h2 id="table-of-contents"> :book: Table of Contents</h2>

<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li><a href="#about-the-project"> ➤ About The Project</a></li>
    <li><a href="#prerequisites"> ➤ Prerequisites</a></li>
    <li><a href="#folder-structure"> ➤ Folder Structure</a></li>
    <li><a href="#setup"> ➤ Setup</a></li>
    <li><a href="#config"> ➤ Config</a></li>
  </ol>
</details>

![-----------------------------------------------------](https://github.com/ChristopherVR/ChristopherVR/blob/main/rainbow.png)

<!-- ABOUT THE PROJECT -->
<h2 id="about-the-project"> :pencil: About The Project</h2>

<p align="justify"> 
  This project aims to integrate libraries (Create React App template with TypeScript, Tailwind, SASS) to demonstrate a basic netflix-like user inteface dedicated to my cat Jinx.
</p>

![-----------------------------------------------------](https://github.com/ChristopherVR/ChristopherVR/blob/main/rainbow.png)

<!-- PREREQUISITES -->
<h2 id="prerequisites"> :fork_and_knife: Prerequisites</h2>

[![made-with-react](https://img.shields.io/badge/-Made%20with%20React-blue)](https://reactjs.org/docs/create-a-new-react-app.html) <br>
[![build status][buildstatus-image]][buildstatus-url]

[buildstatus-image]: https://github.com/ChristopherVR/Jinxflix/blob/main/.github/workflows/badge.svg
[buildstatus-url]: https://github.com/ChristopherVR/Jinxflix/actions

<!--This project is written mainly in C# and JavaScript programming languages. <br>-->
The following open source packages are used in this project:
* <a href="https://reactjs.org/"> React</a> 
* <a href="https://reactjs.org/docs/create-a-new-react-app.html"> Create-React-App</a> 
* <a href="https://github.com/fkhadra/react-toastify"> React-Toastify</a>
* <a href="https://github.com/twbs/bootstrap"> Bootstrap 5.1</a> 
* <a href="https://github.com/mdbootstrap/mdb-react-ui-kit"> MDB 5</a> 
* <a href="https://github.com/eslint/eslint"> ESLint</a> 
* <a href="https://github.com/prettier/prettier"> Prettier</a> 
* <a href="https://www.themoviedb.org/"> The Movie DB</a> 
* <a href="https://tailwindui.com/"> Tailwind</a> 
* Human Activity Recognition documentation
* React-select documentation
 
![-----------------------------------------------------](https://github.com/ChristopherVR/ChristopherVR/blob/main/rainbow.png)

<!-- :paw_prints:-->
<!-- FOLDER STRUCTURE -->
<h2 id="folder-structure"> :cactus: Folder Structure</h2>
|   .eslintrc
|   .gitignore
|   package-lock.json
|   package.json
|   README.md
|   tailwind.config.js
|   tree.log
|   tsconfig.json
|   
+---.github
|   +---workflows
|           firebase-hosting-merge.yml
|           firebase-hosting-pull-request.yml
|           
|               
+---public
|       default_background.jpg
|       favicon.ico
|       fb.png
|       index.html
|       logo192.png
|       logo512.png
|       manifest.json
|       netflix-logo.png
|       robots.txt
|       user-avatar.png
|       
+---src
    |   App.test.tsx
    |   App.tsx
    |   Header.styles.ts
    |   Header.tsx
    |   Home.tsx
    |   index.scss
    |   index.tsx
    |   Loading.tsx
    |   Login.tsx
    |   LoginForm.tsx
    |   logo.svg
    |   Nav.styles.ts
    |   Nav.tsx
    |   react-app-env.d.ts
    |   reportWebVitals.ts
    |   Row.styles.ts
    |   Row.tsx
    |   setupTests.ts
    |   
    +---firebase
    |       firebase.ts
    |       
    +---images
    |       login_main.jpg
    |       
    +---moviedb
    |       moviedb.ts
    |       
    +---types
            Movie.ts
            twin.d.ts
 

![-----------------------------------------------------](https://github.com/ChristopherVR/ChristopherVR/blob/main/rainbow.png)

<!-- SETUP -->
<h2 id="setup"> :floppy_disk: Setup</h2>
<p> 
Clone the git repo and install dependencies.

Navigate to the source for the React-app:
```
npm ci
```

You can then run following scripts for local development

```
npm run build  // builds the React app 

npm test  // run unit tests

npm lint  // check for any linting issues

```

</p>

![-----------------------------------------------------](https://github.com/ChristopherVR/ChristopherVR/blob/main/rainbow.png)

<!-- ROADMAP -->
<h2 id="config"> :dart: Config</h2>

<p align="justify"> 
For the SPA project the following app settings needs to be configured (by creating an .env file):

* **REACT_APP_MOVIEDB_API_KEY**: indicates your tv MovieDB API key. This can be obtained here - https://www.themoviedb.org/settings/api.
* **REACT_APP_FIREBASE_API_KEY**: Indicates your firebase API key. This is required to demonstrate basic login functionality.

</p>

![-----------------------------------------------------](https://github.com/ChristopherVR/ChristopherVR/blob/main/rainbow.png)

