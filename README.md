# React test front

To have optimal conditions, it's recommended to use [visual studio code](https://code.visualstudio.com/) with the [live share](https://marketplace.visualstudio.com/items?itemName=MS-vsliveshare.vsliveshare) extension already installed  

![Image 1](/docs/liveshare.PNG?raw=true)

## Fetch apis : 
You will need to use these api for this exercise : https://jsonplaceholder.typicode.com/

---
## Step 1

Follow this design
* Use [react-bootstrap button](https://react-bootstrap.github.io/components/buttons/) for the head button
* Use [react-bootstrap](https://react-bootstrap.github.io/layout/grid/) to create a grid with 3 col
* Use [ListGroup](https://react-bootstrap.github.io/components/listgroup/) to create a placeholder


[![Image 1](/docs/screen_step_1.PNG?raw=true)](/docs/screen_step_1.PNG?raw=true)

---

## Step 2  

* On click on the button, load the [users api](https://jsonplaceholder.typicode.com/users) and the [albums api](https://jsonplaceholder.typicode.com/albums)
* Once the data loaded, change the button state
* Create a component to display the users data, for each user, list all their albums

[![Image 2](/docs/screen_step_2.PNG?raw=true)](/docs/screen_step_2.PNG?raw=true)

---

## Step 3  

* On click on an album button, load the first photo using this [api](https://jsonplaceholder.typicode.com/albums/1/photos)
* Use [react-bootstrap Modal](https://react-bootstrap.github.io/modal)
* Display the picture, the photo title and album title in the modal

[![Image 3](/docs/screen_step_3.PNG?raw=true)](/docs/screen_step_3.PNG?raw=true)

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.
