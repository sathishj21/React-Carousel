# React Carousel

This carousel component created with react js. This component is responsive and fit into all device viewport. Images in this components are fetch from pixabay.com using API request. 

## Folder Structure
 >   * src
 >    * components
 >      * arrow.js
 >      * carousel.js
 >      * items.js
 >      * loader.js
 >    * constants
 >      * appConstant.js
 >    * copy
 >      * copy.json
 >    * fonts
 >    * spec
 >    * stylesheet
 >    * utils
 >      * carousel.js
 >    * App.js

## How it works
On application load, API call triggers to pixabay.com to fetch image data like image paths and title etc., all the API request constants added to **appConstant.js** file. API response data pass to item component to create images with title. This Item component render as wrapper with margin left position and width calculations based on screen innerwidth.

**Mobile & iPad:**
\
visibleCount = 1;
\
Wrapper-width = (screen-InnerWidth / visibleCount) x imageItem-count

**Desktop:**
\
visibleCount = 5;
\
Wrapper-width = (screen-InnerWidth / visibleCount) x imageItem-count

This image items wrapper insert to carousel container which is having 100 percent screen width. 

### Previous or Next
By default image array index of 0 is set to Active. The previous or next image set to active based on below logic.
 
**Previous:**
> **(((currentIndex + itemLength) -1) % itemLength)** \
> finding **previous** array index value with currentIndex has ** 0 ** and total image count has ** 6 ** then (((0+6)-1) % 6) equals 5. This sets the image-1 to image-6 (which is having image array index 0 to array index 5) as active index. 

**Next:**
> **((currentIndex + 1) % itemLength)** \
> finding **next** array index value with currentIndex has ** 0 ** and total image count has ** 6 ** then (((0+1)) % 6) equals 1. This sets the image-1 to image-2 (which is having image array index 0 to array index 1) as active index. 

Based on active index, the Image wrapper's margin-left will be changed with css animation `transition: 0.5s; transition-timing-function: cubic-bezier(.25,.1,.25,1);`

## Utils
All business logic added to **utils/carousel.js** file.


## Cdoe Coverage report
File             |  % Stmts | % Branch |  % Funcs |  % Lines | Uncovered Line #s |
-----------------|----------|----------|----------|----------|-------------------|
All files        |     94.2 |    80.77 |     87.5 |    95.59 |                   |
 src             |      100 |      100 |      100 |      100 |                   |
  App.js         |      100 |      100 |      100 |      100 |                   |
 src/components  |       90 |       60 |    81.25 |    92.31 |                   |
  arrow.js       |      100 |      100 |      100 |      100 |                   |
  carousel.js    |    82.61 |       60 |    72.73 |    86.36 |          43,53,57 |
  items.js       |      100 |      100 |      100 |      100 |                   |
  loader.js      |      100 |      100 |      100 |      100 |                   |
 src/constant    |      100 |      100 |      100 |      100 |                   |
  appConstant.js |      100 |      100 |      100 |      100 |                   |
 src/utils       |      100 |    93.75 |      100 |      100 |                   |
  carousel.js    |      100 |    93.75 |      100 |      100 |                21 |


**Test Suites: 5 passed, 5 total \
Tests:       17 passed, 17 total \
Snapshots:   4 passed, 4 total \
Time:        2.681s \
Ran all test suites.**



## Available Scripts
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
