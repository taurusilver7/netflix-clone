# Netflix Clone

> A react-redux based movie watching application with material-ui stying & stripe powered for payment.

[Netflix logo](https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png)
[avatar icon](https://st2.depositphotos.com/1006318/5909/v/950/depositphotos_59095529-stock-illustration-profile-icon-male-avatar.jpg)
[netflix-banner](https://torranceca.files.wordpress.com/2019/10/netflix.jpg)
[netflix ad-1](https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg)
[netflix-ad-2](https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile-in.png)
[netflix ad-3](https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png)

[login logo-1](https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png)
[login- bkg-2](https://assets.nflxext.com/ffe/siteui/vlv3/538717c0-f271-40e9-a99e-b07f9c521322/f9b1cff8-a8f6-4cdf-9e2c-dd2db524f710/DE-en-20210201-popsignuptwoweeks-perspective_alpha_website_medium.jpg)

## Initializing react app & Setup firebase.

- The react application is created with react-redux started template using the command<br /> `npx create-react-app <app-name> --template redux`

* clean the template, public directory, src, app & features directory. refactor the counterSlive as appSlice with user & selectedImg states. create cameraReducer with chat features as actions..
* refactor the store in app directory to create appReducer & cameraReducer.

* Initialize the cloud firestore, initiate the store, create storage modify their rules to allow read & write w/o timestamp. Even though it is not production recommended, it is quite suitable for developement.
* Setup the web-app configuration for the project & copy the firebase SDK snippet config data-object to firebase.js file in the project.<br />
* Install firebase as a dependency,<br /> initiate the firebaseApp with firebase(),<br /> a databse with firestore(),<br /> auth with firebase.auth().

## Dependencies

- @material-ui/core
- @material-ui/icons
- @reduxjs/toolkit
- firebase
- react
- react-countdown-circle-timer
- react-dom
- react-redux
- react-router-dom
- react-scripts

## Compnents

- HomeScreen (contains navbar, banner & movie Row)
- Login page
- SignUp Page
- User Profile page.

* Add stripe checkout funtionality to process the monthly subscription for the user.
* Use firebase + Stripe extension.(just release a month ago).
* integrate the firebase real-time database (firestore) to keep track of user's subscription plans.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), using the [Redux](https://redux.js.org/) and [Redux Toolkit](https://redux-toolkit.js.org/) template.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
