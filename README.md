# Integration testing exercises

## Application under test

Personal blogging web application generated with [create-react-app](https://reactjs.org/docs/create-a-new-react-app.html).

### User stories

- **As a** blog site visitor **I can** look around the blog site using navigation menu **in order to** get acquainted with the content.
- **As a** blog site visitor **I can** open certain article displayed on the articles page **in order to** read that article.
- **As a** blog site owner **I want to** display page not found message to the user **in order to** let the user know when user stumbled upon an article that does not exist.

## Exercises
- [ ] Get to know the application
- [ ] Testing basic navigation with Cypress
- [ ] Creating a CI pipeline
- [ ] Writing mock integration tests against our back-end

## Exercise 1: Get to know the application

**Prerequisites:**
- NodeJS and NPM
- Cypress

Setup the application locally and get acquainted with the application, and it's code:
1. Checkout the repo from Gitlab (and push it where ever you prefer)
1. Install node modules: ```npm install```
1. Start the application in local development mode: ```npm start```
1. Familiarise yourself with the application
1. Familiarise yourself with React code. Try to understand how it works and/or checkout some tutorials on youtube (**Keywords:** *React*, *React Router*, *create-react-app*)

## Exercise 2: Testing basic navigation with Cypress

Testing navigation between different components:
- NavBar and other pages
- ArticlesList and ArticlePage
- Page not found and other pages (TDD)

**Steps:**
1. Installing Cypress
1. Install and configuring eslint for cypress
1. Write our first test
1. Write more tests and improve the testability at the same time (BEM)

## Exercise 3: Creating a CI pipeline in Gitlab for the front-end application

We will be creating a basic Gitlab CI pipeline for our front-end which will be  
checking the code we commit to the master branch.

**Steps:**
1. Install ```start-server-and-test```
1. Configure tests to run in CI environment
1. Create ```.gitlab-ci.yml``` file
1. Push changes to remote branch

## Exercise 4: Writing mock integration tests against our back-end with Cypress

We will be writing TDD integration tests against the back-end application by  
replacing dummy data (```article-content.js```) with API calls to the back-end  
that is still being developed.