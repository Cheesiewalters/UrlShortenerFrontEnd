# url-react-frontend

This is a the front end for my URL shrinker that will consume the url-shrink-api

## Requirements: 

 - it will allow users to enter a URL  press shrink, this will cause a short URL to be displayed on their screen that the user can use to post their longer link.

 - error handling for when no url is entered 


## Running the Project:

Clone the project and cd into /url-react-frontend

Open terminal and type:

`Npm i` - this will install NPM dependencies for the project

`Npm run start` - this will start the project and open it in the browser

The project can also be run locally through docker:

Run `Docker build -t registry.hal.davecutting.uk/40198023/url-react-frontend .` to build the project

Run `Docker run -p 80:80 registry.hal.davecutting.uk/40198023/url-react-frontend` to run the container, this will run locally on port 3000

Written by Conor Walters