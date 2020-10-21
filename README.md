# Integration testing exercises

## Application under test

Personal blogging web application generated with [create-react-app](https://reactjs.org/docs/create-a-new-react-app.html).

### User stories

- **As a** blog site visitor **I can** look around the blog site using navigation menu **in order to** get acquainted with the content.
- **As a** blog site visitor **I can** read articles displayed on the articles page **in order to** further my education.
- **As a** blog site visitor **I can** read other articles which are displayed next to the article I am reading **in order to** satisfy my procrastination.
- **As a** blog site owner **I want to** display page not found message to the user **in order to** let the user know when user stumbled upon an article that does not exist.

## Exercises
- [ ] Get to know the application
- [ ] Testing navigation with Cypress
- [ ] Creating a CI pipeline in Gitlab

## Exercise 1: Get to know the application

**Prerequisites:**
- NodeJS and NPM
- Cypress

**Setup the application locally and get acquainted with the application, and it's code:**
1. Checkout the repo from Gitlab (and push it where ever you prefer)
1. Install node modules: ```npm install```
1. Start the application in local development mode: ```npm start```
1. Familiarise yourself with the application
1. Familiarise yourself with React code. Try to understand how it works and/or checkout some tutorials on youtube (**Keywords:** *React*, *React Router*, *create-react-app*)

## Exercise 2: Testing navigation with Cypress

**Testing navigation between different components:**
- NavBar and pages
- ArticlesList and ArticlePage
- Other articles
- Page not found (TDD)

**Steps:**
1. Install Cypress
1. Install and configure eslint for cypress
1. Write our first test
1. Write more tests and improve the testability at the same time

## Exercise 3: Creating a CI pipeline in Gitlab for the front-end application

We will be creating a basic Gitlab CI pipeline for our front-end which will be  
checking the code we commit to the master branch.

**Steps:**
1. Install ```start-server-and-test```
1. Configure tests to run in CI environment
1. Create ```.gitlab-ci.yml``` file
1. Push changes to remote branch