# react-app-simple-calculator
A simple Calculator Application using [React JS](https://reactjs.org/docs/getting-started.html), a JavaScript library to make awesome UI by Facebook. Along with Calculator several small applications are also hosted. 

This application uses [React JS](https://reactjs.org/docs/getting-started.html) component oriented UI creation paradigm. All components are written in [JSX](https://reactjs.org/docs/jsx-in-depth.html) and ES6 style and are
combined using [Webpack 5](https://webpack.js.org/concepts/) to get the build for production purpose. 

[Babel](https://babeljs.io/docs/en/babel-preset-react) is used to *transpile* all [JSX](https://reactjs.org/docs/jsx-in-depth.html) code to vanilla JavaScript code. States and Props are used to pass data within components. To install all the dependecies `npm` is used.

For calculation of all the expressions [math.js](https://www.npmjs.com/package/mathjs) is used.

For UI creation [HTML5](https://www.w3schools.com/html/html5_intro.asp) and [CSS3](https://www.w3schools.com/css/) are used. [Grid](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout), the new feature of CSS3 is used for layout creation purpose.

This is a *responsive web application* for viewing in both Mobile and Desktop.


## Features
<ul>
 <li> Code is rewritten with <a href="https://reactjs.org/docs/getting-started.html">React JS 18</a> </li>
 <li> Latest features of JavaScript i.e. ES6+ or ESnext is used </li>
 <li> <a href="https://reactjs.org/docs/hooks-intro.html">React JS Hooks</a> are used with Functional components
</ul>

 - React [code splitting](https://reactjs.org/docs/code-splitting.html) with *Suspense* feature is added.
 - [React router](https://reactrouter.com/en/main) is added to maintain it as **Single Page Application (SPA)**.

### Calculator
- Enter an expression using the keypad layout shown in the application
- To get the result of the calculation / expression click the `=` button 
- It supports all the integer as well as floating point calculations
- Error messages would be shown if an symbol entered first
- As the web application is not backed by database / storage *no history of the calculation* is kept

### Todo List
<ul>
  <li> The app is loaded with some predefined todo items. </li>
  <li> Latest features of Javascript i.e. ES6, ES7, ES8 is used </li>
 </ul>
 
<ul>
 <li> Type an item in the input box and press <code>ENTER</code> key to add it in the todo list</li>
 <li> Deletion of an item is done by clicking the <code>X</code> icon </li> 
 <li> As the application is not backed by any database / storage all the items created or deleted is <i>not persistant</i> </li>
</ul>

### Clock
1. Basic clock example using [React JS](https://reactjs.org).
2. **Start** clock button is there to start the clock.
3. To stop the clock click **Stop** button

## Installation

Clone the repository:
```bash
$ git clone https://github.com/anijitsahu/react-app-simple-calculator.git
```
Navigate inside the directory and install all dependencies: 
```bash
$ cd react-app-simple-calculator/dist

# install all dependencies
$ npm install
```
Run the Application
```bash
$ npm start
```
Open `localhost:8080/` page in a web browser and enjoy
 
*tested with latest version of <img src="screenshots/chrome.png" width="20px" title="Google Chrome">[Google Chrome](https://www.google.com/chrome/) and <img src="screenshots/firefox.png" width="25px" title="Firefox Developer edition">[Mozilla Firefox](https://www.mozilla.org/en-US/firefox/new/)*  

## Screenshots

Some screens of the application is given below for better understanding. 

Desktop as well as Mobile version of the screenshots are given side by side

<p> Initial screen <br/> 
 <img src="screenshots/desktop 1.png" width="590px" title="Initial screen"/>
 <img src="screenshots/mobile 1.png" width="230px" title="Initial screen"/> 
</p>
 
 <p> Entering an expression <br/>
 <img src="screenshots/desktop 2.png" width="590px" title="Entering an expression screen"/>
 <img src="screenshots/mobile 2.png" width="230px" title="Entering an expression screen"/>
 </p>
 
 <p> Result of the expression <br/> 
 <img src="screenshots/desktop 3.png" width="590px" title="Result of the expression screen"/>
 <img src="screenshots/mobile 3.png" width="230px" title="Result of the expression screen"/>
 </p>

 co-contributer : Algo Eagle

 
 


